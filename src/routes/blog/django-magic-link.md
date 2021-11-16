---
title: Django Magic Link Authentication
date: '2021-11-14'
tags: ['magic link', 'auth', 'django', 'redis', 'python']
draft: false
summary: Learn how magic link authentication work by building one
image: '/images/magic.png'
layout: default
---


Magic link authentication is where the user is sent an email with a secure link. Once the user clicks the link, the application logs the user in. Magic link is a smart way to authenticate users because it takes away the need to set and remember a strong password.

An important thing to take care of is that anyone can use the link to authenticate. So make sure you don't accidentally expose the link to others.

Now let's see how we can set up magic link authentication in a Django app by leveraging the Django authentication system.

> This is just an experiment to show how magic links work. Check out [django-sesame](https://github.com/aaugustin/django-sesame) for production.

## Basic Setup

```bash
# prepare the env
virtualenv .venv
source .venv/bin/activate

# install Django
pip install django
django-admin startproject config .
```

Create a new app to manage our authentication and add it to `INSTALLED_APPS`.

```bash
python manage.py startapp accounts
```

Install and add Redis as a cache backend. We can later use Redis for storing our magic link tokens.

```bash
pip install django-redis
```

Add the following to `settings.py`

```python
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "default"

LOGIN_REDIRECT_URL = "dashboard"
LOGOUT_REDIRECT_URL = "home"
LOGIN_URL = "home"

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
```

Here we set up Redis to be our cache backend as well as for session cache. `LOGIN_REDIRECT_URL` and `LOGOUT_REDIRECT_URL` tell our application to redirect users after login and logout, respectively. `LOGIN_URL` is where our application would redirect our user if the user goes to a protected route without logging in. Finally, `EMAIL_BACKEND` is set to the console.

## The Views

Let's add some basic views to `accounts/views.py`

```python
from django.shortcuts import render
from django.http.request import HttpRequest
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_GET, require_http_methods


@require_http_methods(["GET", "POST"])
def home(request: HttpRequest):
    return render(request, "magic.html")


@require_GET
@login_required
def dashboard(request: HttpRequest):
    return render(request, "dashboard.html")
```

Here the `home` view handles the login form as well as sending the email. We will implement this feature in a later section.

## The Templates

Create the corresponding templates in the `templates` folder in the root directory. Make sure you set the templates directory in the `settings.py` file as well.

```html
<!-- templates/base.html -->

<html>
  <head>
    <title></title>
  </head>
  <body>
    {% block content %}{% endblock content %}
  </body>
</html>
```

```html
<!-- templates/magic.html -->

{% extends 'base.html' %} {% block content %}
<h1>Login</h1>
<br />
<form method="post">
  {% csrf_token %}
  <input type="email" name="email" required />
  <input type="submit" value="Send Login Instructions" />
</form>
{% endblock content %}
```

```html
<! -- templates/dashboard.html -->

{% extends 'base.html' %} {% block content %}
<h1>Dashboard</h1>
<br />
<h3>Hello {{user.email}}</h3>
{% endblock content %}
```

## Sending The Magic Link

Here are the steps to send the magic link

- Get an email address from the user
- Generate a token for the user
- Set the (token, email) pair on Redis for 10 minutes(10 \* 60)
- Send the email with the link `http://localhost:8000/magic-link/{token}`

Update the `home` view to send the magic link

```python
from .forms import MagicLinkForm
from django.core.mail import send_mail
from django.core.cache import cache
import secrets


@require_http_methods(["GET", "POST"])
def home(request: HttpRequest):
    if request.POST:
        form = MagicLinkForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data["email"]
            token = secrets.token_urlsafe(nbytes=32)
            link = f"http://localhost:8000/magic-link/{token}"
            cache.set(token, email, timeout=10 * 60)
            send_mail(
                subject="Magic Link",
                message=f"You link: {link}",
                from_email="amal@amalshaji.com",
                recipient_list=[email],
                fail_silently=True,
            )
    return render(request, "magic.html")
```

The `MagicLinkForm` comes from `accounts/forms.py`

```python
# accounts/forms.py

from django import forms


class MagicLinkForm(forms.Form):
    email = forms.EmailField()
```

Navigate to `http://localhost:8000` and use a random email to submit the form. Check your console; you should've received an email.

![Email sent to console](https://cdn.hashnode.com/res/hashnode/image/upload/v1636878714640/vQ6y8Zy61.png)

## Verify The Token

Now that the magic link is set up, we need to verify the token and authenticate the user.

- Get token from the request
- Check if the token exists
- Create a user if not exist
- Login user

```python
# accounts/views.py

from django.http.response import HttpResponseBadRequest
from django.contrib.auth.models import User
from django.contrib.auth import login

@require_GET
def autheticate_via_magic_link(request: HttpRequest, token: str):
    email = cache.get(token)
    if email is None:
        return HttpResponseBadRequest(content="Magic Link invalid/expired")
    cache.delete(token)
    user, _ = User.objects.get_or_create(email=email)
    login(request, user)
    return redirect("/dashboard")
```

Add the URL for the view to `accounts/urls.py`

```python
# accounts/urls.py

urlpatterns = [
    path("", home, name="home"),
    path("dashboard", dashboard, name="dashboard"),
    path("magic-link/<str:token>", autheticate_via_magic_link, name="magic_link"),
]
```

Check the new URL using a random token or an expired one.

![Wrong Token](https://cdn.hashnode.com/res/hashnode/image/upload/v1636884872738/QuL2AzeAb.png)

## Demo

![Django Magic Link Demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1636889184583/Z2w5oV9yJ.gif)

The objective of this experiment is to demonstrate how magic links work. However, for your production Django application, I would recommend not using the same approach. This is because the production environment requires a lot of security, and [django-sesame](https://github.com/aaugustin/django-sesame) is recommended.
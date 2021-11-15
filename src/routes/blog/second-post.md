---
title: Second Post
---

# {title}

# Test code

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
---
title: Global progress bar for htmx
date: '2022-01-16'
summary: Setup a single progress bar for all your htmx requests
image: '/images/htmx_progress.png'
layout: blog
---

## Table of contents

## Introduction

One of the cool features of htmx is that it lets you add a progress bar to your ajax requests with ease.
The [request-indicator (hx-indicator)](https://htmx.org/docs/#indicators) toggles the target element's (progress indicator element) opacity to `1` during the request and to `0` when the request ends.

:::info From htmx docs
When htmx issues a request, it will put a htmx-request class onto an element (either the requesting element or another element, if specified). The htmx-request class will cause a child element with the htmx-indicator class to transition to an opacity of 1, showing the indicator.
:::

This post is about adding a global progress bar for htmx. This way, you can define the progress bar once and attach it to all your htmx requests.

## Progress bar

Add the following progress bar to the top of the base template.

```html
<div class="progress" style="height: 3px; background-color: white;">
	<div class="indeterminate" style="background-color: red;"></div>
</div>
```

The associated css:

[https://gist.github.com/amalshaji/7f0b96ceb9fb53d9dd2b25fa7057ec47](https://gist.github.com/amalshaji/7f0b96ceb9fb53d9dd2b25fa7057ec47)

Then, add a progress attribute to all your htmx requests `hx-indicator=".progress"`

## Demo

<iframe src="https://codesandbox.io/embed/infallible-euclid-gtevo?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="infallible-euclid-gtevo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

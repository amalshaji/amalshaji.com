---
title: Adding Page Progress Bar To SvelteKit
date: '2021-11-21'
summary: Learn how to set up a youtube like page progress bar using nprogress
image: '/images/sveltekit_nprogress.png'
layout: blog
---

## Table Of Contents

## Introduction

Adding a progress bar to your SPA or [Transitional Application](https://www.youtube.com/watch?v=860d8usGC0o) can significantly impact the user. For example, a fast-finishing progress bar can signal how fast the page work. The faster experience, [the more likely the user will spend time on your website](https://www.cloudflare.com/en-in/learning/performance/more/website-performance-conversion-rates/). In case your website is slow, it can give a message like _❝it's working but need more time to load❞_.

:::info tip
convince your users that something is happening!
:::

Let's see how to add a page progress bar to your sveltekit application. We'll be using [nprogress](https://ricostacruz.com/nprogress/) to do so.

## Basic Setup

Assuming you have a basic sveltekit project setup using `npm init svelte@next`, let's add a `__layout.svelte` and `about.svelte` routes to the project.

```svelte
<!-- src/routes/__layout.svelte -->

<nav>
	<a href="/">Index</a>
	<a href="/about">About</a>
</nav>

<slot />
```

```svelte
<!-- src/routes/about.svelte -->

<h1>About page</h1>
```

## Installing NProgress

```bash
npm i -D nprogress
```

## Adding Progress Bar

We will use the [$app/stores](https://kit.svelte.dev/docs#modules) module for our progress bar. Specifically, the `$navigating` store.

> navigating is a [readable store](https://svelte.dev/tutorial/readable-stores). When navigating starts, its value is `{ from, to }`, where from and to both mirror the page store value. When navigating finishes, its value reverts to null - Official docs.

Update the `__layout.svelte` like so:

```svelte
<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress css
	import 'nprogress/nprogress.css';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<nav>
	<a href="/">Index</a>
	<a href="/about">About</a>
</nav>

<slot />
```

Notice the `$: { ... }` declaration. It is a [reactive declaration](https://svelte.dev/tutorial/reactive-declarations) is svelte. Every time something in the page changes, the code block runs.

Before testing out your app, navigate to dev tools and set the page to load from a slow connection.

![simulate slow network](https://cdn.hashnode.com/res/hashnode/image/upload/v1637475462878/vamvl0QbO.png)

For some reason your throttling is not working, (I used stackblitz and it wasn't working for me), add the following to any of your pages.

```svelte
<script context="module">
	export async function load() {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		return {
			props: {}
		};
	}
</script>
```

Basically, it creates a 2-second delay in the pages where it is added. Go back to your application and test it out.

## Demo

> Press `&#9658;`

<video controls>
    <source src="/images/sveltekit-nprogress-demo.mp4" type="video/mp4">
</video>

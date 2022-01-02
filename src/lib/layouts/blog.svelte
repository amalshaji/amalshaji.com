<script>
	import Seo from '$lib/components/SEO.svelte';
	import Date from '$lib/components/Date.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let title, summary, image, date;

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/code.css" />
	<link rel="stylesheet" href="/infima.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
	<title>{title}</title>
	<Seo {title} description={summary} {image} url={$page.url.pathname} />
</svelte:head>

{#if image}
	<div class="relative max-w-5xl mx-auto px-4">
		<img alt={title} src={image} class="rounded-lg shadow-sm w-full object-contain" />
		<div
			class="absolute top-4 right-8 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-0.5"
		>
			<Date {date} />
		</div>
	</div>
{/if}
<article class="prose dark:text-white lg:prose-lg mx-auto my-8 dark:prose-dark px-4">
	<h1 class="text-2xl font-semibold mb-2">{title}</h1>
	<!-- <h5 class="text-sm flex items-center"> -->
	<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			class="mr-1"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="4" y="5" width="16" height="16" rx="2" />
			<line x1="16" y1="3" x2="16" y2="7" />
			<line x1="8" y1="3" x2="8" y2="7" />
			<line x1="4" y1="11" x2="20" y2="11" />
			<rect x="8" y="15" width="2" height="2" />
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="mr-1"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="12" r="9" />
			<polyline points="12 7 12 12 15 15" />
		</svg> -->
	<!-- {{ i18n "readingTime"}}{{ .ReadingTime }}&nbsp;{{ i18n "readTime" }}
      &nbsp;&bull; -->
	<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			class="mx-1"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
			<path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
			<line x1="3" y1="6" x2="3" y2="19" />
			<line x1="12" y1="6" x2="12" y2="19" />
			<line x1="21" y1="6" x2="21" y2="19" />
		</svg> -->
	<!-- {{ .WordCount }}&nbsp;{{ i18n "words" }} -->
	<!-- </h5> -->

	<slot />
</article>

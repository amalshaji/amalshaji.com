<script>
	import Seo from '$lib/components/SEO.svelte';
	import Date from '$lib/components/Date.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import CircularScrollProgressBar from '$lib/components/CircularScrollProgressBar.svelte';
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
	<div class="relative max-w-5xl mx-auto px-4 mt-5">
		<img alt={title} src={image} class="rounded-lg shadow-sm w-full object-contain" />
		<div
			class="absolute top-4 right-8 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-0.5"
		>
			<Date {date} />
		</div>
	</div>
{/if}
<div class="block md:flex lg:w-1/2 mx-auto">
	<div class="text-lg mr-24 mt-48 hidden md:block sticky inset-x-0 top-48 h-48 left-0">
		<a
			class="px-4 py-2 bg-blue-400 text-white rounded-full flex"
			href="https://twitter.com/pydantic"
			target="_blank"
			rel="noreferrer"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="28"
				fill="white"
				class="my-auto"
				viewBox="0 0 16 16"
			>
				<path
					d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
				/>
			</svg></a
		>
		<a
			class="px-4 py-2 my-1 bg-gray-700 text-white rounded-full flex"
			href="https://github.com/amalshaji"
			target="_blank"
			rel="noreferrer"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="28"
				fill="currentColor"
				class="my-auto"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				/>
			</svg></a
		>
		<a
			class="px-4 py-2 my-1 bg-gray-200 text-black rounded-full flex"
			href="mailto:amalshajid@gmail.com"
			target="_blank"
			rel="noreferrer"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="28"
				fill="currentColor"
				class="my-auto"
				viewBox="0 0 16 16"
			>
				<path
					d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
				/>
			</svg></a
		>
		<CircularScrollProgressBar />
	</div>
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
</div>

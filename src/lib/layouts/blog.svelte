<script>
	import './infima.css';
	import Seo from '$lib/components/SEO.svelte';
	import Date from '$lib/components/Date.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import '@fontsource/inter';
	import '@fontsource/roboto-mono';
	import '@fontsource/plus-jakarta-sans';

	export let title, summary, image, date;

	const initial_scroll = () => {
		const hashed_url = window.location.hash;
		if (hashed_url !== '') {
			try {
				const topPos = document.getElementById(hashed_url.replace('#', '')).offsetTop;
				window.scrollTo(0, topPos);
			} catch (_) {
				window.scrollTo(0, 0);
			}
		} else {
			window.scrollTo(0, 0);
		}
	};

	onMount(() => {
		initial_scroll();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
	<title>{title}</title>
	<Seo {title} description={summary} {image} url={$page.url.pathname} />
</svelte:head>

{#if image}
	<div class="max-w-5xl mx-auto px-4 mt-5">
		<img alt={title} src={image} class="rounded-lg shadow-sm w-full object-contain z-0" />
		<!-- <div
			class="absolute top-4 right-8 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-0.5"
		>
			<Date {date} />
		</div> -->
	</div>
{/if}
<div class="max-w-6xl mx-auto break-words">
	<article
		class="prose prose-headings:font-semibold text-black dark:text-white lg:prose-lg mx-auto px-4 md:px-0 my-8 dark:prose-dark"
	>
		<h1 class="text-center">{title}</h1>
		<p class="font-semibold mx-auto text-white bg-red-500 rounded-md px-2 w-fit"><Date {date} /></p>
		<div class="text-black text-lg leading-8 break-words md:text-xl md:leading-9">
			<slot />
		</div>
	</article>
</div>

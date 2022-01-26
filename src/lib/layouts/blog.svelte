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
	<div class="relative max-w-5xl mx-auto px-4 mt-5">
		<img alt={title} src={image} class="rounded-lg shadow-sm w-full object-contain" />
		<div
			class="absolute top-4 right-8 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-0.5"
		>
			<Date {date} />
		</div>
	</div>
{/if}
<div class="w-full mx-auto">
	<article class="prose text-black dark:text-white lg:prose-lg mx-auto my-8 dark:prose-dark px-4">
		<h1>{title}</h1>
		<slot />
	</article>
</div>

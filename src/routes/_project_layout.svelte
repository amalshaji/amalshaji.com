<script>
	import Seo from '$lib/components/SEO.svelte';
	import { page } from '$app/stores';
	import '../../static/code.css';
	import { onMount } from 'svelte';

	export let title, description, image, link;

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />

	<Seo {title} {description} {image} url={$page.path} />
</svelte:head>

<div
	class="prose w-full mx-1 my-2 md:my-8 md:mx-auto lg:w-3/4 dark:text-gray-50 dark:prose-dark px-4 py-2 sm:dark:border dark:border-gray-700 rounded-lg"
>
	<div class="text-center">
		<h1>{title}</h1>
		<blockquote>{description}</blockquote>
	</div>

	{#if image}
		<img src={image} alt={title} loading="lazy" />
	{/if}
	<a href={link} class="flex" target="_blank" rel="noreferrer"
		>Preview <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 my-auto mx-1"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
			/>
			<path
				d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
			/>
		</svg></a
	>
	<slot />
</div>

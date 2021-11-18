<script>
	import Seo from '$lib/components/SEO.svelte';
	import Date from '$lib/components/Date.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let title, summary, image, date, tags;

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/code.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />

	<Seo {title} description={summary} {image} url={$page.path} />
</svelte:head>

<div
	class="prose w-full mx-1 my-2 md:my-8 md:mx-auto lg:w-3/4 dark:text-gray-50 dark:prose-dark px-4 py-2 sm:dark:border dark:border-gray-700 rounded-lg"
>
	<div class="text-center">
		<p><Date {date} /></p>
		<h1>{title}</h1>
		<hr />
		<div class="flex text-sm sm:text-md flex-wrap text-center">
			{#each tags as tag}
				<a class="mx-1 my-1" href={`/tags/${tag}`}>#{tag.toUpperCase()}</a>
			{/each}
		</div>
	</div>

	{#if image}
		<img src={image} alt={title} loading="lazy" />
	{/if}

	<slot />
</div>

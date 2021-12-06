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
	<title>{title}</title>
	<Seo {title} description={summary} {image} url={$page.path} />
</svelte:head>

<div class="prose w-full my-2 md:my-8 md:mx-auto dark:prose-dark px-2 sm:px-0 py-2">
	<div class="text-center w-full">
		<p><Date {date} /></p>
		<p class="text-3xl font-semibold dark:text-gray-300">{title}</p>
		<p class="text-xl dark:text-gray-400">{summary}</p>
		<div class="flex text-sm sm:text-md flex-wrap">
			{#each tags as tag}
				<a class="mx-auto my-1" href={`/tags/${tag}`}>#{tag.toUpperCase()}</a>
			{/each}
		</div>
		<hr />
	</div>

	{#if image}
		<div class="w-full h-56 sm:h-96 my-4">
			<img src={image} alt={title} class="my-2 rounded-lg" loading="lazy" />
		</div>
	{/if}

	<slot />
</div>

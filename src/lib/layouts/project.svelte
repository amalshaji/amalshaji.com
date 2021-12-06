<script>
	import Seo from '$lib/components/SEO.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let title, description, image, link, github;

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/code.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
	<title>{title} | Amal Shaji</title>
	<Seo {title} {description} {image} url={$page.path} />
</svelte:head>

<div class="prose w-full my-2 md:my-8 md:mx-auto dark:prose-dark py-2 px-2 sm:px-0">
	<div class="text-center">
		<p class="text-3xl font-semibold dark:text-gray-300">{title}</p>
		<p class="text-xl dark:text-gray-400">{description}</p>
	</div>

	{#if image}
		<div class="w-full h-56 sm:h-96 my-4">
			<img src={image} alt={title} class="my-2 rounded-lg" loading="lazy" />
		</div>
	{/if}
	<div class="flex mx-2 my-8">
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
		{#if github}
			<a href={github} class="flex" target="_blank" rel="noreferrer"
				>Source <svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-github my-auto mx-1"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg></a
			>
		{/if}
	</div>
	<slot />
</div>

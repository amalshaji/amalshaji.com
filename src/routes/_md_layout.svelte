<script>
	import Seo from '$lib/components/SEO.svelte';
	import Date from '$lib/components/Date.svelte';
	export let title, summary, image, date, tags;
</script>

<svelte:head>
	<Seo {title} description={summary} {image} />
</svelte:head>

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-center">
		<p><Date {date} /></p>
		<h1>{title}</h1>
		{#each tags as tag}
			<a class="mx-1 my-1" href={`/tags/${tag}`}>{tag.toUpperCase()}</a>
		{/each}
	</div>

	{#if image}
		<img src={image} alt={title} />
	{/if}

	<slot />
</div>

<script>
	import Seo from '$lib/components/SEO.svelte';
	import Date from '$lib/components/Date.svelte';
	export let title, summary, image, date;
</script>

<svelte:head>
	<Seo {title} description={summary} {image} />
</svelte:head>

<div class="text-center">
	<p><Date {date} /></p>
	<h1>{title}</h1>
</div>

{#if image}
	<img src={image} alt={title} />
{/if}

<slot />

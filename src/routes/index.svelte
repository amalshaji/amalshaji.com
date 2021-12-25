<script context="module">
	const allPosts = import.meta.glob('./blog/*{md,svx}');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async () => {
		const posts = (await Promise.all(body)).slice(0, 5);
		posts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import Hero from '$lib/components/Hero.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	export let posts;
</script>

<svelte:head>
	<title>Amal Shaji</title>
	<Seo />
</svelte:head>

<Hero />

<h1 class="container px-6 pt-6 mx-auto text-3xl font-semibold">Latest posts</h1>

<div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	{#each posts as post}
		<BlogCard {post} />
	{/each}
</div>

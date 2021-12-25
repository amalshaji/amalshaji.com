<script context="module">
	const allPosts = import.meta.glob('./*{md,svx}');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async () => {
		const posts = await Promise.all(body);
		posts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import Seo from '$lib/components/SEO.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	export let posts;
	let search = '',
		filteredPosts = [];

	const filter = () => {
		if (search.length > 0) {
			filteredPosts = posts.filter(
				(post) =>
					post.metadata.title.toLowerCase().includes(search) ||
					post.metadata.summary.toLowerCase().includes(search)
			);
		} else {
			filteredPosts = posts;
		}
	};
	filteredPosts = posts;
</script>

<svelte:head>
	<title>Blog | Amal Shaji</title>
	<Seo title="Blog | Amal Shaji" url="/blog" />
</svelte:head>

<h1 class="container px-6 pt-6 mx-auto text-3xl font-semibold">
	Blog
	<p class="prose text-lg font-semibold text-gray-500 dark:text-gray-400">
		Use the search bar to filter posts by title or summary
	</p>
	<input
		type="text"
		bind:value={search}
		on:input={filter}
		class="px-2 py-1 text-lg w-full mt-4 mb-8 border border-gray-400 dark:text-gray-400 dark:bg-gray-800 focus:border-yellow-500 rounded-md"
		placeholder="Search articles"
	/>
</h1>

<div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	{#each filteredPosts as post}
		<BlogCard {post} />
	{/each}
</div>

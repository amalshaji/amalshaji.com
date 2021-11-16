<script context="module">
	const allPosts = import.meta.glob('../blog/*{md,svx}');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async ({ page }) => {
		const posts = await Promise.all(body);
		const tag = page.params.tag;

		const filteredPosts = posts.filter((post) => {
			return post.metadata.tags.includes(tag);
		});
		filteredPosts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
		return {
			props: {
				filteredPosts,
				tag
			}
		};
	};
</script>

<script>
	export let filteredPosts, tag;
	import Seo from '$lib/components/SEO.svelte';
</script>

<svelte:head>
	<Seo title={`Posts on ${tag.toUpperCase()} by Amal`} url={`/tags/${tag}`} />
</svelte:head>

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<h1>All posts on <code>{tag.toUpperCase()}</code></h1>

	<ul>
		{#each filteredPosts as post}
			<li>
				<a href={`/blog/${post.path.replace('.md', '').replace('.svx', '')}`}
					>{post.metadata.title}</a
				>
			</li>
		{/each}
	</ul>
</div>

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
	export let posts;
	import Seo from '$lib/components/SEO.svelte';
</script>

<svelte:head>
	<Seo title="Blog | Amal Shaji" url="/blog" />
</svelte:head>

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-2xl md:text-4xl font-semibold my-4">All posts</div>

	<ul>
		{#each posts as post}
			<li>
				<a href={`/blog/${post.path.replace('.md', '').replace('.svx', '')}`}
					>{post.metadata.title}</a
				>
			</li>
		{/each}
	</ul>
</div>

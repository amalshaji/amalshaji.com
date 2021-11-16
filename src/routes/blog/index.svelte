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

<Seo title="Posts by Amal" url="https://amalshajid.netlify.app/blog" />

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<h1>All posts</h1>

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

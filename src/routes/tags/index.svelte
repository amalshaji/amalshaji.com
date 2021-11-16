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
	export const load = async () => {
		const posts = await Promise.all(body);
		let tagMap = {};

		for (var i = 0; i < posts.length; i++) {
			const tags = posts[i].metadata.tags;
			for (var j = 0; j < tags.length; j++) {
				if (tagMap[tags[j]]) tagMap[tags[j]]++;
				else tagMap[tags[j]] = 1;
			}
		}

		return {
			props: {
				tagMap
			}
		};
	};
</script>

<script>
	export let tagMap;
	import Seo from '$lib/components/SEO.svelte';
</script>

<svelte:head>
	<Seo title="Tags | Amal Shaji" url="/tags" />
</svelte:head>

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-2xl md:text-4xl font-semibold my-4">All Tags</div>
	{#each Object.entries(tagMap) as [tag, count]}
		<a class="mx-1" href={`/tags/${tag}`}>{`${tag.toUpperCase()} - (${count})`}</a>
	{/each}
</div>

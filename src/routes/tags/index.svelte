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
	<title>Tags | Amal Shaji</title>
	<Seo title="Tags | Amal Shaji" url="/tags" />
</svelte:head>

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-2xl md:text-4xl font-semibold my-4 dark:text-gray-400">All Tags</div>
	<div class="flex flex-wrap">
		{#each Object.entries(tagMap) as [tag, count]}
			<div class="mx-2">
				<a href={`/tags/${tag}`}>{`${tag.toUpperCase()}`}</a>
				<span class="text-sm dark:text-gray-400">({count})</span>
			</div>
		{/each}
	</div>
</div>

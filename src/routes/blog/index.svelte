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
	import BlogCardUpdated from '$lib/components/BlogCardUpdated.svelte';
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

<section
	class="py-24 bg-white"
	style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-repeat: no-repeat; background-position: left top;"
>
	<div class="container px-4 mx-auto">
		<div class="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
			<span
				class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm"
				>Blog</span
			>
			<h3 class="mb-4 text-2xl leading-11 md:text-4xl text-darkCoolGray-900 font-bold">
				I write about python, django, svelte. Currently I'm learning typescript and react.
			</h3>
			<div class="relative mx-auto md:w-80">
				<img
					class="absolute top-1/2 left-4 transform -translate-y-1/2"
					src="flex-ui-assets/elements/blog/search.svg"
					alt=""
				/>
				<input
					class="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
					type="text"
					placeholder="Search"
					bind:value={search}
					on:input={filter}
				/>
			</div>
		</div>
		<div class="flex flex-wrap -mx-4 mb-12 md:mb-20">
			{#each filteredPosts as post}
				<BlogCardUpdated {post} />
			{/each}
		</div>
	</div>
</section>

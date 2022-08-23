<script>
	export let data;
	let posts = data.posts;

	import Seo from '$lib/components/SEO.svelte';
	import BlogCardUpdated from '$lib/components/BlogCardUpdated.svelte';
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

<section class="py-8 bg-white">
	<div class="container px-4 mx-auto">
		<div class="md:max-w-5xl mx-auto text-center">
			<h3 class="mb-8 text-2xl leading-11 md:text-4xl text-darkCoolGray-900 font-semibold">
				I love working with python, go, svelte
			</h3>
			<div>
				<div class="mt-4">
					<input
						type="text"
						placeholder="fastapi"
						bind:value={search}
						on:input={filter}
						class="border py-3 pl-12 w-full sm:w-1/2 mx-auto block rounded-md"
					/>
				</div>
			</div>
		</div>
		<div class="relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
			<div class="relative max-w-7xl mx-auto">
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{#each filteredPosts as post}
						<BlogCardUpdated {post} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

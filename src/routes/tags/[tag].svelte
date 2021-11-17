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
	import Date from '$lib/components/Date.svelte';

	let search = '',
		filteredPostsByTag = [];

	const filter = () => {
		if (search.length > 0) {
			filteredPostsByTag = filteredPosts.filter(
				(post) =>
					post.metadata.title.toLowerCase().includes(search) ||
					post.metadata.summary.toLowerCase().includes(search)
			);
		} else {
			filteredPostsByTag = filteredPosts;
		}
	};
	filteredPostsByTag = filteredPosts;
</script>

<svelte:head>
	<Seo title={`Posts on ${tag.toUpperCase()} by Amal`} url={`/tags/${tag}`} />
</svelte:head>

<div class="mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-2xl md:text-4xl font-semibold my-4 dark:text-gray-50">
		All posts on <span class="font-sans text-primary-700">{tag.toUpperCase()}</span>
	</div>
	<input
		type="text"
		bind:value={search}
		on:input={filter}
		class="px-4 w-full md:w-1/2 my-8 border border-gray-400 dark:border-gray-700 dark:text-gray-50 dark:bg-gray-800 focus:border-yellow-500 rounded-lg"
		placeholder="Search articles"
	/>
	<ul>
		{#each filteredPostsByTag as post}
			<li class="my-2 py-2">
				<article class="space-y-2 lg:grid lg:grid-cols-4 lg:space-y-0 lg:items-baseline">
					<dl>
						<dt class="sr-only">Published on</dt>
						<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
							<Date date={post.metadata.date} />
						</dd>
					</dl>
					<div class="space-y-3 lg:col-span-3">
						<div>
							<h3 class="text-2xl font-bold leading-8 tracking-tight">
								<a
									href={`/blog/${post.path.replace('.md', '').replace('.svx', '')}`}
									class="text-gray-900 dark:text-gray-100"
								>
									{post.metadata.title}
								</a>
							</h3>
							<div class="flex flex-wrap prose">
								{#each post.metadata.tags as tag}
									<a class="mx-1" href={`/tags/${tag}`}>{tag.toUpperCase()}</a>
								{/each}
							</div>
						</div>
						<div class="prose text-gray-500 max-w-none dark:text-gray-400">
							{post.metadata.summary}
						</div>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</div>

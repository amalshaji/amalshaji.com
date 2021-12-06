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
	import Date from '$lib/components/Date.svelte';
	import Seo from '$lib/components/SEO.svelte';
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

<div class="mx-6 my-2 md:my-8 md:mx-auto w-full lg:w-1/2">
	<div class="w-full md:mx-auto">
		<div class="text-2xl md:text-4xl font-semibold my-4 dark:text-gray-300">Blog</div>
		<p class="prose text-gray-500 dark:text-gray-400">
			Use the search bar to filter posts by title or summary
		</p>
		<input
			type="text"
			bind:value={search}
			on:input={filter}
			class="px-2 py-1.5 w-full mt-4 mb-8 border border-gray-400 dark:text-gray-400 dark:bg-gray-800 focus:border-yellow-500 rounded-md"
			placeholder="Search articles"
		/>
		<ul>
			{#each filteredPosts as post}
				<li class="my-2 py-2">
					<article class="space-y-2">
						<dl>
							<dt class="sr-only">Published on</dt>
							<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
								<Date date={post.metadata.date} />
							</dd>
						</dl>
						<div class="space-y-3 lg:col-span-3">
							<div>
								<h3 class="text-2xl font-semibold leading-8 tracking-tight">
									<a
										href={`/blog/${post.path.replace('.md', '').replace('.svx', '')}`}
										class="text-gray-900 dark:text-gray-300"
									>
										{post.metadata.title}
									</a>
								</h3>
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
</div>

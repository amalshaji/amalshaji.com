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
	import Date from '$lib/components/Date.svelte';
	import Seo from '$lib/components/SEO.svelte';
</script>

<svelte:head>
	<Seo title="Blog | Amal Shaji" url="/blog" />
</svelte:head>

<div class="mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-2xl md:text-4xl font-semibold my-4 dark:text-gray-50">All posts</div>
	<input
		type="text"
		class="px-4 w-full md:w-1/2 my-8 border border-gray-400 dark:text-gray-50 dark:bg-gray-800 dark:focus:border-gray-50 dark:border-gray-500 focus:border-yellow-500 rounded-lg"
		placeholder="Search articles"
	/>
	<ul>
		{#each posts as post}
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

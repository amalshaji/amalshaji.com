<script>
	export let post;
	import Date from './Date.svelte';
</script>

<div class="p-2 hover:scale-110 duration-150">
	<a href={`/blog/${post.path.replace('.md', '').replace('.svx', '').replace('/blog/', '/')}`}>
		{#if post.metadata.image}
			<div class="relative">
				<img
					src={post.metadata.image}
					alt={post.metadata.title}
					class="rounded-lg shadow-sm w-full h-52 object-cover"
					loading="lazy"
				/>
				<div
					class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5"
				>
					<Date date={post.metadata.date} />
				</div>
			</div>
		{/if}
		<div class="my-2 text-xl font-semibold">{post.metadata.title}</div>
		<div class="">{post.metadata.summary}</div>
	</a>
</div>

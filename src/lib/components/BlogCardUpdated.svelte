<script>
	export let post;
	import Date from './Date.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="flex flex-col rounded-lg border overflow-hidden">
	<div class="flex-shrink-0">
		<img class="h-48 w-full object-cover" src={post.metadata.image} alt={post.metadata.title} />
	</div>
	<div class="flex-1 bg-white p-6 flex flex-col justify-between">
		<div class="flex-1">
			<a
				href={`/blog/${post.path
					.replace('/+page.md', '')
					.replace('/+page.svx', '')
					.replace('/blog/', '/')}`}
				class="block mt-2"
			>
				<p class="text-xl font-semibold text-gray-900">{post.metadata.title}</p>
				<p class="mt-3 text-base text-gray-500">
					{post.metadata.summary}
				</p>
			</a>
		</div>
		<div class="mt-6 flex items-center">
			<div class="">
				<div class="flex text-sm text-gray-500">
					<Date date={post.metadata.date} />
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	export let project;
	import Date from './Date.svelte';
</script>

<div class="p-2">
	<a href={project.metadata.link} target="_blank" rel="noreferrer">
		{#if project.metadata.image}
			<div class="relative">
				<img
					src={project.metadata.image}
					alt={project.metadata.title}
					class="rounded-lg shadow-sm w-full h-64 object-cover"
				/>
				<div
					class="absolute top-4 right-4 rounded shadow bg-white text-gray-900 dark:bg-gray-900 dark:text-white text-sm px-2 py-0.5"
				>
					{#if project.metadata.date}
						<Date date={project.metadata.date} />
					{/if}
				</div>
			</div>
		{/if}
		<div class="my-2 text-xl font-semibold">{project.metadata.title}</div>
		{#if project.metadata.description}
			<div class="">{project.metadata.description}</div>
		{/if}
	</a>
</div>

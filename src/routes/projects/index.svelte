<script context="module">
	const allProjects = import.meta.glob('./*{md,svx}');

	let body = [];
	for (let path in allProjects) {
		body.push(
			allProjects[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async () => {
		const projects = await Promise.all(body);
		projects.sort((a, b) => (a.metadata.index < b.metadata.index ? -1 : 1));
		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	import Seo from '$lib/components/SEO.svelte';
	export let projects;
</script>

<svelte:head>
	<Seo title="Projects | Amal Shaji" url="/projects" />
</svelte:head>

<div class="mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4">
	<div class="text-2xl md:text-4xl font-semibold my-4 dark:text-gray-50">All Projects</div>
	<div class="block md:flex md:flex-wrap overflow-hidden lg:-mx-4 xl:-mx-4">
		{#each projects as project}
			<div
				class="w-full my-2 border md:border-0 dark:border-gray-700 rounded-lg md:w-1/2 overflow-hidden lg:my-4 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2"
			>
				<h3 class="text-lg md:text-2xl font-bold leading-8 tracking-tight">
					<a
						href={`/projects/${project.path.replace('.md', '').replace('.svx', '')}`}
						class="text-gray-900 dark:text-gray-100"
					>
						<div class="w-full h-56 md:h-72 lg:h-80">
							<img
								src={project.metadata.image}
								loading="lazy"
								class="my-2 mx-auto sm:mx-0 rounded-lg h-full"
								alt={project.metadata.title}
							/>
						</div>
						<div class="flex mx-4">
							{project.metadata.title}
							<a href={project.metadata.link} class="mx-1" target="_blank" rel="noreferrer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg></a
							>
						</div>
					</a>
				</h3>
				<div class="prose mx-4 my-2 text-sm md:text-lg text-gray-500 max-w-none dark:text-gray-400">
					{project.metadata.description}
				</div>
			</div>
		{/each}
	</div>
</div>

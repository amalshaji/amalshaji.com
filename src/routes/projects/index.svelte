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
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let projects;
</script>

<svelte:head>
	<title>Projects | Amal Shaji</title>
	<Seo title="Projects | Amal Shaji" url="/projects" />
</svelte:head>

<div class="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>

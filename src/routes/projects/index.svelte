<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/projects/projects.json');
		const projects = await res.json();
		projects.sort((a, b) => (a.index < b.index ? -1 : 1));
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

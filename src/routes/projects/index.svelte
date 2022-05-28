<script context="module">
	export const prerender = true;
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

<div class="relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
	<div class="relative max-w-7xl mx-auto">
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>

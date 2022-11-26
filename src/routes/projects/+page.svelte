<script>
	import Seo from '$lib/components/SEO.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projects = [
		// {
		// 	title: 'Amalytics',
		// 	description:
		// 		'Amalytics is an experimental analytics platform written in Flask and HarperDB which won the Hashnode-HarperDB hackathon. Currently, I have made some changes to the project and deciding whether to make it a self hosted template',
		// 	image: '/images/projects/amalytics.png',
		// 	link: 'https://amalytics.deta.dev',
		// 	github: 'https://github.com/amalshaji/amalytics',
		// 	index: 5
		// },
		//   {
		//     title: "API Search",
		//     description: "Webapp to search for free Public APIs",
		//     image: "/images/projects/apisearch.png",
		//     link: "https://apisearch.amalshaji.com",
		//     github: "https://github.com/amalshaji/apisearch",
		//     index: 7,
		//   },
		//   {
		//     title: "FakeAPI",
		//     description:
		//       "FakeAPI is the predecessor of Mockend. FakeAPI let's you generate fake data by sending a JSON payload",
		//     image: "/images/projects/fakeapi.png",
		//     link: "https://fakeapi.amalshaji.com",
		//     index: 3,
		//   },
		{
			title: 'IPWhere',
			description: 'A simple tool to locate IP address using Go and svelte on Netlify(serverless)',
			image: '/images/projects/ipwhere.png',
			link: 'https://ipwhere.amal.sh',
			github: 'https://github.com/amalshaji/ipwhere',
			index: 6
		},
		// {
		// 	title: 'Mockend',
		// 	description:
		// 		'Quickly design and generate mock backends for your frontend applications. Useful for testing/prototyping',
		// 	image: '/images/projects/mockend.png',
		// 	link: 'https://mockend.in',
		// 	github: '',
		// 	index: 1
		// },
		{
			title: 'Vibe',
			description: 'Having a bad day? Good boy doggo to the rescue. Vibe for 30 seconds!!',
			image: '/images/projects/vibe.png',
			link: 'https://vibe.amal.sh',
			github: 'https://github.com/amalshaji/vibe',
			index: 2
		},
		// {
		// 	title: 'amalshaji.com',
		// 	description: 'Personal website built in Sveltekit and TailwindCSS',
		// 	image: '/images/projects/website.png',
		// 	link: 'https://amalshaji.com',
		// 	github: 'https://github.com/amalshaji/amalshaji.com',
		// 	index: 0
		// },
		{
			title: 'Phoney',
			description:
				'Generate fake API/CSV. The API data persists, so it can be appended, updated and deleted',
			image: '/images/projects/phoney.png',
			link: 'https://phoney.amal.sh',
			index: -2
		},
		{
			title: 'Pytoml',
			description: 'Write, run and share python code right from your browser',
			image: '/images/projects/pytoml.png',
			link: 'https://pytoml.amal.sh',
			index: -3
		},
		{
			title: 'Mailbox',
			description: '10 minute temporary mailbox powered by 1secmail',
			image: '/images/projects/mailbox.png',
			link: 'https://mailbox.amal.sh',
			index: -4
		}
	];

	projects.sort((a, b) => (a.index < b.index ? -1 : 1));
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

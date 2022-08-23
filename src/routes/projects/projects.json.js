const projectData = [
	{
		title: 'Amalytics',
		description:
			'Amalytics is an experimental analytics platform written in Flask and HarperDB which won the Hashnode-HarperDB hackathon. Currently, I have made some changes to the project and deciding whether to make it a self hosted template',
		image: '/images/amalytics.png',
		link: 'https://amalytics.deta.dev',
		github: 'https://github.com/amalshaji/amalytics',
		index: 5
	},
	{
		title: 'API Search',
		description: 'Webapp to search for free Public APIs',
		image: '/images/apisearch.png',
		link: 'https://apisearch.amalshaji.com',
		github: 'https://github.com/amalshaji/apisearch',
		index: 7
	},
	{
		title: 'FakeAPI',
		description:
			"FakeAPI is the predecessor of Mockend. FakeAPI let's you generate fake data by sending a JSON payload",
		image: '/images/fakeapi.png',
		link: 'https://fakeapi.amalshaji.com',
		index: 3
	},
	{
		title: 'IPWhere',
		description: 'A simple tool to locate IP address using Go and svelte on Netlify(serverless)',
		image: '/images/ipwhere.png',
		link: 'https://ipwhere.amalshaji.com',
		github: 'https://github.com/amalshaji/ipwhere',
		index: 6
	},
	// {
	// 	title: 'Mockend',
	// 	description:
	// 		'Quickly design and generate mock backends for your frontend applications. Useful for testing/prototyping',
	// 	image: '/images/mockend.png',
	// 	link: 'https://mockend.in',
	// 	github: '',
	// 	index: 1
	// },
	{
		title: 'Vibe',
		description: 'Having a bad day? Good boy doggo to the rescue. Vibe for 30 seconds!!',
		image: '/images/vibe.png',
		link: 'https://vibe.pages.dev',
		github: 'https://github.com/amalshaji/vibe',
		index: 2
	},
	{
		title: 'amalshaji.com',
		description: 'Personal website built in Sveltekit and TailwindCSS',
		image: '/images/website.png',
		link: 'https://amalshaji.com',
		github: 'https://github.com/amalshaji/amalshaji.com',
		index: 0
	},
	{
		title: 'Phoney',
		description:
			'Generate fake API/CSV. The API data persists, so it can be appended, updated and deleted',
		image: '/images/phoney.png',
		link: 'https://phoney.amalshaji.com',
		index: -2
	},
	{
		title: 'Pytoml',
		description: 'Write, run and share python code right from your browser',
		image: '/images/pytoml.png',
		link: 'https://pytoml.amalshaji.com/playground',
		index: -3
	}
];

export async function GET() {
	return {
		status: 200,
		body: projectData
	};
}

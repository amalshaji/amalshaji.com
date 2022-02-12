<script>
	import LinkCard from './LinkCard.svelte';
	let links = [
		{
			text: 'Blog',
			description: 'I write about what my weird experiments',
			link: '/blog',
			external: false
		},
		{
			text: 'About',
			description: 'About me',
			link: '/about',
			external: false
		},
		{
			text: 'Twitter',
			description: 'My twitter account. Updates about my latest posts.',
			link: 'https://twitter.com/pydantic',
			external: true
		},
		{
			text: 'GitHub',
			description: 'Home for all my experiments.',
			link: 'https://github.com/amalshaji',
			external: true
		}
	];
</script>

<div class="flex pt-12 justify-center">
	<div class="relative w-24">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			class="rounded-full border border-gray-200 shadow-sm"
			src="/images/cat.jpeg"
			alt="user image"
		/>
		<p class="mt-4 text-center font-semibold text-xl">Amal</p>
	</div>
</div>

<div class="flex pb-12 justify-center">
	<span class="mt-2 bg-blue-500 px-4 py-1 text-white rounded-lg font-medium text-sm"
		>Learning to master software</span
	>
</div>

{#each links as link}
	<LinkCard data={link} />
{/each}

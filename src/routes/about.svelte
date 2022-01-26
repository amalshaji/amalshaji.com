<script>
	import Seo from '$lib/components/SEO.svelte';
	import Career from '$lib/components/Career.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
</script>

<svelte:head>
	<title>About | Amal Shaji</title>
	<Seo title="Amal Shaji" url="/about" />
</svelte:head>

<div class="prose mx-6 my-2 md:my-8 md:mx-auto lg:w-3/4 dark:prose-dark">
	<div class="text-xl md:text-3xl flex my-4 font-semibold mt-4 mb-2">
		Career <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 my-auto mx-1"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		</svg>
	</div>
	<Career />
	<div class="text-xl md:text-3xl flex my-4 font-semibold mt-4 mb-2">
		<p>Tech Stack <span class="text-md">(My first choice for side projects)</span></p>
	</div>
	<TechStack />
</div>

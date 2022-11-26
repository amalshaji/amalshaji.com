<script>
	import Seo from '$lib/components/SEO.svelte';
</script>

<svelte:head>
	<title>Amal Shaji</title>
	<Seo />
</svelte:head>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div
		class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl"
	>
		<h1 class="text-3xl font-semibold leading-none sm:text-4xl">
			Software Engineer by day <br />
			<span class="dark:text-violet-400">Python/Typescript</span> mechanic by night
		</h1>
		<p class="px-8 mt-8 mb-12 text-lg sm:text-xl">
			I want to build software that serves thousands of users.
		</p>
		<div class="flex flex-wrap justify-center">
			<a
				href="/blog"
				class="px-8 py-3 m-2 text-lg border rounded dark:bg-violet-400 dark:text-gray-900">Blog</a
			>
			<a
				href="/projects"
				class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700"
				>Projects</a
			>
		</div>
	</div>
</section>

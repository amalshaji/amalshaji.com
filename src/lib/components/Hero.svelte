<script>
	import { onMount } from 'svelte';
	let joke;

	const getJoke = async () => {
		const res = await fetch('https://jokes.amalshaji.workers.dev/');
		const data = await res.json();
		if (res.ok) {
			joke = data.pun;
		}
	};

	onMount(async () => {
		getJoke();
	});
</script>

<section>
	<div class="pt-20 pb-20">
		<div class="container mx-auto px-4">
			<div class="w-full px-4 mb-12 md:mb-20 mx-auto lg:mb-0 flex flex-col items-center">
				<h2 class="mb-4 text-4xl lg:text-5xl font-bold mx-auto font-heading">
					<span class="dark:text-gray-300">Hello 👋</span>
					<span class="text-blue-500">I'm Amal</span>
				</h2>
				<div class="max-w-lg mx-1 lg:mx-0">
					<p class="mb-6 text-gray-900 dark:text-gray-50 leading-loose text-justify">
						I love working with Python, Go and Svelte. Once in a while, I try to experiment on
						something and document my journey here. I'm also interested in Rust and Solana.
						<br />
						Building this website using Sveltekit and tailwindCSS is one of my latest side projects.
					</p>

					<div class="text-center my-2">
						<a
							class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-blue-500  text-white  font-semibold rounded-l-xl rounded-t-xl transition duration-200"
							href="/blog">Blog</a
						><a
							class="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-green-500 text-white rounded-l-xl rounded-t-xl transition duration-200"
							href="/projects">Projects</a
						>
					</div>
					{#if joke}
						<div
							class="prose dark:prose-dark text-gray-900 dark:text-gray-50 leading-none mt-4 md:mt-8 px-2 text-sm"
						>
							<blockquote class="h-8 my-auto">
								{joke}
								<button
									on:click={getJoke}
									class="px-2 py-1 m-1 bg-red-500 dark:text-gray-50 rounded-md shadow-lg sm:font-medium"
									>not funny</button
								>
							</blockquote>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

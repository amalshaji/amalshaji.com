<script>
	import Seo from '$lib/components/SEO.svelte';
</script>

<svelte:head>
	<Seo />
</svelte:head>

<section class="py-20 bg-gray-50">
	<div class="container mx-auto px-4">
		<div class="max-w-xl mx-auto">
			<div class="py-12 px-6 bg-white rounded shadow">
				<div class="text-center">
					<span class="mb-6 text-4xl text-purple-600 font-bold">Whoops!</span>
					<h3 class="mb-2 text-4xl font-bold">Something went wrong!</h3>
					<p class="mb-8 text-gray-400">Sorry, but we are unable to open this page</p>
					<div>
						<a
							class="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-4 inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose text-gray-50 bg-purple-600 hover:bg-purple-700"
							href="/">Go back to Homepage</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

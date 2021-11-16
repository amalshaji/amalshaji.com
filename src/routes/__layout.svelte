<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { prefetchRoutes } from '$app/navigation';
	import { browser } from '$app/env';
	import Footer from '$lib/components/Footer.svelte';

	if (browser) {
		prefetchRoutes();
	}
</script>

<Navbar />

<div class="mx-6 md:mx-auto text-lg leading-12">
	<slot />
</div>
<Footer />

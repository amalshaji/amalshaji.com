<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { prefetchRoutes } from '$app/navigation';
	import { browser } from '$app/env';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/store';
	import { onMount } from 'svelte';

	onMount(() => {
		$theme = localStorage.getItem('amalshaji_com_theme') || 'light';
		set_theme();
	});

	const set_theme = () => {
		const previous = $theme == 'dark' ? 'light' : 'dark';
		const doc_main = document.getElementById('doc_main');
		doc_main.classList.remove(previous);
		doc_main.classList.add($theme);
		localStorage.setItem('amalshaji_com_theme', $theme);
	};

	if (browser) {
		prefetchRoutes();
	}
</script>

<Navbar />

<div class="mx-6 md:mx-auto text-lg leading-12">
	<slot />
</div>

<Footer />

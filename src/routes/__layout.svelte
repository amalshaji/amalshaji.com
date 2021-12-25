<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { theme } from '$lib/store';
	import { onMount } from 'svelte';
	import { prefetchRoutes } from '$app/navigation';
	import { browser } from '$app/env';
	let y;
	if (browser) {
		prefetchRoutes();
	}

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
</script>

<Navbar />
<ScrollToTop {y} />

<slot />
<Socials />
<Footer />

<svelte:window bind:scrollY={y} />

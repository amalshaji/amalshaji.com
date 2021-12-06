<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/store';
	import { onMount } from 'svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress css
	import 'nprogress/nprogress.css';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
		trickleSpeed: 100,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
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

<slot />

<Footer />

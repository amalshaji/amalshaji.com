<script>
	import { theme } from '$lib/store';

	const set_theme = () => {
		const previous = $theme == 'dark' ? 'light' : 'dark';
		const doc_main = document.getElementById('doc_main');
		doc_main.classList.remove(previous);
		doc_main.classList.add($theme);
		localStorage.setItem('amalshaji_com_theme', $theme);
	};

	const toggle_theme = () => {
		$theme = $theme === 'light' ? 'dark' : 'light';
		set_theme();
	};
</script>

<header
	class="flex justify-around md:justify-between gap-4 flex-wrap py-3 px-24 md:sticky bg-gray-100 dark:bg-gray-800 top-0 mx-auto border-b dark:border-gray-800 shadow-sm z-10"
>
	<a href="/" class="capitalize font-extrabfont-semibold text-2xl"> Amal Shaji </a>
	<ul class="flex items-center gap-4 lg:gap-6">
		<li><a href="/blog">Blog</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/about">About</a></li>

		<li class="grid place-items-center">
			<span on:click={toggle_theme} class="toggle-dark-mode inline-block cursor-pointer">
				{#if $theme === 'light'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				{/if}
			</span>
		</li>
	</ul>
</header>

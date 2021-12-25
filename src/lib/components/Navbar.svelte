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

<header class="container flex justify-around md:justify-between gap-4 flex-wrap p-6 mx-auto">
	<a href="/" class="capitalize font-extrabfont-semibold text-2xl"> Amal Shaji </a>
	<ul class="flex items-center gap-4 lg:gap-6">
		<li><a href="/blog">Blog</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/about">About</a></li>

		<li class="grid place-items-center">
			<span on:click={toggle_theme} class="toggle-dark-mode inline-block cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="3" />
					<line x1="12" y1="5" x2="12" y2="5.01" />
					<line x1="17" y1="7" x2="17" y2="7.01" />
					<line x1="19" y1="12" x2="19" y2="12.01" />
					<line x1="17" y1="17" x2="17" y2="17.01" />
					<line x1="12" y1="19" x2="12" y2="19.01" />
					<line x1="7" y1="17" x2="7" y2="17.01" />
					<line x1="5" y1="12" x2="5" y2="12.01" />
					<line x1="7" y1="7" x2="7" y2="7.01" />
				</svg>
			</span>
		</li>
	</ul>
</header>

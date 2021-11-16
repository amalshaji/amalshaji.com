<script>
	import { page } from '$app/stores';
	import Theme from './Theme.svelte';
	import { theme } from '$lib/store';
	import { onMount } from 'svelte';

	$: path = $page.path;
	let isopen = false;

	onMount(() => {
		$theme = localStorage.getItem('amalshaji_com_theme') || 'light';
		$theme = $theme == 'dark' ? 'light' : 'dark';
		toggle_theme();
	});

	const toggle_theme = () => {
		const current = $theme;
		$theme = $theme == 'dark' ? 'light' : 'dark';
		const doc_main = document.getElementById('doc_main');
		doc_main.classList.remove(current);
		doc_main.classList.add($theme);
		localStorage.setItem('amalshaji_com_theme', $theme);
	};
</script>

<nav
	class="top-0 bg-gray-50 dark:bg-gray-800 sticky backdrop-filter backdrop-blur-xl px-6 py-6 flex justify-between items-center"
>
	<a aria-label="Amal Shaji" class="text-3xl font-bold leading-none" href="/">
		<img class="h-12" src="/images/logo.png" alt="Amal Shaji" width="auto" height="auto" />
	</a>
	<div class="lg:hidden flex">
		<button aria-label="theme switch" class="p-3" on:click={toggle_theme}>
			<Theme theme={$theme} />
		</button>
		<button
			aria-label="open navbar on mobile"
			on:click={() => (isopen = !isopen)}
			class="navbar-burger flex items-center text-gray-400 p-3"
		>
			<svg
				class="block h-4 w-4 fill-current"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
			</svg>
		</button>
	</div>
	<ul
		class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
	>
		<li>
			<a
				class="{path == '/'
					? 'font-semibold text-yellow-500'
					: ''} text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-50 hover:border dark:border-gray-700 hover:animate-pulse px-4 py-2 rounded-lg"
				href="/">Home</a
			>
		</li>
		<li class="text-gray-200">
			<svg
				class="w-4 h-4 current-fill"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
				/>
			</svg>
		</li>
		<li>
			<a
				class="{path.startsWith('/blog')
					? 'font-semibold text-yellow-500'
					: ''} text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-50 hover:border dark:border-gray-700 hover:animate-pulse px-4 py-2 rounded-lg"
				href="/blog">Blog</a
			>
		</li>
		<li class="text-gray-200">
			<svg
				class="w-4 h-4 current-fill"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
				/>
			</svg>
		</li>
		<li>
			<a
				class="{path.startsWith('/tags')
					? 'font-semibold text-yellow-500'
					: ''} text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-50 hover:border dark:border-gray-700 hover:animate-pulse px-4 py-2 rounded-lg"
				href="/tags">Tags</a
			>
		</li>
		<li class="text-gray-200">
			<svg
				class="w-4 h-4 current-fill"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
				/>
			</svg>
		</li>
		<li>
			<a
				class="{path == '/projects'
					? 'font-semibold text-yellow-500'
					: ''} text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-50 hover:border dark:border-gray-700 hover:animate-pulse px-4 py-2 rounded-lg"
				href="/projects">Projects</a
			>
		</li>
		<li class="text-gray-200">
			<svg
				class="w-4 h-4 current-fill"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
				/>
			</svg>
		</li>
		<li>
			<a
				class="{path == '/about'
					? 'font-semibold text-yellow-500'
					: ''} text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-50 hover:border dark:border-gray-700 hover:animate-pulse px-4 py-2 rounded-lg"
				href="/about">About</a
			>
		</li>
	</ul>
	<button aria-label="switch theme" class=" mx-2 hidden lg:block" on:click={toggle_theme}>
		<Theme theme={$theme} />
	</button>
</nav>

<div
	class="{isopen
		? 'block'
		: 'hidden'} opacity-95 navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
>
	<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
	<nav
		class="relative flex flex-col py-6 px-6 h-full w-full bg-white dark:bg-gray-900 border-r overflow-y-auto"
	>
		<div class="flex items-center mb-8">
			<a class="mr-auto text-3xl font-bold leading-none" href="/" aria-label="Amal Shaji">
				<img class="h-12" src="/images/logo.png" alt="Amal Shaji" width="auto" height="auto" />
			</a>
			<button class="navbar-close" on:click={() => (isopen = false)}>
				<svg
					class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<div>
			<ul>
				<li class="mb-1">
					<a
						on:click={() => (isopen = false)}
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/">Home</a
					>
				</li>
				<li class="mb-1">
					<a
						on:click={() => (isopen = false)}
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/blog">Blog</a
					>
				</li>
				<li class="mb-1">
					<a
						on:click={() => (isopen = false)}
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/tags">Tags</a
					>
				</li>
				<li class="mb-1">
					<a
						on:click={() => (isopen = false)}
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/projects">Projects</a
					>
				</li>
				<li class="mb-1">
					<a
						on:click={() => (isopen = false)}
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/about">About</a
					>
				</li>
			</ul>
		</div>
	</nav>
</div>

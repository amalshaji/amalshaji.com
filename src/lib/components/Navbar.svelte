<script>
	import { page } from '$app/stores';
	$: path = $page.path;
	let isopen = false;
</script>

<nav class="relative px-6 py-6 flex justify-between items-center bg-gray-50">
	<a class=" text-3xl font-bold leading-none" href="/">
		<img class="h-12" src="/images/logo.png" alt="" width="auto" />
	</a>
	<div class="lg:hidden">
		<button
			on:click={() => (isopen = !isopen)}
			class="navbar-burger flex items-center text-gray-400 p-3"
		>
			<svg
				class="block h-4 w-4 fill-current"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Mobile menu</title>
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
					? 'font-semibold text-green-500'
					: ''} text-sm text-gray-400 hover:text-gray-500"
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
					? 'font-semibold text-green-500'
					: ''} text-sm text-gray-400 hover:text-gray-500"
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
				class="{path == '/projects'
					? 'font-semibold text-green-500'
					: ''} text-sm text-gray-400 hover:text-gray-500"
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
					? 'font-semibold text-green-500'
					: ''} text-sm text-gray-400 hover:text-gray-500"
				href="/about">About</a
			>
		</li>
	</ul>
	<a
		class="hidden lg:block py-2 px-6 bg-white hover:bg-green-200 hover:text-black text-sm text-purple-600 font-bold rounded-l-xl rounded-t-xl transition duration-200"
		href="mailto:amalshajid@gmail.com">Contact</a
	>
</nav>

<div
	class="{isopen ? 'block' : 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
>
	<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
	<nav class="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
		<div class="flex items-center mb-8">
			<a class="mr-auto text-3xl font-bold leading-none" href="/">
				<img class="h-10" src="/images/logo.png" alt="" width="auto" />
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
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/">Home</a
					>
				</li>
				<li class="mb-1">
					<a
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/blog">Blog</a
					>
				</li>
				<li class="mb-1">
					<a
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/projects">Projects</a
					>
				</li>
				<li class="mb-1">
					<a
						class="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
						href="/about">About</a
					>
				</li>
			</ul>
		</div>
		<div class="mt-auto">
			<div class="pt-6">
				<a
					class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
					href="mailto:amalshajid@gmail.com">Contact</a
				>
			</div>
		</div>
	</nav>
</div>

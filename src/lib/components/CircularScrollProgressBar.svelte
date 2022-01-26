<script>
	import { onMount } from 'svelte';

	let width = '0';
	let scrolled;
	const circumference = 15 * 2 * Math.PI;

	const getScroll = () => {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		const winScroll = document.body.scrollTop || scrollTop;
		const winHeight = scrollHeight - clientHeight;
		scrolled = Math.round((winScroll / winHeight) * 100);
		if (winHeight > 0) {
			width = scrolled;
		} else {
			width = 0;
		}
	};

	const watchScrolling = () => {
		getScroll();
	};

	onMount(() => {
		getScroll();
	});
</script>

<button
	on:click={() => window.scrollTo({ top: 0 })}
	aria-label="Scroll To Top"
	class="inline-flex items-center justify-center overflow-hidden rounded-full"
>
	<svg class="w-12 h-16">
		<circle
			class="text-gray-300"
			stroke-width="3"
			stroke="currentColor"
			fill="transparent"
			r="15"
			cx="21"
			cy="21"
		/>
		<circle
			class={scrolled > 70 ? 'text-red-600' : 'text-green-600'}
			stroke-width="3"
			stroke-dasharray={circumference}
			stroke-dashoffset={circumference - (scrolled / 100) * circumference}
			stroke-linecap="round"
			stroke="currentColor"
			fill="transparent"
			r="15"
			cx="21"
			cy="21"
		/>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5 absolute bottom-8 right-4 dark:text-white"
		fill="none"
		viewBox="0 0 25 25"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M5 10l7-7m0 0l7 7m-7-7v18"
		/>
	</svg>
</button>

<svelte:window on:scroll={watchScrolling} />

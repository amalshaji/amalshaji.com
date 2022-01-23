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

<div class="inline-flex items-center justify-center overflow-hidden rounded-full">
	<svg class="w-12 h-16">
		<circle
			class="text-gray-300"
			stroke-width="3"
			stroke="currentColor"
			fill="transparent"
			r="15"
			cx="20"
			cy="20"
		/>
		<circle
			class="text-red-600"
			stroke-width="3"
			stroke-dasharray={circumference}
			stroke-dashoffset={circumference - (scrolled / 100) * circumference}
			stroke-linecap="round"
			stroke="currentColor"
			fill="transparent"
			r="15"
			cx="20"
			cy="20"
		/>
	</svg>
</div>

<svelte:window on:scroll={watchScrolling} />

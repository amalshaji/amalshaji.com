<script>
	let width = '0%';
	export let height = '4px';
	const watchScrolling = () => {
		const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
		const winScroll = document.body.scrollTop || scrollTop;
		const winHeight = scrollHeight - clientHeight;
		const scrolled = `${(winScroll / winHeight) * 100}%`;
		if (winHeight > 0) {
			width = scrolled;
		} else {
			width = 0;
		}
	};
</script>

<div
	class="svelte-page-progress bg-red-600 dark:bg-green-300"
	style="--progress-height: {height}; --progress-width: {width};"
/>

<svelte:window on:scroll={watchScrolling} />

<style>
	.svelte-page-progress {
		margin: 0;
		padding: 0;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		transition: width 200ms ease-out;
		height: var(--progress-height);
		width: var(--progress-width);
	}
</style>

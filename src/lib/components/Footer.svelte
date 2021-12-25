<script>
	const scrollToTop = () => {
		window.scrollTo({ x: 0 });
	};
</script>

<footer class="container p-6 mx-auto flex justify-between items-center">
	<span class="text-sm font-light"> Amal Shaji 🎉 2021</span>
	<span on:click={scrollToTop} class="p-1 cursor-pointer">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 15l-6 -6l-6 6h12" />
		</svg>
	</span>
</footer>

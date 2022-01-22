<script>
	export let y;
	let show;
	$: show = y > 50;
</script>

<div
	class="fixed {show
		? 'hidden md:flex scale-100 duration-150'
		: 'scale-0 duration-150'} flex-col gap-3 right-4 sm:right-8 bottom-8"
>
	<button
		on:click={() => window.scrollTo({ top: 0 })}
		aria-label="Scroll To Top"
		type="button"
		class="p-2 text-gray-500 transition-all bg-gray-200 rounded-full dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300"
	>
		<svg class="w-5 h-5" viewBox="0 0 20 20" fill="black">
			<path
				fillRule="evenodd"
				d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	</button>
</div>

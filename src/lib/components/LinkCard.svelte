<script>
	export let data;
	const { text, link, external, description } = data;
</script>

<!-- LINK -->
<div class="px-4 mx-auto mb-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
	<div class="grid max-w-screen-lg sm:mx-auto">
		<a
			href={link}
			target={external ? '_blank' : '_self'}
			aria-label="View item"
			title="View item"
			class="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
		>
			<div
				class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-gray-800 dark:bg-gray-50 group-hover:scale-x-100"
			/>
			<div
				class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-gray-800 dark:bg-gray-50 group-hover:scale-y-100"
			/>
			<div
				class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-gray-800 dark:bg-gray-50 group-hover:scale-x-100"
			/>
			<div
				class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-gray-800 dark:bg-gray-50 group-hover:scale-y-100"
			/>
			<div
				class="relative flex items-center justify-between p-5 bg-white dark:bg-slate-900 rounded-sm"
			>
				<div class="pr-4">
					<h6 class="mb-2 font-semibold leading-5">{text}</h6>
					<p class="text-sm">
						{description}
					</p>
				</div>
				<div class="flex items-center justify-center">
					<svg
						class="w-3 text-gray-700 dark:text-indigo-300 transition-colors duration-200 group-hover:text-deep-purple-accent-400"
						fill="currentColor"
						viewBox="0 0 12 12"
					>
						<path
							d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
						/>
					</svg>
				</div>
			</div>
		</a>
	</div>
</div>

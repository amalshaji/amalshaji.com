<script>
	export let date;
	const a = new Date(date);
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let parsed = `${days[a.getUTCDay()]}, ${months[a.getMonth()]} ${a.getDate()}, ${a.getFullYear()}`;
</script>

{parsed}

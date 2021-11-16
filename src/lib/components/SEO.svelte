<script>
	const siteUrl = 'https://v2.amalshaji.com';
	export let title = 'Amal Shaji',
		description = 'My weird experiments',
		url = '/',
		image = '/images/twitter_card.png';
</script>

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={`${siteUrl}${url}`} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={`${siteUrl}${image}`} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={`${siteUrl}${url}`} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={`${siteUrl}${image}`} />

const generate_feed = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="http://v2.amalshaji.com/feed.xml" rel="self" type="application/rss+xml" />
<title>Amal Shaji</title>
<link>https://v2.amalshaji.com</link>
<description>My weird experiments</description>
${posts
        .map(
            (post) => `<item>
<guid>https://v2.amalshaji.com/${post.path.replace("./", "").replace(".md", "")}</guid>
<title>${post.metadata.title}</title>
<link>https://v2.amalshaji.com/${post.path.replace("./", "").replace(".md", "")}</link>
<description>${post.metadata.summary}</description>
<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
</item>`
        )
        .join('')}
</channel>
</rss>
`;

export async function get({ query }) {
    const allPosts = import.meta.glob('./blog/*{md,svx}');
    let body = [];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then(({ metadata }) => {
                return { path, metadata };
            })
        );
    }
    const posts = await Promise.all(body)
    posts.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));
    const feed = generate_feed(posts)
    return {
        status: 200,
        body: feed,
        headers: {
            'Content-Type': 'application/rss+xml',
        }
    }
}
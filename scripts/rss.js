import fs from 'fs'
import fg from 'fast-glob'
import parseMarkdown from "front-matter-markdown"

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
<guid>https://v2.amalshaji.com${post.path}</guid>
<title>${post.metadata.title}</title>
<link>https://v2.amalshaji.com/${post.path}</link>
<description>${post.metadata.summary}</description>
<pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
</item>`
        )
        .join('')}
</channel>
</rss>
`;

export const rss = async () => {
    const allPosts = await fg(['./src/routes/blog/*{md,svx}']);

    let posts = [];
    for (let path in allPosts) {
        const sanitized_path = `${allPosts[path]}`
        const contents = fs.readFileSync(sanitized_path)
        posts.push(
            { path: allPosts[path].replace("./src/routes", "").replace(".md", ""), metadata: parseMarkdown(contents) }
        );
    }
    posts.sort((a, b) => (a.date > b.date ? -1 : 1));
    const feed = generate_feed(posts)
    fs.writeFileSync("static/feed.xml", feed)
}

rss()
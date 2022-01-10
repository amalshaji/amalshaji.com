import path from "path"
import { fileURLToPath } from "url";
import remarkToc from "remark-toc";
import remarkAdmonitions from "remark-admonitions"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const dirname = path.resolve(fileURLToPath(import.meta.url), "../")

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		blog: path.join(dirname, "./src/lib/layouts/blog.svelte")
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkToc, remarkAdmonitions],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
};

export default config;

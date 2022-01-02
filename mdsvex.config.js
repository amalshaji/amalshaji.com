import path from "path"
import { fileURLToPath } from "url";
import remarkToc from "remark-toc";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkAdmonitions from "remark-admonitions"

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
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavious: 'wrap' }]]
};

export default config;

import path from "path"
import { fileURLToPath } from "url";
import remarkToc from "remark-toc";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../")

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		blog: path.join(dirname, "./src/lib/layouts/blog.svelte")
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkToc],
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavious: 'wrap' }]]
};

export default config;

import path from "path"
import { fileURLToPath } from "url";
import remarkToc from "remark-toc";
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
	rehypePlugins: []
};

export default config;

import path from "path"
import { fileURLToPath } from "url";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../")

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		default: path.join(dirname, "./src/routes/_md_layout.svelte"),
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;

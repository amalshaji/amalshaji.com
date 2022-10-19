import path from 'path';
import { fileURLToPath } from 'url';
import remarkToc from 'remark-toc';
import remarkAdmonitions from 'remark-admonitions';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import shiki from 'shiki';
import { escapeSvelte } from 'mdsvex';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../'); // eslint-disable-line

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		blog: path.join(dirname, './src/lib/layouts/blog.svelte')
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkToc, remarkAdmonitions],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
	// highlight: {
	// 	highlighter: async (code, lang = 'text') => {
	// 		const highlighter = await shiki.getHighlighter({ theme: 'dark-plus' });
	// 		const highlightedCode = escapeSvelte(highlighter.codeToHtml(code, lang));
	// 		return `{@html \`${highlightedCode}\` }`;
	// 	}
	// }
	// highlight: {
	// 	highlighter: async (code, lang = 'text') => {
	// 		const highlightedCode = escapeSvelte(
	// 			`<pre class='language-${lang}'><code>${code}</code></pre>`
	// 		);
	// 		return `{@html \${highlightedCode}\}`;
	// 	}
	// }
};

export default config;

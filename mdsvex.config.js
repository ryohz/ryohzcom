import {mdsvex, escapeSvelte} from 'mdsvex'
import shiki from 'shiki'
import {defineMDSveXConfig as defineConfig} from 'mdsvex';
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],

    smartypants: {
        dashes: 'oldschool'
    },

    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await shiki.getHighlighter({theme: 'one-dark-pro'})
            const html = escapeSvelte(highlighter.codeToHtml(code, {lang}))
            return `{@html \`${html}\` }`
        }
    },

    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatexSvelte]

});

export default config;


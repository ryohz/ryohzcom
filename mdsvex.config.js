import {mdsvex, escapeSvelte} from 'mdsvex'
import shiki from 'shiki'
import {defineMDSveXConfig as defineConfig} from 'mdsvex';

const config = defineConfig({
    extensions: ['.svelte.md', '.md', '.svx'],

    // smartypants: {
    //     dashes: 'oldschool'
    // },

    highlight: {
        highlighter: async (code, lang = 'text') => {
            const highlighter = await shiki.getHighlighter({theme: 'material-theme-darker'})
            const html = escapeSvelte(highlighter.codeToHtml(code, {lang}))
            return `{@html \`${html}\` }`
        }
    }
});

export default config;


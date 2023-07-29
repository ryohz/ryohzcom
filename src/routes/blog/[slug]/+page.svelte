<script lang="ts">
	import { marked } from 'marked';
        import type { Article } from '$lib/types/article';

	/** @type {import('./$types').PageData} */
	export let data: {
        data: Article,
        err: string,
        };
        
</script>

{@html marked(data.data.content)}

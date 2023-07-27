<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

        let blog_datas = data.blog_datas;
</script>

{#each blog_datas as blog_data}
<a href={`blog/${blog_data.id}`} class='article_link'>{blog_data.title}</a>
{/each}

<style>
.article_link {
    color: var(--fg);
}
</style>

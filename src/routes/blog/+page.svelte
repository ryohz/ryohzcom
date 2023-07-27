<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;

        let blog_datas = data.blog_datas;
</script>

{#each blog_datas as blog_data}
<p>{blog_data.title}</p>
{/each}

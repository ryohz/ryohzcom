<script lang="ts">
	import type { Post } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: {
		content: object;
		metadata: Post;
	};
	let meta: Post = data.metadata;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>
<article>
	<hgroup>
		<h1>{meta.title}</h1>
		<p>{meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each meta.categories as category}
			<span class="tag">&num;{category}</span>
		{/each}
	</div>

	<svelte:component this={data.content} />
</article>

<style>
	article {
		margin-top: var(--content-size-1);
		max-inline-size: 90%;
		margin-inline: auto;
		overflow-wrap: break-word;
	}

	article > * {
		overflow-wrap: break-word;
	}

	h1 {
		text-transform: capitalize;
	}

	h1,
	p {
		margin-top: var(--size-5);
		color: var(--fg);
	}

	:global(pre) {
		font-family: 'space';
		overflow: scroll;
		border-radius: var(--size-2);
		padding: var(--size-3);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tag {
		background-color: var(--bg-alt);
		padding: 5px;
		border-radius: var(--size-3);
	}

	/* global */
	:global(code) {
		font-family: 'jetbrainsMono';
		filter: brightness(90%);
	}
</style>

<script lang="ts">
	import type { Post } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: {
		content: {
			html: string;
		};
		metadata: Post;
	};

	let html = data.content.html;
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

	{@html html}
</article>

<style>
	article {
		margin-top: var(--content-size-1);
		max-inline-size: 90%;
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1,
	p {
		margin-top: var(--size-5);
		color: var(--fg);
	}

	pre {
		font-family: 'space';
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

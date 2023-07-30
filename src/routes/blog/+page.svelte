<script lang="ts">
	import type { Post } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data;

	const posts: Post[] = data.posts;
</script>

<div class="top">
	<h1>Blog</h1>
</div>
<div class="line" />
<div class="links">
	{#each posts as post}
		<hgroup>
			<a href={`blog/${post.slug}`}>
				<hgroup class="link">
					<p class="date">{post.date}</p>
					<h2 class="title">{post.title}</h2>
					<p class="description">{post.description}</p>
				</hgroup>
			</a>
			<div class="tags">
				{#each post.categories as category}
					<span class="tag">&num;{category}</span> {/each}
			</div>
		</hgroup>
	{/each}
</div>

<style>
	/* top */
	.top {
                margin-top: var(--content-size-1);
		max-inline-size: var(--content-size-5);
		margin-inline: auto;
	}

	.line {
		max-inline-size: var(--content-size-5);
		margin-inline: auto;
		height: 2px;
		width: 100%;
		background-color: var(--bg-alt);
	}

	/* links */
	p {
		color: var(--fg-alt);
		font-size: var(--size-4);
	}

	.links {
		margin-top: var(--size-7);
		max-inline-size: var(--content-size-5);
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		gap: var(--size-7);
	}

	.link {
		display: flex;
		flex-direction: column;
	}

	.date {
		margin-bottom: calc(- var(--size-5));
	}

	.title {
		color: var(--fg);
		position: relative;
		display: inline;
		width: fit-content;
	}

	.title::after {
		position: absolute;
		left: 0;
		bottom: -1px;
		content: ' ';
		width: 100%;
		height: 2%;
		background-color: var(--accent);
		transform: scale(0, 1);
		transform-origin: left bottom;
		transition: transform 0.3s;
	}

	.tags {
		display: flex;
		flex-direction: row;
		gap: var(--size-3);
	}

	.tag {
		background-color: var(--gray);
		width: fit-content;
		padding: var(--size-1);
		border-radius: var(--size-3);
	}

	.description {
		margin-top: calc(- var(--size-5));
	}

	/* event */
	.link:hover > p {
		color: var(--accent);
	}

	.link:hover > .title::after {
		transform: scale(1, 1);
	}

	.tag:hover {
		cursor: pointer;
	}
</style>

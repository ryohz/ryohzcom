<script lang="ts">
	import type { Head } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: {
		head: Head;
		meta: {
			title: string;
		};
		content: {
			html: string;
		};
	};

	let head_title = data.head.home_title;
	let title = data.meta.title;
	let html = data.content.html;
</script>

<svelte:head>
	<title>{head_title}</title>
</svelte:head>

<div class="home">
	<h2>{title}</h2>
	{@html html}
</div>

<style>
	@media screen and (min-width: 800px) {
		.home {
			display: flex;
			text-align: center;
			flex-direction: column;
			margin-top: var(--content-size-3);
			gap: var(--size-5);
			max-inline-size: 90%;
			margin-inline: auto;
		}

		:global(a) {
			color: var(--accent);
		}

		:global(body) {
			font-family: 'space';
		}
	}

	@media screen and (max-width: 800px) {
		.home {
			display: flex;
			text-align: left;
			flex-direction: column;
			margin-top: var(--content-size-2);
			gap: var(--size-5);
			max-inline-size: 90%;
			margin-inline: auto;
		}

		:global(a) {
			color: var(--accent);
		}

		:global(body) {
			font-family: 'space';
		}
	}
</style>

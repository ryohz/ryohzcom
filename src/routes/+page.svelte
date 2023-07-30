<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: {
		meta: {
			title: string;
			description: string;
		};
		content: {
			html: string;
		};
	};

	let title = data.meta.title;
	let description = data.meta.description;
	let html = data.content.html;
</script>

<svelte:head>
	<title>ryohzcom - {description}</title>
</svelte:head>

<div class="home">
	<h2>{title}</h2>
	{@html html}
</div>

<style>
	.home {
		display: flex;
		text-align: center;
		flex-direction: column;
		margin-top: var(--content-size-3);
		gap: var(--size-5);
		max-inline-size: var(--content-size-5);
		margin-inline: auto;
	}

	:global(a) {
		color: var(--accent);
	}

        :global(body) {
                font-family: 'space';
        }
</style>

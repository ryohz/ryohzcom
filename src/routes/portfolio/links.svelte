<script lang="ts">
	import type { Link } from '$lib/types/portfolio/link/link';
	import { blur } from 'svelte/transition';

	export let links: Link[];

	let current_link = '';
	const go_link = (link: Link) => {
		window.open(link.link, '_blank', 'noopener');
	};
</script>

<div class="root" transition:blur={{ duration: 200 }}>
	{#each links as link}
		{#if current_link === link.name}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<div class="hovered_block" on:click={() => go_link(link)}>
				<i class="icon">{link.icon}</i>
				<p class="name">{link.name}</p>
			</div>
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<div
				class="block"
				on:click={() => go_link(link)}
				on:mouseover={() => {
					current_link = link.name;
				}}
			>
				<i class="icon">{link.icon}</i>
				<p class="name">{link.name}</p>
			</div>
		{/if}
	{/each}
</div>

<style>
	.block {
		width: 100px;
		height: 100px;
		background-color: var(--bg-alt);
		position: relative;
		border-radius: 5px;
		margin: 20px;
	}
	.block::before {
		content: '';
		inset: -1px;
		border-radius: 5px;
		position: absolute;
		box-shadow: 0 0 0 0px var(--bg-alt);
		background: var(--card);
		z-index: -1;
	}
	.block::after {
		content: '';
		inset: -1px;
		border-radius: 5px;
		position: absolute;
		background: var(--card);
		z-index: -1;
		filter: blur(5px);
	}
	.hovered_block {
		width: 100px;
		height: 100px;
		background-color: var(--bg-alt);
		position: relative;
		border-radius: 5px;
		margin: 20px;
	}
	.hovered_block:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
	.hovered_block::before {
		content: '';
		inset: -1px;
		border-radius: 5px;
		position: absolute;
		box-shadow: 0 0 0 0px var(--bg-alt);
		background: var(--card);
		z-index: -1;
	}
	.hovered_block::after {
		content: '';
		inset: -1px;
		border-radius: 5px;
		position: absolute;
		background: var(--card);
		z-index: -1;
		filter: blur(5px);
	}

	.root {
		position: absolute;
		top: 150px;
		left: 50%;
		width: 80%;
		transform: translateX(-50%);
		display: flex;
		flex-wrap: wrap;
	}
	.icon {
		margin-left: 10px;
		font-size: 50px;
		font-family: nerd;
		font-style: normal;
	}
	.name {
		margin-left: 10px;
	}
</style>

<script lang="ts">
	import type { Link } from '$lib/types';
	import { page } from '$app/stores';

	let initial_path = $page.url.pathname;

	let links: Link[] = [
		{ name: 'home', href: '/', class: 'nav_link' },
		{ name: 'blog', href: '/blog', class: 'nav_link' },
		{ name: 'links', href: '/links', class: 'nav_link' },
		{ name: 'portfolio', href: '/portfolio', class: 'nav_link' }
	];

	let current_selected_number: number = 0;

	for (const i in links) {
		if (links[Number(i)].href === initial_path) {
			current_selected_number = Number(i);
			break;
		}
	}

	function update_selected(index: number) {
		links[current_selected_number].class = 'nav_link';
		links[index].class = 'selected';
		current_selected_number = index;
	}

	update_selected(current_selected_number);
</script>

<div class="nav">
	<div class="internal">
		{#each links as link, i}
			<a href={link.href} class={link.class} on:click={() => update_selected(i)}>{link.name}</a>
		{/each}
	</div>
</div>

<slot />

<style>
	:global(:root) {
		--bg: #18181b;
		--bg-alt: #27272a;
		--gray: #52525b;
		--fg: #d4d4d8;
		--fg-alt: #a1a1aa;
		--red: #b91c1c;
		--accent: #14b8a6;
		--accent-alt: #7c3aed;
		--size-1: 3px;
		--size-2: 5px;
		--size-3: 10px;
		--size-4: 15px;
		--size-5: 20px;
		--size-6: 30px;
		--size-7: 45px;
		--size-8: 65px;
		--content-size-1: 100px;
		--content-size-2: 200px;
		--content-size-3: 350px;
		--content-size-4: 400px;
		--content-size-5: 600px;
	}

	:global(body) {
		color: var(--fg);
		background-color: var(--bg);
		font-family: 'space';
		z-index: 1;
	}

	:global(a) {
		text-decoration: none;
	}

	@font-face {
		font-family: 'inter';
		src: url('/src/fonts/inter/Inter-Regular.woff') format('woff');

		font-family: 'nerd';
		src: url('/src/fonts/nerd/SymbolsNerdFont-Regular.ttf') format('truetype');

		font-family: 'jetbrainsMono';
		src: url('/src/fonts/jetbrainsmono/ttf/JetBrainsMono-Medium.ttf') format('truetype');

		font-family: 'space';
		src: url('/src/fonts/SpaceGrotesk-2.0.0/woff2/SpaceGrotesk[wght].woff2') format('woff2');
	}

	.nav {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		background-color: var(--bg);
		width: 100%;
		height: var(--size-7);
		z-index: 5;
	}

	.internal {
		display: flex;
		position: absolute;
		gap: var(--size-7);
		left: var(--size-6);
		bottom: 0;
	}

	.nav_link {
		font-size: large;
		display: flex;
		color: var(--fg);
		text-transform: capitalize;
		position: relative;
		top: 0px;
	}

	.nav_link:hover {
		cursor: pointer;
	}

	.nav_link::after {
		position: absolute;
		content: ' ';
		width: 100%;
		height: 2px;
		background-color: var(--accent);
		left: 0;
		bottom: 0px;
		border-radius: var(--size-3);
		transform: scale(0, 1);
		transform-origin: left bottom;
		transition: transform 0.3s;
	}

	.nav_link:hover::after {
		transform: scale(1, 1);
	}

	.selected {
		font-size: large;
		display: flex;
		color: var(--fg);
		text-transform: capitalize;
		position: relative;
	}

	.selected:hoiver {
		cursor: pointer;
	}

	.selected::after {
		position: absolute;
		content: ' ';
		width: 100%;
		height: 2px;
		background-color: var(--accent);
		left: 0;
		bottom: 0px;
		border-radius: var(--size-3);
	}

	@media screen and (max-width: 800px) {
		.internal {
			display: flex;
			position: absolute;
			gap: var(--size-6);
			left: var(--size-4);
			bottom: 0;
		}
	}
</style>

<script lang="ts">
	import type { Achivement } from '$lib/types';

	export let achivements: Achivement[];
	export let years: number[];

	let newest_year = years[0];

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<span class="newest_year_point" id={'Y' + newest_year.toString()} />

<div class="contents">
	{#each years as year}
		<p href={`#Y${year.toString()}`} on:click|preventDefault={scrollIntoView}>{year}</p>
	{/each}
</div>

<div class="root">
	{#each years as year}
		{#if year !== newest_year}
			<h2 class="year" id={'Y' + year.toString()}>{year}</h2>
		{:else}
			<h2 class="year">{year}</h2>
		{/if}
		{#each achivements as achivement, i}
			{#if achivement.year === year}
				{#if !achivement.future}
					<div class="block">
						{#if achivements[i + 1]?.future}<p class="now">Now!</p>{/if}
						<h4 class="title">
							{achivement.title}
						</h4>
						<p class="description">
							{achivement.description}
						</p>
					</div>
				{:else}
					<div class="future_block">
						<h4 class="title">
							{achivement.title}
						</h4>
						<p class="description">
							{achivement.description}
						</p>
						<p class="goal_sign">目標</p>
					</div>
				{/if}
			{/if}
		{/each}
	{/each}
</div>

<style>
	.newest_year_point {
		position: absolute;
		top: 0px;
	}

	@media screen and (min-width: 600px) {
		.root {
			margin-top: var(--content-size-1);
			max-inline-size: var(--content-size-5);
			margin-inline: auto;
		}

		.year {
			margin-top: var(--size-8);
			margin-bottom: var(--size-8);
		}

		.block {
			margin-bottom: var(--size-8);
			background-color: var(--bg-alt);
			border-radius: var(--size-3);
			padding: 0.5px;
			position: relative;
		}

		.block::after {
			position: absolute;
			content: ' ';
			bottom: calc(100% + ((var(--size-8) - var(--size-7)) / 2));
			width: 3px;
			height: var(--size-7);
			left: var(--size-6);
			background-color: var(--accent);
			border-radius: var(--size-2);
		}

		.future_block {
			margin-bottom: var(--size-8);
			background-color: var(--bg-alt);
			border-radius: var(--size-3);
			padding: 0.5px;
			position: relative;
		}

		.future_block::after {
			position: absolute;
			content: ' ';
			bottom: calc(100% + ((var(--size-8) - var(--size-7)) / 2));
			width: 3px;
			height: var(--size-7);
			left: var(--size-6);
			background-color: var(--accent-alt);
			border-radius: var(--size-2);
		}

		.title {
			position: relative;
			margin-left: var(--size-3);
		}

		.description {
			font-size: var(--size-4);
			color: var(--fg-alt);
			margin-left: var(--size-3);
		}

		.contents {
			position: fixed;
			left: calc((100% - var(--content-size-5)) / 2 + var(--content-size-5) + var(--size-8));
			top: var(--content-size-1);
		}

		.contents p:hover {
			cursor: pointer;
			color: var(--gray);
		}

		.now {
			color: var(--accent);
			font-size: larger;
			position: absolute;
			top: 50%;
			transform: translateY(-100%);
			left: -60px;
		}

		.goal_sign {
			position: absolute;
			right: var(--size-5);
			top: 50%;
			transform: translateY(-100%);
			color: var(--accent-alt);
		}
	}

	@media screen and (max-width: 400px) {
		.root {
			margin-top: calc(var(--content-size-1) + var(--size-7));
			max-inline-size: 90%;
			margin-inline: auto;
		}

		.year {
			margin-top: var(--size-8);
			margin-bottom: var(--size-8);
		}

		.block {
			margin-bottom: var(--size-8);
			background-color: var(--bg-alt);
			border-radius: var(--size-3);
			padding: 0.5px;
			position: relative;
		}

		.block::after {
			position: absolute;
			content: ' ';
			bottom: calc(100% + ((var(--size-8) - var(--size-7)) / 2));
			width: 3px;
			height: var(--size-7);
			left: var(--size-6);
			background-color: var(--accent);
			border-radius: var(--size-2);
		}

		.future_block {
			margin-bottom: var(--size-8);
			background-color: var(--bg-alt);
			border-radius: var(--size-3);
			padding: 0.5px;
			position: relative;
		}

		.future_block::after {
			position: absolute;
			content: ' ';
			bottom: calc(100% + ((var(--size-8) - var(--size-7)) / 2));
			width: 3px;
			height: var(--size-7);
			left: var(--size-6);
			background-color: var(--accent-alt);
			border-radius: var(--size-2);
		}

		.title {
			position: relative;
			margin-left: var(--size-3);
		}
		.description {
			font-size: var(--size-4);
			color: var(--fg-alt);
			margin-left: var(--size-3);
		}

		.contents {
			position: fixed;
			left: var(--size-4);
			top: calc(var(--content-size-1) - var(--size-1));
			background-color: var(--bg);
			display: flex;
			height: var(--size-6);
			width: calc(100% - var(--size-5));
			z-index: 10;
			gap: var(--size-3);
			overflow: scroll;
		}
		.contents p {
			margin-top: 0;
		}
		.contents p:hover {
			margin-top: 0;
			cursor: pointer;
			color: var(--gray);
		}

		.now {
			color: var(--accent);
			font-size: larger;
			position: absolute;
			top: 0;
			transform: translateY(-200%);
			right: 0px;
		}

		.goal_sign {
			position: absolute;
			right: var(--size-5);
			top: 50%;
			transform: translateY(-100%);
			color: var(--accent-alt);
		}
	}
</style>

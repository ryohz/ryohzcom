<script lang="ts">
	import type { Skill } from '$lib/types';

	export let skills: Skill[];

	let categories = ['language', 'framework&library', 'tool'];

	skills.sort((a, b) => a.level - b.level);
</script>

<div class="root">
	{#each categories as category}
		<h1 class="category">{category}</h1>
		<div class="skills">
			{#each skills as skill, i}
				{#if skill.category === category}
					<div class="skill">
						<div class="b1">
							<h2>{skill.title}</h2>
							<p>{skill.description}</p>
						</div>
						<img src={skill.icon} alt={`${skill.title}-icon`} class="icon" />
					</div>
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	@media screen and (min-width: 600px) {
		.root {
			margin-top: var(--content-size-1);
			width: 100%;
			max-inline-size: 70%;
			margin-inline: auto;
		}

		h1 {
			margin-top: var(--size-8);
		}

		.b1 {
			display: flex;
			flex-direction: column;
			width: 85%;
		}

		.b1 p {
			margin-top: -10px;
		}

		.skill {
			display: flex;
			position: relative;
			background-color: var(--bg-alt);
			width: 85%;
			margin-bottom: var(--size-5);
			margin-top: 0;
			border-radius: var(--size-2);
			padding: var(--size-4);
			height: auto;
		}

		.skill h2 {
			margin-top: 0;
		}

		.skills {
			margin-top: var(--size-7);
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(var(--content-size-4), 1fr));
		}

		.icon {
			/* width: var(--size-8); */
			height: var(--size-7);
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: var(--size-4);
		}
		.category {
			text-transform: capitalize;
			position: relative;
		}

		.category::after {
			position: absolute;
			left: 0;
			bottom: -10px;
			content: ' ';
			width: 100%;
			height: 2px;
			background-color: var(--bg-alt);
		}
	}

	@media screen and (max-width: 400px) {
		.root {
			margin-top: var(--content-size-1);
			width: 100%;
			max-inline-size: 90%;
			margin-inline: auto;
		}

		h1 {
			margin-top: var(--size-8);
		}

		.b1 {
			display: flex;
			flex-direction: column;
			width: 80%;
		}

		.b1 p {
			margin-top: -10px;
		}

		.skill {
			display: flex;
			position: relative;
			background-color: var(--bg-alt);
			margin-bottom: var(--size-5);
			margin-top: 0;
			border-radius: var(--size-2);
			padding: var(--size-4);
			height: auto;
		}

		.skill h2 {
			margin-top: 0;
		}

		.skills {
			margin-top: var(--size-7);
			display: grid;
		}

		.icon {
			/* width: var(--size-8); */
			height: var(--size-6);
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: var(--size-4);
		}
		.category {
			text-transform: capitalize;
			position: relative;
		}

		.category::after {
			position: absolute;
			left: 0;
			bottom: -10px;
			content: ' ';
			width: 100%;
			height: 2px;
			background-color: var(--bg-alt);
		}
	}
</style>

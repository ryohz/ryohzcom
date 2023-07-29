<script lang="ts">
	import type { Skill } from '$lib/types';

	export let skills: Skill[];
</script>

<div class="root">
	<h1>Languages</h1>
	<div class="lang_line" />
	<div class="skills">
		{#each skills as skill}
			<div class="skill">
				<div class="b1">
					<h2>{skill.title}</h2>
					<p>{skill.description}</p>
				</div>
				<img src={skill.icon} alt={`${skill.title}-icon`} class="icon" />
			</div>
		{/each}
	</div>
</div>

<style>
	.root {
		width: 100%;
		max-inline-size: 70%;
		margin-inline: auto;
	}

	h1 {
		margin-top: var(--size-8);
	}

	.lang_line {
		height: 1px;
		width: 100%;
		background-color: var(--bg-alt);
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
		width: 350px;
		margin-top: 0;
		margin-bottom: var(--size-5);
		border-radius: var(--size-2);
		padding: var(--size-4);
		height: auto;
	}

	.skill h2 {
		margin-top: 0;
	}

	.icon {
		/* width: var(--size-8); */
		height: var(--size-8);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: var(--size-2);
	}

	.skills {
		position: absolute;
		top: var(--content-size-2);
		left: 50%;
		transform: translateX(-50%);
		flex-direction: row;
		width: 70%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--content-size-4), 1fr));
	}
</style>

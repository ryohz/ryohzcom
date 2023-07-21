<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { Skill } from '$lib/types/portfolio/skill/skill';
	import { blur } from 'svelte/transition';

	export let skills: Skill[];
</script>

<div class="skills" transition:blur={{ duration: 200 }}>
	{#each skills as skill}
		<Card
			name={skill.name}
			description={skill.desc}
			width={undefined}
			height="150px"
			position_config={{
				display: undefined,
				position: undefined,
				top: undefined,
				left: undefined,
				bottom: undefined,
				right: undefined,
				transform: undefined
			}}
		/>
	{/each}
</div>

<style>
	.skills {
		position: absolute;
		top: 150px;
		left: 50%;
		width: 80%;
		transform: translateX(-52%);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}
</style>

<script lang="ts">
	import profile_info from '../../datas/portfolio/profile';
	import skills_info from '../../datas/portfolio/skills';

	import type { Profile, Skill } from '$lib/types';
	import ProfileComponent from './profile_component.svelte';
	import SkillsComponents from './skills_components.svelte';

	let current = 'skills';
	let content_list = ['profile', 'skills', 'achivement'];

	const profile: Profile = profile_info;
	const skills: Skill[] = skills_info;

	const update_current = (next: string) => {
		current = next;
	};
</script>

<div class="index">
	{#each content_list as content}
		{#if current === content}
			<p class="current">{content}</p>
		{:else}
			<p class="others" on:click={() => update_current(content)}>{content}</p>
		{/if}
	{/each}
</div>

{#if current === 'profile'}
	<ProfileComponent {profile} />
{/if}
{#if current === 'skills'}
	<SkillsComponents {skills} />
{/if}

<style>
	.index {
		position: fixed;
		top: 50%;
		right: 0px;
		margin-right: var(--size-7);
		transform: translateY(-100%);
	}

	.others {
		position: relative;
	}

	.others::after {
		z-index: -1;
		position: absolute;
		left: -20%;
		top: 50%;
		transform: scale(0, 1) translateY(-50%);
		transform-origin: left bottom;
		transition: transform 0.3s;
		content: ' ';
		width: 8px;
		height: 3px;
		background-color: var(--accent);
		border-radius: var(--size-3);
		transition: 0.2s;
	}

	.others:hover::after {
		transform: scale(1, 1);
		cursor: pointer;
	}

	.others:hover {
		cursor: pointer;
	}

	.current {
		position: relative;
	}

	.current::after {
		z-index: -1;
		position: absolute;
		left: -20%;
		top: 50%;
		transform: translateY(-50%);
		content: ' ';
		width: 8px;
		height: 3px;
		background-color: var(--accent);
		border-radius: var(--size-3);
	}

	.current:hover {
		cursor: pointer;
	}

	.current:hover::after {
		/* filter: brightness(60%); */
		background-color: var(--bg-alt);
		cursor: pointer;
	}
</style>

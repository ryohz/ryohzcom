<script lang="ts">
	import { writable, get } from 'svelte/store';
	import type { Writable } from 'svelte/store';

	import profile_info from '../../datas/portfolio/profile';
	import skills_info from '../../datas/portfolio/skills';
	import archivements_info from '../../datas/portfolio/achievements';

	import type { Achivement, Head, Profile, Skill } from '$lib/types';
	import ProfileComponent from './profile_component.svelte';
	import SkillsComponents from './skills_components.svelte';
	import AchivementsComponent from './achivements_component.svelte';

	const profile: Profile = profile_info;
	const skills: Skill[] = skills_info;
	const achivements: Achivement[] = archivements_info;

	let current = 'profile';
	let content_list = ['profile', 'skills', 'achivements'];

	const update_current = (next: string) => {
		current = next;
	};

	export let years: Writable<number[]> = writable([]);
	let latest: number = achivements[achivements.length - 1].year;
	let earliest: number = achivements[0].year;
	for (let i = earliest; i <= latest; i++) {
		years.update((arr) => [...arr, i]);
	}

	/** @type {import('./$types').PageData} */
	export let data: {
		head: Head;
	};

	let head_title = data.head.portfolio_title;
</script>

<svelte:head>
	<title>{head_title}</title>
</svelte:head>

<div class="index">
	<div class="inner_index">
		{#each content_list as content}
			{#if current === content}
				<p class="current">{content}</p>
			{:else}
				<p class="others" on:click={() => update_current(content)}>{content}</p>
			{/if}
		{/each}
	</div>
</div>

{#if current === 'profile'}
	<ProfileComponent {profile} />
{/if}
{#if current === 'skills'}
	<SkillsComponents {skills} />
{/if}
{#if current === 'achivements'}
	<AchivementsComponent {achivements} years={get(years)} />
{/if}

<style>
	@media screen and (min-width: 600px) {
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
			background-color: var(--bg-alt);
			cursor: pointer;
		}
	}

	@media screen and (max-width: 400px) {
		.index {
			position: fixed;
			top: var(--size-7);
			left: 0px;
			display: flex;
			gap: var(--size-5);
			z-index: 10;
			width: 100%;
			background-color: var(--bg);
		}
		.index:hover {
			cursor: pointer;
		}
		.inner_index {
			margin-left: var(--size-4);
			display: flex;
			gap: var(--size-4);
		}
		.others {
			position: relative;
		}
		.others::after {
			position: absolute;
			left: 0;
			bottom: -1px;
			content: ' ';
			width: 100%;
			height: 2px;
			background-color: var(--accent);
			transform: scale(0, 1);
			transform-origin: left top;
			transition: transform 0.3s;
		}
		.others:hover::after {
			transform: scale(1, 1);
		}

		.current {
			position: relative;
		}
		.current::after {
			position: absolute;
			left: 0;
			bottom: -1px;
			content: ' ';
			width: 100%;
			height: 2px;
			background-color: var(--accent);
		}
	}
</style>

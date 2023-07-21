<script lang="ts">
	import { portfolio_info } from '../../contents/portfolio';
	import Indicator from '../../lib/components/Indicator.svelte';
	import Links from './links.svelte';
	import Profile from './profile.svelte';
	import Skills from './skills.svelte';

	let current_content = 'profile';
	interface Content {
		name: string;
		event: Function;
	}
	let contents: Content[] = [];
	let portfolio_keys = Object.keys(portfolio_info);
	for (let i = 0; i < portfolio_keys.length; i++) {
		contents.push({
			name: portfolio_keys[i],
			event: function () {
				current_content = portfolio_keys[i];
			}
		});
	}

	const change_content_by_key = (event: any) => {
		let current_index = portfolio_keys.findIndex((element) => element === current_content);
		if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
			if (current_index === 0) {
				current_content = portfolio_keys[portfolio_keys.length - 1];
			} else {
				current_content = portfolio_keys[current_index - 1];
			}
		}
		if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
			if (current_index === portfolio_keys.length - 1) {
				current_content = portfolio_keys[0];
			} else {
				current_content = portfolio_keys[current_index + 1];
			}
		}
	};
</script>

<svelte:window on:keydown={change_content_by_key} />

{#if current_content === 'profile'}
	<Profile profile={portfolio_info.profile} />
{/if}

{#if current_content === 'skills'}
	<Skills skills={portfolio_info.skills} />
{/if}

{#if current_content === 'links'}
	<Links links={portfolio_info.links} />
{/if}

<Indicator
	{current_content}
	{contents}
	root_style={{
		position: 'absolute',
		top: '50%',
		left: undefined,
		right: '50px',
		bottom: undefined,
		transform: 'translateY(-50%)'
	}}
/>

<style>
</style>

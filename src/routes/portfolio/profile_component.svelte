<script lang="ts">
	import type { Profile } from '$lib/types';
	export let profile: Profile;
</script>

<div class="profile">
	<hgroup>
		<img src={profile.icon} alt="ryohz\'s icon" class="icon" />
		<h1 class="name">{profile.name}</h1>
	</hgroup>
	<div class="tags">
		{#each profile.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
	<div class="description">
		{profile.description}
	</div>
</div>

<style>
	@media screen and (min-width: 800px) {
		.profile {
			margin-top: var(--content-size-2);
			max-inline-size: var(--content-size-5);
			margin-inline: auto;
		}

		.description {
			margin-top: var(--size-7);
		}

		.tags {
			display: flex;
			gap: var(--size-4);
		}

		.tag {
			background-color: var(--bg-alt);
			border-radius: var(--size-3);
			padding: var(--size-1);
			color: var(--accent);
		}

		.icon {
			width: var(--size-8);
			height: var(--size-8);
		}

		.name {
			position: absolute;
			top: 50%;
			transform: translateY(-100%);
			margin-left: calc(var(--size-8) * 2);
		}

		hgroup {
			position: relative;
			display: flex;
			margin-bottom: var(--size-5);
		}
	}

	@media screen and (max-width: 800px) {
		.profile {
			margin-top: var(--content-size-2);
			max-inline-size: 90%;
			margin-inline: auto;
		}

		.description {
			margin-top: var(--size-7);
		}

		.tags {
			display: flex;
			flex-direction: column;
			gap: var(--size-4);
		}

		.tag {
			background-color: var(--bg-alt);
			border-radius: var(--size-3);
			padding: var(--size-1);
			color: var(--accent);
			width: fit-content;
		}

		.icon {
			width: var(--size-7);
			height: var(--size-7);
		}

		.name {
			position: absolute;
			top: 50%;
			transform: translateY(-100%);
			margin-left: calc(var(--size-7) * 2);
		}

		hgroup {
			position: relative;
			display: flex;
			margin-bottom: var(--size-5);
		}
	}
</style>

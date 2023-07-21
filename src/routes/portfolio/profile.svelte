<script lang="ts">
	import type { Profile } from '$lib/types/portfolio/profile/profile';
	import { blur } from 'svelte/transition';

	export let profile: Profile;
</script>

<div class="profile" transition:blur={{ duration: 200 }}>
	<div class="top">
		<h1 class="name">{profile.name}</h1>
		<p class="attributes">{profile.attrib}</p>
	</div>
	<img src={profile.icon} alt="icon" class="icon" />
	<div class="description">
		{profile.desc}
	</div>
</div>

<style>
	.profile {
		display: flex;
		flex-direction: column;
		position: absolute;
		align-items: left;
		top: 150px;
		left: 50%;
		transform: translateX(-50%);
		width: 30%;
	}

	.top {
		display: flex;
		position: relative;
		flex-direction: column;
	}

	.icon {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 50px;
		width: 100px;
		height: 100px;
	}

	.description {
		margin-top: 50px;
		overflow-wrap: break-word;
	}
</style>

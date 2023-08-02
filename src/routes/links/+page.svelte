<script lang="ts">
	import type { SocialLink } from '$lib/types';

	/** @type {import('./$types').PageData} */
	export let data: {
		social_links: SocialLink[];
	};

	let social_links = data.social_links;
	console.log(social_links);
</script>

<div class="links">
	{#each social_links as social_link}
		<a href={social_link.url} target="_blank" rel="noreferrer noopener">
			<div class="link">
				<h3>{social_link.service_name}</h3>
				<p class="username">{social_link.username}</p>
			</div>
		</a>
	{/each}
</div>

<style>
	/*@media screen and (min-width: 800) { -->*/
	.links {
		margin-top: var(--content-size-2);
		max-inline-size: var(--content-size-3);
		margin-inline: auto;
		display: flex;
		flex-direction: column;
	}
	.link {
		background-color: var(--bg-alt);
		display: flex;
		flex-direction: row;
		gap: var(--size-6);
		margin-bottom: var(--size-6);
		border-style: solid;
		border-width: 1px;
		border-color: var(--bg-alt);
		border-radius: var(--size-3);
	}
	.link h3 {
		margin-left: var(--size-4);
		color: var(--fg);
	}
	.username {
		color: var(--fg);
	}

	.link:hover {
		border-color: var(--accent);
		border-style: solid;
		border-width: 1px;
	}

	.nerd_padding {
		color: rgba(0, 0, 0, 0);
	}
	/* } */
</style>

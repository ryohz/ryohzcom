<script lang="ts">
	interface Content {
		name: string;
		// eslint-disable-next-line @typescript-eslint/ban-types
		event: Function;
	}

	interface RootStyle {
		position: string | undefined;
		top: string | undefined;
		left: string | undefined;
		right: string | undefined;
		bottom: string | undefined;
		transform: string | undefined;
	}

	export let root_style: RootStyle;
	export let width: number = 10;
	export let height: number = 50;
	export let current_content: string;

	let block_width = width.toString() + 'px';
	let block_height = height.toString() + 'px';
	let inset = (-(width / 10)).toString() + 'px';

	export let contents: Content[] = [
		{
			name: 'sample',
			event: function () {
				return;
			}
		}
	];

	let showing_name = '';
	function show_name(name: string) {
		console.log('hello');
		showing_name = name;
	}
</script>

<div
	class="root"
	style="
	--position: {root_style.position};
	--top: {root_style.top};
	--left: {root_style.left};
	--bottom: {root_style.bottom};
	--right: {root_style.right};
	transform: {root_style.transform};
"
>
	{#each contents as content}
		<div class="pair">
			{#if showing_name === content.name && showing_name !== current_content}
				<p class="showed_name">{content.name}</p>
			{/if}
			{#if current_content === content.name}
				<p class="current_name">{content.name}</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<div
					class="current_block"
					style="--width: {block_width};--height: {block_height};--inset: {inset};"
					on:mouseover={() => show_name(content.name)}
					on:mouseleave={() => show_name('')}
					on:click={() => content.event()}
				/>
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<div
					class="block"
					style="--width: {block_width};--height: {block_height};--inset: {inset};"
					on:mouseover={() => show_name(content.name)}
					on:mouseleave={() => show_name('')}
					on:click={() => content.event()}
				/>
			{/if}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		</div>
	{/each}
</div>

<style>
	.root {
		position: var(--position);
		top: var(--top);
		left: var(--left);
		right: var(--right);
		bottom: var(--bottom);
		transform: var(--transform);
		display: flex;
		flex-direction: column;
	}
	.pair {
		width: 100px;
		display: flex;
		flex-direction: row;
		justify-content: end;
		position: relative;
	}
	.showed_name {
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		margin-right: 20px;
		display: flex;
		color: var(--gray);
	}
	.current_name {
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		margin-right: 20px;
		display: flex;
	}
	.block {
		display: flex;
		width: var(--width);
		height: var(--height);
		background-color: var(--bg);
		margin-top: 30px;
		border-radius: 5px;
		position: relative;
	}
	.block:hover {
		background: var(--bg-alt);
		cursor: pointer;
	}
	.block::before {
		content: '';
		inset: var(--inset);
		border-radius: 5px;
		position: absolute;
		/* box-shadow: 0 0 0 20px var(--bg-alt); */
		/* background: var(--indicator-block); */
		z-index: -1;
	}
	.block::after {
		content: '';
		inset: var(--inset);
		border-radius: 5px;
		position: absolute;
		background: var(--indicator-block);
		z-index: -1;
		filter: blur(2px);
	}
	
	.current_block {
		display: flex;
		width: var(--width);
		height: var(--height);
		background-color: var(--bg);
		margin-top: 30px;
		border-radius: 5px;
		position: relative;
	}
	.current_block:hover {
		background: var(--bg-alt);
		cursor: pointer;
	}
	.current_block::before {
		content: '';
		inset: var(--inset);
		border-radius: 5px;
		position: absolute;
		/* box-shadow: 0 0 0 20px var(--bg-alt); */
		background: var(--indicator-block);
		z-index: -1;
	}
	.current_block::after {
		content: '';
		inset: var(--inset);
		border-radius: 5px;
		position: absolute;
		background: var(--indicator-block);
		z-index: -1;
		filter: blur(10px);
	}


</style>

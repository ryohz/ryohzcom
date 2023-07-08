<script lang="ts">
	interface PositionConfig {
		position: String | undefined;
		top: String | undefined;
		left: String | undefined;
		right: String | undefined;
		bottom: String | undefined;
		transform: String | undefined;
		display: String | undefined;
	}

	export let position_config: PositionConfig;
	export let name: String;
	export let description: String;
	export let width: String | undefined;
	export let height: String | undefined;
</script>

<div
	class="root"
	style="
    --position:{position_config.position};
    --top:{position_config.top};
    --bottom:{position_config.bottom};
    --right:{position_config.right};
    --left:{position_config.left};
    --display:{position_config.display};
"
>
	<div class="inner" style="--inner-width:{width};--inner-height:{height}">
		<h2>{name}</h2>
		<p>{description}</p>
	</div>
</div>

<style>
	.root {
		position: var(--position);
		top: var(--top);
		bottom: var(--bottom);
		left: var(--left);
		right: var(--right);
		transform: var(--transform);
	}
	.inner {
		width: var(--inner-width);
		height: var(--inner-height);
		background-color: var(--bg-alt);
		position: relative;
		border-radius: 5px;
        margin: 20px;
	}
	.inner::before {
		content: '';
		inset: -1px;
		border-radius: 5px;
		position: absolute;
		box-shadow: 0 0 0 0px var(--bg-alt);
		background: var(--card);
		z-index: -1;
	}
	.inner::after {
		content: '';
		inset: -1px;
		border-radius: 5px;
		position: absolute;
		background: var(--card);
		z-index: -1;
		filter: blur(5px);
	}
	.inner {
		width: var(--inner-width);
	}
	h2 {
		margin-left: 10px;
		margin-right: 10px;
		overflow-wrap: break-word;
	}
	p {
		margin-left: 10px;
		margin-right: 10px;
		overflow-wrap: break-word;
	}
</style>

<script lang="ts">
	import { home_info } from '../contents/home';

	let filter_state = false;
	let filter_state2 = false;

	const between = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	let count = 0;
	const filter = () => {
		count++;
		filter_state2 = false;
		if (count % 3 === 0) {
			filter_state2 = true;
		}
		let random = between(10, 500);
		let difference = between(700, 1500);
		filter_state = true;
		setTimeout(() => {
			filter_state = false;
			setTimeout(() => {
				filter();
			}, difference);
		}, random);
	};
	filter();
</script>

<div class="root">
	{#if filter_state}
		<h1 class="filtered_title">{home_info.title}</h1>
	{:else}
		<h1 class="title">{home_info.title}</h1>
	{/if}
	<p>{home_info.desc}</p>
</div>
<svg width="0" height="0">
	<filter id="filtered">
		<feColorMatrix
			type="matrix"
			result="red_"
			values="4 0 0 0 0
              0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 1 0"
		/>
		{#if filter_state2}
			<feOffset in="red_" dx="2" dy="0" result="red" />
		{:else}
			<feOffset in="red_" dx="-2" dy="0" result="red" />
		{/if}
		<feColorMatrix
			type="matrix"
			in="SourceGraphic"
			result="blue_"
			values="0 0 0 0 0
              0 3 0 0 0 
              0 0 10 0 0 
              0 0 0 1 0"
		/>
		{#if filter_state2}
			<feOffset in="blue_" dx="-2" dy="0" result="blue" />
		{:else}
			<feOffset in="blue_" dx="2" dy="0" result="blue" />
		{/if}
		<feBlend mode="screen" in="red" in2="blue" />
	</filter>
</svg>

<style>
	.root {
		width: 100%;
		height: 100%;
		text-align: center;
	}
	.filtered_title {
		font-family: inter;
		font-size: 150px;
		filter: url(#filtered);
		position: relative;
		top: 100px;
	}
	.title {
		font-family: inter;
		transform-origin: left;
		font-size: 150px;
		position: relative;
		top: 100px;
	}

	@media screen and (max-width: 800px) {
		.filtered_title {
			font-family: inter;
			font-size: 100px;
			filter: url(#filtered);
			position: relative;
			top: 100px;
		}
		.title {
			font-family: inter;
			transform-origin: left;
			font-size: 100px;
			position: relative;
			top: 100px;
		}
	}

	/* 画面の幅が600px未満の場合 */
	@media screen and (max-width: 600px) {
		.filtered_title {
			font-family: inter;
			font-size: 70px;
			filter: url(#filtered);
			position: relative;
			top: 100px;
		}
		.title {
			font-family: inter;
			transform-origin: left;
			font-size: 70px;
			position: relative;
			top: 100px;
		}
	}
</style>

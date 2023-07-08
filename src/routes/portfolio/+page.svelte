<script lang="ts">
	import Indicator from '../../lib/Indicator.svelte';
	import Card from '../../lib/card.svelte';
	import { blur } from 'svelte/transition';

	let current_content = 'skills';

	let contents = [
		{
			name: 'profile',
			event: function () {
				current_content = 'profile';
			}
		},
		{
			name: 'skills',
			event: function () {
				current_content = 'skills';
			}
		},
		{
			name: 'links',
			event: function () {
				current_content = 'links';
			}
		},
		{
			name: 'others',
			event: function () {
				current_content = 'others';
			}
		}
	];

	let skills = [
		{
			name: 'typescript',
			description: 'web開発とデスクトップアプリ開発のときに使います。'
		},
		{
			name: 'react',
			description: 'ちょっと前までweb開発とデスクトップ開発のフロントエンドで使ってました。'
		},
		{
			name: 'svelte',
			description:
				'最近使い始めました。軽いし、書き方にクセがあまりなくて押し付けがましくないからめっちゃ使いやすい。'
		}
	];
</script>

{#if current_content === 'profile'}
	<div class="profile" transition:blur={{duration: 200}}>
		<div class="top">
			<h1 class="name">Ryohz</h1>
			<p class="attributes">(Japanese/student/infosec/webdev)</p>
		</div>
		<img src="/ryohz.png" alt="icon" class="icon" />
		<div class="description">
			日本の通信高校生です。趣味は暗号解読、webハッキングなど、セキュリティ関連全般です。最近やっていることは
			Hack The Box と、
			セキュリティキャンプ全国大会の受講と、このwebサイトの開発です。情報技術に関連しないことでいうと
		</div>
	</div>
{/if}

{#if current_content === 'skills'}
	<div class="skills" transition:blur={{duration: 200}}>
		{#each skills as skill}
			<Card
				name={skill.name}
				description={skill.description}
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

	.skills {
		position: absolute;
		top: 150px;
		left: 50%;
		width: 80%;
		transform: translateX(-52%);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		/* repeat(auto-fit, minmax(200px, 1fr)); */
	}
</style>

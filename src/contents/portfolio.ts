import type { Portfolio } from '$lib/types/portfolio/portfolio';

export const portfolio_info: Portfolio = {
	profile: {
		name: 'Ryohz',
		icon: '/ryohz.png',
		attrib: '(Japanese)',
		desc: '\
        日本の通信高校生です。趣味は暗号解読、webハッキングなど、セキュリティ関連全般です。\
        最近やっていることは Hack The Box と、 セキュリティキャンプ全国大会の受講と、このwebサイトの開発です。\
        情報技術に関連しないことでいうと'
	},
	skills: [
		{
			name: 'Typrscript',
			desc: 'web開発とデスクトップアプリ開発のときに使います。別にそんなに好きではない。'
		},
		{
			name: 'React',
			desc: 'ちょっと前までweb開発とデスクトップ開発のフロントエンドでメインで使っていました。'
		},
		{
			name: 'svelte',
			desc: '最近使い始めました。軽いし、書き方にクセがあまりなくて押し付けがましくないからめっちゃ使いやすい。'
		}
	],
	links: [
		{
			name: 'twitter',
			icon: '',
			link: 'https://twitter.com/ryohz_'
			// color: ''
		},
		{
			name: 'github',
			icon: '',
			link: 'https://github.com/ryohz'
			// color: ''
		},
		{
			name: 'github',
			icon: '',
			link: 'https://github.com/ryohz'
			// color: ''
		}
	]
};

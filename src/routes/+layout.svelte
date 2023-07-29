<script>
</script>

<div class="nav">
	<div class="internal">
		<a href="/" class="nav_link">Home</a>
		<a href="/blog" class="nav_link">Blog</a>
		<a href="/links" class="nav_link">Links</a>
		<a href="/portfolio" class="nav_link">Portfolio</a>
	</div>
</div>

<slot />

<style>
	:global(:root) {
		--bg: #18181b;
		--bg-alt: #27272a;
		--fg: #d4d4d8;
                --fg-alt: #a1a1aa;
		--gray: #6b7280;
		--red: #b91c1c;
		--green: #15803d;
		--blue: #1e40af;
		--indicator-block: linear-gradient(
			to right bottom,
			#5b21b6,
			#2e41bb,
			#0053b8,
			#0060af,
			#0369a1
		);
		--card: linear-gradient(to right top, #0f172a, #13233a, #152f4b, #133c5d, #0c4a6e);
		--size-1: 3px;
		--size-2: 5px;
		--size-3: 10px;
		--size-4: 15px;
		--size-5: 20px;
                --size-6: 30px;
                --size-7: 45px;
                --size-8: 65px;
                --content-size-1: 100px;
                --content-size-2: 200px;
                --content-size-3: 350px;
                --content-size-4: 550px;
                --content-size-5: 800px;
	}

	:global(body) {
		color: var(--fg);
		background-color: var(--bg);
		font-family: 'space';
	}

	:global(a) {
		text-decoration: none;
	}

	@font-face {
		font-family: 'inter';
		src: url('/src/fonts/inter/Inter-Regular.woff') format('woff');

		font-family: 'nerd';
		src: url('/src/fonts/nerd/SymbolsNerdFont-Regular.ttf') format('truetype');

                font-family: 'space';
                src: url('/src/fonts/SpaceGrotesk-2.0.0/woff2/SpaceGrotesk[wght].woff2') format('woff2');
	}

	.nav {
		margin-left: 10px;
		display: flex;
	}

	.internal {
		display: flex;
		width: 50%;
	}

	.nav_link {
		font-size: large;
		display: flex;
		margin-right: 30px;
		color: var(--fg);
	}
	.nav_link:hover {
		cursor: pointer;
	}
</style>

<script>
</script>

<div class="nav">
	<div class="internal">
		<a href="/" class="nav_link">Home</a>
		<a href="/blog" class="nav_link">Blog</a>
		<a href="/about" class="nav_link">About</a>
		<a href="/portfolio" class="nav_link">Portfolio</a>
	</div>
	<div class="external">
		<a
			href="https://twitter.com/ryohz_"
			target="_blank"
			rel="noopener noreferrer"
			class="twitter_link">twitter</a
		>
	</div>
</div>

<slot />

<style>
	:global(:root) {
		--bg: #020617;
		--bg-alt: #0f172a;
		--fg: #f8fafc;
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
	}

	:global(body) {
		color: var(--fg);
		background-image: radial-gradient(circle, #020617, #0b1125, #0d1834);
		/* background-image: radial-gradient(circle, #0d1834, #0b1125, #020617); */
		font-family: 'inter';
	}

	:global(a) {
		text-decoration: none;
	}

	@font-face {
		font-family: 'inter';
		src: url('/src/fonts/inter/Inter-Regular.woff') format('woff');
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

	.external {
		display: flex;
		width: 50%;
		justify-content: end;
	}

	.twitter_link {
		margin-right: 10px;
		font-size: large;
		color: var(--fg);
	}
	.twitter_link:hover {
		cursor: pointer;
	}
</style>

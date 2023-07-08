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
		--blue: #0ea5e9;
		--indicator-block: linear-gradient(
			to right bottom,
			#5b21b6,
			#2e41bb,
			#0053b8,
			#0060af,
			#0369a1
		);
		--card: linear-gradient(to right top, #0f172a, #13233a, #152f4b, #133c5d, #0c4a6e);;
	}

	:global(body) {
		/* background-color: var(--bg); */
		/* background-image: linear-gradient(to right top, #020617, #0b1125, #0d1834, #111f44, #172554); */
		/* background: linear-gradient(45deg, #020617, #0b1125, #0d1834, #111f44 100%, #172554 200%); */
		/* background:  background-image: radial-gradient(circle, #020617, #0b1125, #0d1834, #111f44, #172554); */
		color: var(--fg);
		background-image: radial-gradient(circle, #020617, #0b1125, #0d1834);
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
		color: var(--blue);
	}
</style>

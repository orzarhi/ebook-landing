<script lang="ts">
	import authorPic from '$assets/author.webp';
</script>

<section class="landing-page-section">
	<h2 class="mb-l">About the author</h2>
	<div class="author-container">
		<div class="author-text">
			<p class="mb-xs">
				Hi, I'm the author of this book. I'm a writer, a thinker, and a creator. I love to write
				about things that matter, and I hope you enjoy reading my work.
			</p>
			<p>
				I've been writing for over 10 years, and I've published several books on a variety of
				topics. I'm passionate about storytelling, and I believe that stories have the power to
				change the world.
			</p>
		</div>
		<img src={authorPic} alt="Author Or Zarhi" />
	</div>
</section>

<style>
	.author-container {
		display: flex;
		justify-content: space-between;
	}

	.author-container img {
		width: 40%;
		border: 6px solid black;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
	}

	.author-text {
		width: 55%;
	}

	/* .author-text p:not(:last-of-type) {
      margin-bottom: 8px;
    } */
</style>

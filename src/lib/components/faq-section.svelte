<script lang="ts">
	import { FaqItem, Button } from '$components';
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		<FaqItem />
	</div>
	<div class="additional-info">
		<Button class="mt-s">BUY NOW</Button>
		<p class="mt-m">Any other questions?</p>
		<a href="https://www.linkedin.com/in/or-zarhi">Hit me up on linkedin</a>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: grey;
	}

	.twitter-icon {
		width: 16px;
		height: 16px;
	}

	.additional-info a {
		text-decoration: underline;
	}
</style>

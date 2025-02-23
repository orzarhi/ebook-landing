<script lang="ts">
	import chevronDown  from '$assets/icons/chevron-down.svg';
</script>

<button class="container">
	<div class="question-and-answer">
		<p class="question mb-s">What will I learn from this ebook?</p>

		<p class="answer">
			This book provides a complete guide to living in Spain, covering essential topics such as
			visas and residency, finding a home, securing a job, and embracing Spanish culture. Whether
			you're moving short-term or permanently, you'll gain valuable insights into navigating life in
			Spain.
		</p>
	</div>
	<img src={chevronDown} alt="" />
</button>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 12px 0;
		border-bottom: 1px solid grey;
		text-align: left;
	}

	.question-and-answer {
		padding-right: 150px;
		flex-grow: 1;
	}

	.answer {
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition:
			max-height 0.3s ease-out,
			opacity 0.3s ease-out;
	}

	button img {
		width: 24px;
		height: 24px;
		transition: transform 0.3s linear;
	}

	.question {
		font-weight: 600;
	}

	.container-expanded img {
		transform: rotate(180deg);
	}

	.container-expanded .answer {
		max-height: unset;
		opacity: 1;
	}
</style>

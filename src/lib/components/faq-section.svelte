<script lang="ts">
	import { FaqItem, Button } from '$components';

	const faqs = [
		{
			question: 'What can I learn from this book?',
			answer:
				"This book provides a complete guide to living in Spain, covering essential topics such as visas and residency, finding a home, securing a job, and embracing Spanish culture. Whether you're moving short-term or permanently, you'll gain valuable insights into navigating life in Spain."
		},
		{
			question: 'Who is this book for?',
			answer:
				'This book is ideal for expats, digital nomads, retirees, and anyone considering moving to Spain. It provides practical advice for individuals and families looking to establish a new life in Spain.'
		},
		{
			question: 'Does this book cover the legal aspects of moving to Spain?',
			answer:
				'Yes! The book includes detailed information on Spanish visas, residency permits, and legal requirements, helping you navigate bureaucracy with ease.'
		},
		{
			question: 'Will I learn about different regions in Spain?',
			answer:
				'Absolutely! The book explores various regions, including coastal areas and major cities, helping you choose the best place to live based on your lifestyle and budget.'
		},
		{
			question: 'Does the book provide guidance on finding a job in Spain?',
			answer:
				'Yes! It includes strategies for job hunting, networking, and using job portals to increase your chances of securing employment in Spain.'
		},
		{
			question: 'Can this book help me adapt to Spanish culture?',
			answer:
				'Definitely! From understanding social customs and dining etiquette to participating in local festivals, the book offers insights into fully immersing yourself in Spanish culture.'
		},
		{
			question: 'Is this book suitable for people who don’t speak Spanish?',
			answer:
				'Yes! While learning Spanish is recommended, the book provides tips on overcoming language barriers and integrating into Spanish society.'
		}
	];

	let questionCurrentlyExpanded = $state(-1);

	function onclick(index: number) {
		if (questionCurrentlyExpanded === index) {
			questionCurrentlyExpanded = -1;
			return;
		}
		questionCurrentlyExpanded = index;
	}
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		{#each faqs as { question, answer }, index}
			<FaqItem
				{question}
				{answer}
				isExpanded={questionCurrentlyExpanded === index}
				onclick={() => onclick(index)}
			/>
		{/each}
	</div>
	<div class="additional-info mt-m">
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

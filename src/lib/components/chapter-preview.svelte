<script lang="ts">
	const chapters = [
		{
			id: 1,
			title: 'Navigating the Spanish bureaucracy',
			strapline: 'Understanding Visas, Residency, and Legal Essentials',
			excerpt:
				'Moving to Spain involves navigating a labyrinth of bureaucratic processes that can feel overwhelming at first. This chapter breaks down the essential steps required to secure your visa, establish residency, and handle other legal formalities. Whether you’re planning a short-term stay or seeking permanent residency, understanding Spain’s legal framework is crucial. We’ll explore the different types of visas available, from student to work visas, and provide tips on how to streamline your application process. Additionally, this chapter covers essential documentation, such as obtaining a Número de Identidad de Extranjero (NIE), which is your key to unlocking many services in Spain.'
		},
		{
			id: 2,
			title: 'Finding Your Dream Home in Spain',
			strapline: 'From Coastal Villas to City Apartments: Where to Live in Spain',
			excerpt:
				'Spain offers a diverse range of living options, from bustling city centers to tranquil coastal towns. This chapter provides an overview of Spain’s most popular regions, including the Costa del Sol, Costa Blanca, and Costa Brava. We’ll explore the pros and cons of each area, helping you decide which location best suits your lifestyle and budget. Whether you’re looking for a beachfront villa, a city apartment, or a rural retreat, Spain has something for everyone. Additionally, we’ll cover the process of buying property in Spain, including legal requirements, taxes, and financing options.'
		},
		{
			id: 3,
			title: 'Mastering the Spanish Job Market',
			strapline: 'Finding Employment in Spain: Tips and Strategies',
			excerpt:
				'Spain’s job market can be challenging to navigate, especially for expats who are unfamiliar with the local customs and practices. This chapter provides an overview of Spain’s employment landscape, including the most in-demand industries and job sectors. We’ll explore the best strategies for finding a job in Spain, from networking and job fairs to online job portals and recruitment agencies. Whether you’re seeking a full-time position, a part-time job, or freelance work, this chapter offers practical advice on how to secure employment in Spain.'
		},
		{
			id: 4,
			title: 'Embalming the Spanish Lifestyle',
			strapline: 'From Tapas to Flamenco: Embracing Spanish Culture',
			excerpt:
				'Spain is renowned for its vibrant culture, from flamenco dancing and bullfighting to siestas and tapas. This chapter provides an overview of Spain’s rich cultural heritage, including its music, art, and cuisine. We’ll explore the best ways to immerse yourself in Spanish culture, from attending local festivals and events to learning the language and making new friends. Whether you’re a history buff, a foodie, or an art lover, Spain has something to offer everyone. Additionally, this chapter covers practical tips on adapting to the Spanish way of life, from dining etiquette to social customs.'
		}
	];
</script>

<section class="chapter-preview default-margin">
	<h2 class="mb-l">What you're getting</h2>
	<div class="chapter-container">
		<ul>
			{#each chapters as chapter}
				<li>
					<button
						class="chapter-title"
						aria-controls="chapter-info-{chapter.id}"
						aria-expanded="true"
					>
						<h3>Chapter {chapter.id}: {chapter.title}</h3>
					</button>
				</li>
			{/each}
		</ul>
		<div class="chapter-info">
			<h3 class="chapter-strapline italic mb-s">
				Understanding Visas, Residency, and Legal Essentials
			</h3>
			<p>
				Moving to Spain involves navigating a labyrinth of bureaucratic processes that can feel
				overwhelming at first. This chapter breaks down the essential steps required to secure your
				visa, establish residency, and handle other legal formalities. Whether you’re planning a
				short-term stay or seeking permanent residency, understanding Spain’s legal framework is
				crucial. We’ll explore the different types of visas available, from student to work visas,
				and provide tips on how to streamline your application process. Additionally, this chapter
				covers essential documentation, such as obtaining a Número de Identidad de Extranjero (NIE),
				which is your key to unlocking many services in Spain.
			</p>
		</div>
	</div>
</section>

<style>
	.chapter-preview {
		padding: 80px;
		margin-left: 12vw;
		margin-right: 20vw;
		max-width: 1150px;
	}
	.chapter-container {
		display: flex;
		justify-content: space-between;
	}

	.chapter-container ul {
		width: 40%;
	}

	.chapter-info {
		width: 55%;
	}

	.chapter-title {
		border-bottom: 1px solid grey;
		width: 100%;
		display: block;
		padding: 12px;
		text-align: left;
	}

	.selected-chapter-title {
		background-color: black;
		border: none;
		color: white;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 1px 3px rgba(0, 0, 0, 0.08);
	}
</style>

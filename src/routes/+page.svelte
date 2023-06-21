<script>
	import club_meeting from '$lib/images/clubmeeting.png';
</script>

<svelte:head>
	<title>Huskies Computer Club - ELAC</title>
	<meta name="description" content="East Los Angeles College Computer Club official website." />
</svelte:head>

<section id="hero" class="">
	<div class="hero min-h-screen" style="background-image: url(/src/lib/images/elac-tech-building.png);">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
		  <div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Huskies Computer Club</h1>
			<p class="mb-2 text-xl">@ East Los Angeles College</p>
			<p class="mb-2 text-xl">In Collaboration with the School of Business</p>
			<p class="mb-4 text-xl">Get hands on software experience with us</p>
			<button class="btn btn-primary"><a href="#about">Scroll Down</a></button>
		  </div>
		</div>
	  </div>
</section>

<section id="about" class="border-8 border-violet-500 mb-5">
	<div class="container px-4 px-lg-5">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8">
				<h1 class="">Join Our Meetings</h1>
				<p class="">
					We meet Thursdays & Fridays from 5-10pm in the ELAC E7 building room 310A to work on exciting projects, learn the most in-demand skills, and meet accomplished guest speakers. Drop by to introduce yourself in person and feel welcome join our growing discord community to keep up with our events.
				</p>
			</div>
		</div>
		<img class="img-fluid" src={club_meeting} alt="A photograph of the official club meeting in person together." />
	</div>
</section>

<section id="projects" class="border-8 border-violet-500 mb-5">

</section>

<section id="contact" class="border-8 border-violet-500 mb-5">

</section>
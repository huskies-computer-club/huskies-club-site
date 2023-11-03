<!-- This part of the code allows the user to -->

<script>
	import peerProgramingImg from '$lib/images/peerprogram.png';
	import elacTechBuildingImg from '$lib/images/elac-tech-building.png';
	import * as Sentry from '@sentry/svelte';
	Sentry.init({
		dsn: 'https://5dba0ffb4221d49b21b5d5800fc52d8c@o4506164319289344.ingest.sentry.io/4506164324335616',
		integrations: [
			new Sentry.BrowserTracing({
				// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
				tracePropagationTargets: ['localhost', 'huskiestech.netlify.app']
			}),
			new Sentry.Replay()
		],

		// Performance Monitoring
		tracesSampleRate: 1.0, // Capture 100% of the transactions
		// Session Replay
		replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
		replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
	});
</script>

<svelte:head>
	<title>Huskies Tech Club - ELAC</title>
	<meta name="description" content="East Los Angeles College Computer Club official website." />
</svelte:head>

<section id="hero" class="">
	<div class="hero min-h-screen" style={`background-image: url(${elacTechBuildingImg});`}>
		<div class="hero-overlay bg-opacity-60" />
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Huskies Tech Club</h1>
				<p class="mb-2 text-xl">@ East Los Angeles College</p>
				<p class="mb-2 text-xl">In Collaboration with the School of Business</p>
				<p class="mb-4 text-xl">Get hands on software experience with us</p>
				<button class="btn btn-primary"><a href="#about">Scroll Down</a></button>
			</div>
		</div>
	</div>
</section>

<section id="about" class="flex justify-center text-black">
	<div class="container px-4 px-lg-5 flex flex-col justify-center">
		<div class="row gx-4 gx-lg-5 justify-content-center">
			<div class="col-lg-8 flex flex-col items-center">
				<h1 class="text-3xl mt-5">Join Our Meetings</h1>
				<p class="text-center my-5 text-black max-w-4xl">
					We meet Thursdays & Fridays from 5-10pm in the <span class="text-red-600">
						ELAC E7 building room 310A
					</span>
					to work on exciting projects, learn the most in-demand skills, and meet accomplished guest
					speakers. Drop by to introduce yourself in person and
					<span class="text-blue-600"
						><a href="https://discord.gg/ZCYaNhDyjy" target="_blank">join our discord community</a
						></span
					>
					to keep up with our events.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="projects" class="border-8mb-5 text-black">
	<div class="card lg:card-side bg-base-100 shadow-xl">
		<figure><img src={peerProgramingImg} alt="Album" /></figure>
		<div class="card-body">
			<h1 class="card-title mb-3 text-2xl">We go beyond hands on keyboard</h1>
			<ul class="text-xl">
				<li class="mb-5 list-disc">
					<span class="text-blue-400"
						>Arduino <span class="text-blue-300">MicroControllers</span></span
					> - for creating embedded systems like homeautomation
				</li>
				<li class="mb-5 list-disc">
					<span class="text-red-400"
						>Raspberry Pis' <span class="text-red-300">(SBCs)</span>
					</span>for building big while keeping a friendly carbon footprint
				</li>
				<li class="mb-5 list-disc">
					<span class="text-yellow-400">Server Administering</span>, deploying, and testing software
				</li>
			</ul>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">
					<a href="https://discord.gg/ZCYaNhDyjy" target="_blank">Get Involved</a>
				</button>
			</div>
		</div>
	</div>
</section>

<section id="contact" class="mb-5 mt-5 text-black">
	<div class="card bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">📍 Location 📍</h2>
			<p>1301 Avenida Cesar Chavez, Monterey Park, CA 91754</p>
			<!-- this is the wrong room number ONLY A place holder for now -->
			<p class="text text-green-500">
				Building E7 Technology Center <br /> <span class="text-red-400">- 3rd Floor</span><br />-
				<span class="text-blue-500">Room Number 318</span>
			</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary"
					><a
						href="https://www.openstreetmap.org/directions?from=&to=34.04178%2C-118.14905#map=19/34.04164/-118.14972&layers=N"
						target="_blank"
						>Map it!
					</a>
				</button>
			</div>
		</div>
	</div>
	<div class="card bg-base-100 shadow-xl mt-8">
		<div class="card-body">
			<h2 class="card-title">📧 Email Club Advisor Rodriguez 📧</h2>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">
					<a href="mailto:rodrigc8@elac.edu">Send Email</a>
				</button>
			</div>
		</div>
	</div>
</section>

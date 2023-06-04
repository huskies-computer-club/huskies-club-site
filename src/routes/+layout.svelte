<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
</script>

<div class="app" id="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="footer bg-black small text-center text-white-50">
		<div class="container px-4 px-lg-5">Copyright &copy; Huskies Computer Club 2023</div>
	</footer>
</div>


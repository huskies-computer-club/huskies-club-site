<script>
	import logo from '$lib/images/elac-logo.svg';
</script>

<header class="sticky top-0 z-10" id="nav">
	<nav>
		<div class="navbar bg-secondary">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</label>
					<ul
						tabindex="0"
						class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="#about">About</a></li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
				<a href="#app" class="btn btn-ghost normal-case text-lg">Huskies Tech Club</a>
			</div>

			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="#about">About</a></li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>

			<div class="navbar-end">
				<a href="#app" class="btn w-16 hidden lg:flex">
					<img src={logo} class="w-full" alt="elac logo" />
				</a>
			</div>
		</div>
	</nav>
</header>

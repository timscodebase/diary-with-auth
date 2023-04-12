<script>
	import { page } from '$app/stores';
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<nav class="main-nav">
	<ul>
		{#each navItems as page}
			<NavItem href={page.route}>
				{page.title}
			</NavItem>
		{/each}
		{#if !$page.data.user}
			<NavItem href="/login">Login</NavItem>
			<NavItem href="/register">Register</NavItem>
		{/if}

		{#if $page.data.user}
			<NavItem href="/diary">Diary</NavItem>

			<form action="/logout" method="POST">
				<button type="submit">Log out</button>
			</form>
		{/if}
	</ul>
</nav>

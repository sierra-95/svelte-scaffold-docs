<script>
    import {isLoading, Button} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectioning} from '$lib';

    function toggleLoading() {
        isLoading.update((value) => !value);
    }
</script>

<main class="space-y-4">
	<title>General Stores</title>
	<h1>General Stores</h1>
	<h3>A variety of stores have been provided for managing state in your Svelte applications.</h3>
	<h2>isMobile (768px)</h2>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { isMobile } from '@sierra-95/svelte-scaffold';
			
			let isMenuOpen = $state(false);
			$effect(() => {
				if ($isMobile) isMenuOpen = false;
			});
		<\/script>
	`}/>
	<h2>isLoading</h2>
	<Button onclick={toggleLoading}>Click here</Button>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { isLoading } from '@sierra-95/svelte-scaffold';
			
			function toggleLoading() {
				isLoading.update((value) => !value);
			}
		<\/script>
	`}/>
	<h2>isLoggedIn</h2>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { isLoggedIn } from '@sierra-95/svelte-scaffold';
			const {data} = $props();
			$: if (data?.user) {
				isLoggedIn.set(true);
			}
		<\/script>

		{#if $isLoggedIn}
			<p>Welcome back!</p>
		{/if}
	`}/>
	<h2>User Store</h2>
	<h3>This store can be used components to manage user-related data including the  
        <a href={`${routes.core.children.Menus}#${sectioning.menu.user}`} class="note">This example</a> 
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
			import { goto } from '$app/navigation';
			import { onMount } from 'svelte';
	        import {User, resetUserStore, isLoggedIn} from '@sierra-95/svelte-scaffold';

			onMount(() => {
				User.update(store => {
					store.userId = 'w23ac20r-58ra-4372-a567-0e02k2m3x832';
					store.firstName = 'John';
					store.lastName = 'Doe';
					store.email = 'john.doe@example.com';
					store.phone = '+1-555-123-4567';
					return store;
				});
			});

			function handleLogout(){
				resetUserStore();
				isLoggedIn.set(false);
				goto('/login');
			}
		<\/script>
	`}/>
</main>
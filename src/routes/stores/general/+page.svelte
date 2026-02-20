<script>
    import {isLoading, Button} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectionIds} from '$lib';

    function toggleLoading() {
        isLoading.update((value) => !value);
    }
</script>

<main class="space-y-4">
	<title>General Stores</title>
	<h1>General Stores</h1>
	<h3>A variety of stores have been provided for managing state in your Svelte applications.</h3>
	<section id={sectionIds.stores.general.is_mobile} class="space-y-4 mb-10">
		<h2>1. Device Width</h2>
		<h3>isMobile (&lt;480px), isTablet ( 480px &gt & &lt; 768px), isDesktop (&gt1024px)</h3>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { isMobile, isTablet, isDesktop } from '@sierra-95/svelte-scaffold';
				
				let isMenuOpen = $state(false);
				$effect(() => {
					if ($isMobile) isMenuOpen = false;
				});
			<\/script>
		`}/>
	</section>

	<section id={sectionIds.stores.general.is_loading} class="space-y-4 mb-10">
		<h2>2. isLoading</h2>
		<h3>
		Implemented internally in
		<a class="note" href={routes.modules.layout.children.overview}>Layout</a>,
		so it can be used, for example, in form submissions.
		</h3>
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
	</section>
	
	<section id={sectionIds.stores.general.is_logged_in} class="space-y-4 mb-10">
		<h2>3. isLoggedIn</h2>
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
	</section>

	<section id={sectionIds.stores.general.user_store} class="space-y-4 mb-10">
		<h2>4. User Store</h2>
		<h3>This store can be used components to manage user-related data including the  
			<a href={`${routes.core.children.Menus}#${sectionIds.components.menu.user_menu}`} class="note">This example</a> 
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
	</section>
</main>
<script>
    import {isLoading, Button, ButtonTheme} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectionIds} from '$lib';

    function toggleLoading() {
        isLoading.update((value) => !value);
    }
</script>

<main class="space-y-4">
	<title>General Stores</title>
	<h1>General Stores</h1>

	<ol class="sierra-docs-ol">
	
		<section id={sectionIds.stores_utils.stores.is_mobile} class="space-y-4 mb-10">
			<li>Device Width</li>
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

		<section id={sectionIds.stores_utils.stores.is_loading} class="space-y-4 mb-10">
			<li>isLoading</li>
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
	
		<section id={sectionIds.stores_utils.stores.is_logged_in} class="space-y-4 mb-10">
			<li>isLoggedIn</li>
			<h3>Default value is <code>null</code></h3>
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

		<section id={sectionIds.stores_utils.stores.user_store} class="space-y-4 mb-10">
			<li>User Store</li>
			<h3>This store can be used components to manage user-related data including the  
				<a href={`${routes.core.components.children.menus}#${sectionIds.components.menu.user_menu}`} class="note">This example</a> 
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

		<section id={sectionIds.stores_utils.stores.theme_store} class="space-y-4">
			<li>Theme Store</li>
			<h3>The theme store is tightly integrated with the 
				<a href={routes.modules.layout.children.overview} class="note">Layout component</a> 
				and internal body styling.
			</h3>
			<h3>It is also directly manipulated by the <a href={routes.core.components.children.buttons + '#' + sectionIds.components.buttons.theme_button} class="note">Theme Button</a>.</h3>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { onMount } from 'svelte';
					import { theme } from '@sierra-95/svelte-scaffold';
					onMount(() => {
						theme.set('light');
					});
				<\/script>

			`}/>
			<h3>Note that updates made to the store are also saved to localStorage, ensuring they persist.</h3>
		</section>
</main>
<script lang="ts">
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import {Layout, ButtonTheme, theme, isLoggedIn, User} from '@sierra-95/svelte-scaffold';
	import {sections} from '$lib';

	let { children } = $props();
	let link = $state('');
	$effect(() => {
		if($theme === 'light'){
			link = 'https://files.michaelmachohi.com/logos/michaelmachohi.dark.blue.png';
		}else{
			link = 'https://files.michaelmachohi.com/logos/michaelmachohi.light.blue.png';
		}
	});

	onMount(()=>{
        isLoggedIn.set(true);
		User.update(store => {
			store.userId = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
			store.firstName = 'John';
			store.lastName = 'Doe';
			store.email = 'john.doe@example.com';
			store.phone = '+1-555-123-4567';
			return store;
		});
    })

	onMount(async () => {
		await tick();

		const hash = window.location.hash;
		if (hash) {
			const el = document.querySelector(hash);
			el?.scrollIntoView({ behavior: 'smooth' });
		}
	});

</script>

<svelte:head>
	<link rel="icon" href="https://files.michaelmachohi.com/logos/michaelmachohi.favicon.circle.ico" />
	<script
	src="https://kit.fontawesome.com/dd0e902104.js"
	crossorigin="anonymous"
	></script>
</svelte:head>

<Layout 
	headerTitle = 'Sierra-95/svelte-scaffold'
	headerLink = '/'
	headerImage = {link}
	headerImageSize = '35px'
	{sections}
	contentCenter
	headerRightContent = {headerRightContent}
>{@render children()} 
</Layout>
{#snippet headerRightContent()}
	<div class="mr-4"><ButtonTheme /></div>
{/snippet}

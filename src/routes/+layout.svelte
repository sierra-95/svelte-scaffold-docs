<script lang="ts">
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import {Layout, ButtonTheme, theme, isLoggedIn, User, isMobile,isTablet, DropdownContainer, MenuItem, GlobalSearch} from '@sierra-95/svelte-scaffold';
	import {sections, TOC, Navigator, githubURL, Footer, Network } from '$lib';

	let { children } = $props();
	let link = $state('');
	let openMenu = $state(false);
	
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

<Network/>
<Layout 
	{sections}
	paddingOff
	headerTitle = {$isMobile || $isTablet ? 'Sierra-95' : 'Sierra-95/svelte-scaffold'}
	headerLink = '/'
	headerImage = {link}
	headerImageSize = '30px'
	headerRightContent = {headerRightContent}
>
	<div class="flex items-start">
		<div style="width: {$isMobile || $isTablet ? '100%' : 'calc(100% - 300px)'}" class="w-full p-6 mx-auto">
			{@render children()}
			<Navigator/>
			<Footer/>
		</div>
		<TOC/>
	</div>
</Layout>

{#snippet headerRightContent()}
	<GlobalSearch {sections}/>
	<DropdownContainer top="30px" bind:open={openMenu} dropdownTrigger={TriggerMenu}>
		<MenuItem onclick={() => window.open(githubURL,'_blank','noopener,noreferrer')} icon="fa-github" iconSize="15px">Github</MenuItem>
		<MenuItem icon="fa-question" iconSize="15px">Support</MenuItem>
		<div style="display: flex; gap: 1rem; align-items: center; padding: 1rem">Theme<ButtonTheme /></div>
	</DropdownContainer>
{/snippet}

{#snippet TriggerMenu()}
	<button class="w-10 text-xl text-(--primary-bg)" aria-label="Ellipsis" onclick={() => (openMenu = !openMenu)}>
		<i class="fa-solid fa-cog" style="transition: transform 0.5s ease; transform: rotate({openMenu ? 90 : 0}deg);"></i>
	</button>
{/snippet}


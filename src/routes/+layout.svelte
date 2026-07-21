<script lang="ts">
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import {browser} from '$app/environment';
	import {Layout, ButtonTheme, theme, isLoggedIn, User, isMobile,isTablet, DropdownContainer, MenuItem, layoutStore,
		editorConfig, isDesktop
	} from '@sierra-95/svelte-scaffold';
	import {sections, TOC, Navigator, Footer, routes } from '$lib';
	import { favicon } from '$lib/assets/company';
	import site_webmanifest from '$lib/assets/site.webmanifest';

	let { children } = $props();
	const link = $derived(`https://files.michaelmachohi.com/logos/michaelmachohi.${$theme === 'light' ? 'dark' : 'light'}.png`);
	let openMenu = $state(false);
	const year = new Date().getFullYear();	

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

		editorConfig.update(store => {
			store.serverGetUrl = '/api/media/get';
			store.serverUploadUrl = '/api/media/upload';
			store.serverDeleteUrl = '/api/media/delete';
			store.serverDownloadUrl = '/api/media/download';
			return store;
		});

		layoutStore.update(store => {
			store.sections = sections;
			store.paddingOff = true;
			store.headerLink = '/';
			store.toggleMenuColor = 'var(--text)';
			store.headerImageSize = '30px';
			store.headerRightContent = headerRightContent;
			store.dropdownContent = dropdownContent;
			return store;
		});
    })

	$effect(()=>{
		if(browser){
			$layoutStore.headerImage = link;
			$layoutStore.dropdown = !$isMobile;
			$layoutStore.headerTitle = $isMobile ? 'Sierra-95' : '@sierra-95/svelte-scaffold';
		}
	})

	onMount(async () => {
		await tick();

		const hash = window.location.hash;
		if (hash) {
			const el = document.querySelector(hash);
			el?.scrollIntoView({ behavior: 'smooth' });
		}
	});

	function redirectToMoreHeaderOptions(link: string) {
		window.open(link, '_blank');
	}

</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="{favicon}apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="{favicon}favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="{favicon}favicon-16x16.png">
	<link rel="manifest" href="{site_webmanifest}">
	<script src="https://kit.fontawesome.com/dd0e902104.js" crossorigin="anonymous"></script>
</svelte:head>

<Layout>
	<div class="flex items-start">
		<div style="width: {!$isDesktop ? '100%' : 'calc(100% - 300px)'}" class="w-full p-6 mx-auto">
			{@render children()}
			<Navigator/>
			<Footer/>
		</div>
		<TOC/>
	</div>
</Layout>

{#snippet headerRightContent()}
	<DropdownContainer top="30px" bind:open={openMenu} dropdownTrigger={TriggerMenu}>		
		<div style="display: flex; gap: 1rem; align-items: center; padding: 1rem">Theme<ButtonTheme /></div>
		<MenuItem onclick={() => window.open(routes.system.resources.github,'_blank','noopener,noreferrer')} icon="fa-github" iconSize="15px">Github</MenuItem>
		<h2 style="color: var(--text-secondary); font-size: small; padding: 1rem">© {year}. All rights reserved</h2>
	</DropdownContainer>
{/snippet}

{#snippet TriggerMenu()}
	<button class="w-10 text-xl text-(--primary-bg)" aria-label="Ellipsis" onclick={() => (openMenu = !openMenu)}>
		<i class="fa-solid fa-cog" style="transition: transform 0.5s ease; transform: rotate({openMenu ? 90 : 0}deg);"></i>
	</button>
{/snippet}

{#snippet dropdownContent()}
	<div style="padding: 10px 0px;" class="w-80">
		<h2 class="p-4">More from 
			<a class="note" href={routes.system.social.github} target="_blank" rel="noopener noreferrer">@sierra-95</a>
		</h2>
		<MenuItem  
			url={favicon + 'favicon.ico'} 
			onclick={() => redirectToMoreHeaderOptions('https://michaelmachohi.com')}
			iconSize="20px"
		>Portfolio
		</MenuItem>
	</div>
{/snippet}


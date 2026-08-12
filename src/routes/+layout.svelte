<script lang="ts">
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import {browser} from '$app/environment';
	import {Layout, ButtonTheme, theme, isMobile, DropdownContainer, MenuItem, layoutStore, fileInputConfig} from '@sierra-95/svelte-scaffold';
	import { favicon, sections, routes, resources } from '$lib/assets/company';
	import site_webmanifest from '$lib/assets/site.webmanifest';
	import { Navigator, Footer } from '$lib';

	let { children } = $props();

	let openMenu = $state(false);
	const user_id = '550e8400-e29b-41d4-a716-446655440000';
	const link = $derived(`https://files.michaelmachohi.com/logos/michaelmachohi.${$theme === 'light' ? 'dark' : 'light'}.png`);

	onMount(()=>{
		fileInputConfig.update(store => {
			store.user_id = user_id; 
			return store;
		});
		layoutStore.update(store =>{
			store.header = {
				...store.header,
				link: '/',
				imageSize: '30px',
				contentRight: headerRightContent,
			}
			store.TOC = {
				...store.TOC,
				content: TOCContent
			}
			store.sections = sections;
			store.routes = routes;
			return store;
		})
    })

	$effect(()=>{
		if(browser){
			$layoutStore.header.src = link;
			$layoutStore.header.title = $isMobile ? 'Sierra-95' : '@sierra-95/svelte-scaffold';
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
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="{favicon}apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="{favicon}favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="{favicon}favicon-16x16.png">
	<link rel="manifest" href="{site_webmanifest}">
	<script src="https://kit.fontawesome.com/dd0e902104.js" crossorigin="anonymous"></script>
</svelte:head>

<!-- Settings Menu -->
{#snippet TriggerMenu()}
	<button class="w-10 text-xl" aria-label="Ellipsis" onclick={() => (openMenu = !openMenu)}>
		<i class="fa-solid fa-cog text-(--ss-neutral)" style="transition: transform 0.5s ease; transform: rotate({openMenu ? 90 : 0}deg);"></i>
	</button>
{/snippet}
{#snippet headerRightContent()}
	<DropdownContainer top="30px" bind:open={openMenu} dropdownTrigger={TriggerMenu}>		
		<MenuItem onclick={() => window.open(resources.package.github_issues,'_blank','noopener,noreferrer')} icon="fa-github" iconSize="15px">Issues</MenuItem>
		<MenuItem onclick={() => window.open(resources.package.npm,'_blank','noopener,noreferrer')} icon="fa-brands fa-npm" iconSize="15px">npm</MenuItem>
		<div style="display: flex; gap: 1rem; align-items: center; padding: 1rem">Theme<ButtonTheme /></div>
	</DropdownContainer>
{/snippet}

<!-- TOC -->
{#snippet TOCContent()}
	<div style="margin-top: 1rem">
		<h3>Guest Id:
			<em class="text-sm text-(--ss-success)">{$fileInputConfig.user_id}</em>
		</h3>
	</div>
{/snippet}

<Layout>
	{@render children()}
	<Navigator/>
	<Footer/>
</Layout>


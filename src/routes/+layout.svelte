<script lang="ts">
	import '../app.css';
	import { onMount, tick } from 'svelte';
	import {page} from '$app/state';
	import {browser} from '$app/environment';
	import {Layout, ButtonTheme, theme, isMobile, DropdownContainer, MenuItem, layoutStore, Navigator, mediaServerConfig} from '@sierra-95/svelte-scaffold';
	import { favicon, sections, routes, resources } from '$lib/assets/company';
	import site_webmanifest from '$lib/assets/site.webmanifest';
	import { Footer, PageMeta } from '$lib';

	let { children } = $props();

	let openMenu = $state(false);
	const link = $derived(`https://files.michaelmachohi.com/logos/michaelmachohi.${$theme === 'light' ? 'dark' : 'light'}.png`);
	const githubIconBg = $derived($theme === 'light' ? '#181717' : '#ffffff');
	const isRoot = $derived(page.url.pathname === '/');

	onMount(()=>{
		mediaServerConfig.update(store => {
			store.user_id = '550e8400-e29b-41d4-a716-446655440000'; 
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
			$layoutStore.header.title = $isMobile ? '@sierra-95' : '@sierra-95/svelte-scaffold';
			$layoutStore.content.padding = isRoot ? '0px 20px 20px 20px' : '20px';
		}
	})

	function scrollToSection(sectionId: string) {
		const sectionElement = document.getElementById(sectionId);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(async () => {
		await tick();
		const hash = page.url.hash;
		if (hash) scrollToSection(hash.substring(1));
	});

	const targetId = `docs-screen-start`;
	let previousPathname = page.url.pathname;
	$effect(() => {
		const pathname = page.url.pathname;
		const hash = page.url.hash;
		if (pathname !== previousPathname) {
			previousPathname = pathname;
			if (!hash) {
				//console.log("scrolling to top");
				scrollToSection(targetId);
			}
		}
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="{favicon}apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="{favicon}favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="{favicon}favicon-16x16.png">
	<link rel="manifest" href="{site_webmanifest}">
	<script src="https://kit.fontawesome.com/dd0e902104.js" crossorigin="anonymous"></script>

	<meta property="og:title" content="@sierra-95/svelte-scaffold">
	<meta property="og:description" content="A powerful Svelte scaffold with pre-built components, modules, and stores to jumpstart your project.">
	<meta property="og:image" content="https://files.michaelmachohi.com/logos/og.png">
	<meta property="og:url" content="https://svelte.michaelmachohi.com/">
	<meta property="og:site_name" content="@sierra-95/svelte-scaffold">
	<meta property="og:type" content="website">
</svelte:head>

<!-- Settings Menu -->
{#snippet TriggerMenu()}
	<button class="w-10 text-xl" aria-label="Ellipsis" onclick={() => (openMenu = !openMenu)}>
		<i class="fa-solid fa-cog text-(--ss-neutral)" style="transition: transform 0.5s ease; transform: rotate({openMenu ? 90 : 0}deg);"></i>
	</button>
{/snippet}
{#snippet headerRightContent()}
	<DropdownContainer top="40px" width="200px" bind:open={openMenu} dropdownTrigger={TriggerMenu}>		
		<div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center; padding: 0.5rem 0rem;">
			<p style="font-size: 0.9rem;">Theme <span style="color: var(--ss-neutral);font-family:  'TrenchSlab Regular', sans-serif;">{$theme}</span></p>
			<ButtonTheme />
		</div>
		<MenuItem onclick={() => window.open(resources.package.github,'_blank','noopener,noreferrer')} iconC={{name: "fa-github", bg: githubIconBg}}>Repository</MenuItem>
		<MenuItem onclick={() => window.open(resources.package.npm,'_blank','noopener,noreferrer')} iconC={{name: "fa-brands fa-npm", bg: '#cb3837', size:'20px'}}>Package</MenuItem>
	</DropdownContainer>
{/snippet}

<!-- TOC -->
{#snippet TOCContent()}
	<div style="margin-top: 1rem">
		<em class="text-sm">Guest: {$mediaServerConfig.user_id}</em>
	</div>
{/snippet}

<Layout>
	<div id={targetId}></div>
	{@render children()}
	<PageMeta/>
	<Navigator/>
	<Footer/>
</Layout>


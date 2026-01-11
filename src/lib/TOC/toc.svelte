<script lang="ts">
    import { onMount } from 'svelte';
    import {sections} from '$lib/index';
    import type { Section, SectionItem } from '$lib/index';
    import {isMobile} from '@sierra-95/svelte-scaffold';
    //import { page } from '$app/state';
    import { page } from '$app/stores';
    import { replaceState } from '$app/navigation';
    import { browser } from '$app/environment';

    $: currentPath = $page.url.pathname;
    $: currentSection = findSectionByPath(sections, currentPath);
    $: currentHash = '';


    function updateHash(){
        const sections = document.querySelectorAll('section[id]')
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        replaceState(`#${id}`, {});
                        currentHash = id; 
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.8 // section is "active" when 80% visible
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    };

    onMount(() => {
        updateHash();
    });

    $: if(currentPath && browser){
        updateHash();
    }
    

    function findSectionByPath(sections: Section[], currentPath: string) {
        for (const section of sections) {
            for (const item of section.items) {
                const found = searchItem(item, currentPath);
                if (found) return found;
            }
        }
        return null;
    }

    function searchItem(item: SectionItem, path: string): SectionItem | null {
        if (item.path === path) return item;

        if (item.children && item.children.length > 0) {
            for (const child of item.children) {
                const found = searchItem(child, path);
                if (found) return found;
            }
        }

        return null;
    }
</script>
<style>
    #TOC{
        width: 250px;
        position: relative;
    }
    #TOC nav{
        width: inherit;
        position: fixed;
        right: 20px;
        top: 100px;
        padding: 20px;
    }
    #TOC h2{
        font-family: 'Melodrama Regular', sans-serif;
    }
    #TOC ul{
        font-size: 0.9rem;
    }
</style>

<main id="TOC">
    {#if currentSection}
        <nav hidden={$isMobile}>
            <h2>On this Page</h2>
            <ul>
                {#each Object.entries(currentSection.TOC ?? {}) as [key, href]}
                    <li>
                        <a class="hover:underline text-(--text-secondary) 
                                {currentHash === href ? 'underline' : ''}" 
                            href={`#${href}`}>{key.replace(/_/g, ' ')}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    {/if}
</main>

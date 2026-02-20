<script lang="ts">
    import {sections} from '$lib/index';
    import type { Section, SectionItem } from '@sierra-95/svelte-scaffold';
    import {isMobile, isTablet} from '@sierra-95/svelte-scaffold';
    //import { page } from '$app/state';
    import { page } from '$app/stores';

    $: currentPath = $page.url.pathname;
    $: currentSection = findSectionByPath(sections, currentPath);
    

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

<main hidden={$isMobile || $isTablet} id="TOC">
    {#if currentSection}
        <nav>
            <h2>On this Page</h2>
            <ul>
                {#each Object.entries(currentSection.TOC ?? {}) as [key, href]}
                    <li>
                        <a class="hover:underline text-(--text-secondary)" 
                            href={`#${href}`}>{key.replace(/_/g, ' ')}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    {/if}
</main>

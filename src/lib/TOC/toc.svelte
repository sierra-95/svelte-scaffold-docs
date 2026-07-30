<script lang="ts">
    import {browser} from '$app/environment';
    import {sections} from '$lib/index';
    import type { Section, SectionItem } from '@sierra-95/svelte-scaffold';
    import { page } from '$app/state';

    const {hidden} =$props();

    // Display the TOC content based on the current page's path
    const currentPath = $derived(page.url.pathname);
    const currentSection = $derived(findSectionByPath(sections, currentPath));

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

    // Scroll updates on the TOC
    let activeSection = $state('');

    const sectionIds = $derived(
        Object.values(currentSection?.TOC ?? {})
            .filter((id): id is string => typeof id === 'string' && id.trim().length > 0)
    );

    $effect(() => {
        if (!currentSection || !browser) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection = entry.target.id;
                    }
                });
            },
            {
                rootMargin: '-100px 0px -70% 0px'
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    });

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
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 1.2rem;
        font-family: 'Melodrama Regular', sans-serif;
    }
    #TOC ul{
        font-size: 0.9rem;
    }
</style>

<main hidden={hidden} id="TOC">
    {#if currentSection}
        <nav>
            <h2>On this Page</h2>
            <ul>
                {#each Object.entries(currentSection.TOC ?? {}) as [key, href]}
                    <li>
                        <a class="hover:underline text-(--text-secondary)" 
                            href={`#${href}`}
                            style="{activeSection === href ? 'text-decoration: underline; color: var(--ss-neutral)' : ''}"
                        >{key.replace(/_/g, ' ')}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    {/if}
</main>

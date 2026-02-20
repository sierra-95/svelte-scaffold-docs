<script lang="ts">
    import { tick } from 'svelte';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import {SearchBar, isMobile, Backdrop, Wrapper, MenuItem} from '@sierra-95/svelte-scaffold';
    import { buildSearchIndex } from './buildSearch';
    import type { SearchResult } from './buildSearch';
    
    let open = $state(false);
    let query = $state('');
    let results = $state<SearchResult[]>([]);
    let initialResults = $state<SearchResult[]>([]);
    let inputEl = $state<HTMLInputElement | null>(null);
    
    const RECENT_SEARCH_KEY = 'sierra_recent_searches';
    const MAX_RECENT = 8;   

    function toggle() {
        open = !open;
        if(open){
            initializeSearch();
            tick().then(() => {
                inputEl?.focus();
            });
        }else{
            query = '';
            results = [];
            initialResults = [];
        }
    }

    function dynamicSearch(query: string) {
        query = query.toLowerCase();
        const searchIndex = buildSearchIndex();
        return searchIndex
            .filter(item => item.keywords.includes(query))
            .slice(0, 8);
    }

    $effect(() => {
        if(browser){
            if(query.length > 0){
                results = dynamicSearch(query);
            }
        }
    });

    function initializeSearch(){
        const recentSearches = getRecentSearches();
        if (recentSearches.length > 0) {
            initialResults = recentSearches;
        } else {
            const searchIndex = buildSearchIndex();
            results = searchIndex.slice(0, 8);
        }
    }

    function getRecentSearches(): SearchResult[] {
        if (!browser) return [];
        const stored = localStorage.getItem(RECENT_SEARCH_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    function saveRecentSearch(result: SearchResult) {
        if (!browser) return;

        let recent = getRecentSearches();

        // Remove if already exists (avoid duplicates)
        recent = recent.filter(r =>
            !(r.path === result.path && r.sectionId === result.sectionId)
        );

        // Add to top
        recent.unshift(result);

        // Keep max 8
        if (recent.length > MAX_RECENT) {
            recent = recent.slice(0, MAX_RECENT);
        }

        localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify(recent));
    }
</script>

<style>
    button.searchbar-esc{
        border: 1px solid var(--input-border);
        padding: 0.5rem;
        border-radius: 5px;
        transition: border-color 0.05s;
    }
</style>

{#if $isMobile}
    <button onclick={toggle} aria-label="Search">
        <i class="fa fa-search"></i>
    </button>
{:else}
    <SearchBar width="100px" height="35px" enableHotkey onHotkey={toggle}/>
{/if}

<Backdrop bind:open>
    <Wrapper minHeight="200px">
        <div class="flex gap-2">
            <div class="flex-1"><SearchBar bind:value={query} bind:inputEl width="100%"/></div>
            <button class="searchbar-esc" onclick={toggle}>ESC</button>
        </div>
        {#if results.length > 0}
            {#each results as result}
                <MenuItem icon={result.icon} iconSize="15px" onclick={() => {
                    saveRecentSearch(result);
                    goto(result.path + (result.sectionId ? `#${result.sectionId}` : ''));
                    toggle();
                }}>{result.label}</MenuItem>
            {/each}
        {:else if query}
            <p class="mt-4 text-sm text-(--text-secondary)">No results found</p>
        {/if}
        {#if initialResults.length > 0}
            <p class="mt-4 text-sm text-(--text-secondary)">Recent Searches</p>
            {#each initialResults as result}
                <MenuItem icon={result.icon} iconSize="15px" onclick={() => {
                    saveRecentSearch(result);
                    goto(result.path + (result.sectionId ? `#${result.sectionId}` : ''));
                    toggle();
                }}>{result.label}</MenuItem>
            {/each} 
        {/if}
    </Wrapper>
</Backdrop>
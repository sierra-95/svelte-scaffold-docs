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
    let inputEl = $state<HTMLInputElement | null>(null);

    function toggle() {
        open = !open;
        if(open){
            const searchIndex = buildSearchIndex();
            results = searchIndex.slice(0, 8);
            tick().then(() => {
                inputEl?.focus();
            });
        }else{
            query = '';
            results = [];
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
        if(query && browser){
            results = dynamicSearch(query);
        }
    });
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
            <ul class="mt-4">
                {#each results as result}
                    <MenuItem onclick={() => {
                        goto(result.path + (result.sectionId ? `#${result.sectionId}` : ''));
                        toggle();
                    }}>{result.label}</MenuItem>
                {/each}
            </ul>
        {:else if query}
            <p class="mt-4 text-sm text-(--text-secondary)">No results found</p>
        {/if}
    </Wrapper>
</Backdrop>
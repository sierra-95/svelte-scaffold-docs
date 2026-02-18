<script lang="ts">
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import {SearchBar, isMobile, Backdrop, Wrapper, MenuItem} from '@sierra-95/svelte-scaffold';
    import { buildSearchIndex } from './buildSearch';
    import type { SearchResult } from './buildSearch';
    
    let open = $state(false);
    let query = $state('');
    let results = $state<SearchResult[]>([]);

    function toggle() {
        open = !open;
    }

    function dynamicSearch(query: string) {
        query = query.toLowerCase();
        const searchIndex = buildSearchIndex();
        return searchIndex
            .filter(item => item.keywords.includes(query))
            .slice(0, 8); // limit results
    }

    $effect(() => {
        if(query && browser){
            results = dynamicSearch(query);
        }
    });

    function onNavigate(){
        query = '';
        results = [];
        toggle();
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
    <Wrapper>
        <div class="flex gap-2">
            <div class="flex-1"><SearchBar bind:value={query} width="100%"/></div>
            <button class="searchbar-esc" onclick={toggle}>ESC</button>
        </div>
        {#if results.length > 0}
            <ul class="mt-4">
                {#each results as result}
                    <MenuItem onclick={() => {
                        goto(result.path + (result.sectionId ? `#${result.sectionId}` : ''));
                        onNavigate();
                    }}>{result.label}</MenuItem>
                {/each}
            </ul>
        {/if}
    </Wrapper>
</Backdrop>
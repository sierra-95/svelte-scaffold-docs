<script>
    import {SearchBar, isMobile, Backdrop, Wrapper} from '@sierra-95/svelte-scaffold';

    const height = '40px';
    let open = $state(false);
    function toggle() {
        open = !open;
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
        <div class="flex gap-2" style="height: {height}">
            <div class="flex-1"><SearchBar width="100%"/></div>
            <button class="searchbar-esc" onclick={toggle}>ESC</button>
        </div>
    </Wrapper>
</Backdrop>
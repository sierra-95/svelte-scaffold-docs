<script>
    import { page } from '$app/stores';
    import { sections } from '$lib';
    import { flattenSections } from './flatten';

    const allPages = flattenSections(sections);

    $: currentPath = $page.url.pathname;

    $: currentIndex = allPages.findIndex(p => p.path === currentPath);

    $: previous = currentIndex > 0 ? allPages[currentIndex - 1] : null;
    $: next = currentIndex < allPages.length - 1
        ? allPages[currentIndex + 1]
        : null;
</script>
<style>
    #sierra-navigation{
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
    }
    #sierra-navigation a{
        transition: color 0.1s ease-in;
    }
    #sierra-navigation a:hover{
        color: var(--primary-bg);
    }
    #sierra-navigation h3{
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    #sierra-navigation .text-previous{
        text-align: end;
    }
</style>
<main id="sierra-navigation">

    {#if previous}
        <div>
            <h3 class="text-previous">Previous</h3>
            <a href={previous.path}>
                {previous.trail.join(' → ')}
            </a>
        </div>
    {/if}

    {#if next}
        <div>
            <h3>Next</h3>
            <a href={next.path}>
                {next.trail.join(' → ')}
            </a>
        </div>
    {/if}

</main>
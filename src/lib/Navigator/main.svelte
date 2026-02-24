<script>
    import { browser } from '$app/environment';
    import { page } from '$app/state';
    import { sections, routes } from '$lib';
    import { flattenSections } from './flatten';

    const prefix = "src/routes";

    let pageURL = $state('');
    let currentPath = $state();
    let previous = $state();
    let next = $state();
    let lastUpdated = $state('');

    const allPages = flattenSections(sections);
    $effect(() => {
        if(browser){
            if(page.url.pathname){
                currentPath = page.url.pathname
                pageURL = prefix + currentPath + '/%2Bpage.svelte';
                load();
            }
            const currentIndex = allPages.findIndex(p => p.path === currentPath);
            previous = currentIndex > 0 ? allPages[currentIndex - 1] : null;
            next = currentIndex < allPages.length - 1
                ? allPages[currentIndex + 1]
                : null;
        }
    });

    async function load() {
        const endpoint = `https://api.github.com/repos/sierra-95/svelte-scaffold-docs/commits?path=${pageURL}&per_page=1`;
        try {
            const res = await fetch(endpoint, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!res.ok) {
                console.error('GitHub API request failed:', res.status, res.statusText);
                lastUpdated = '-';
                return;
            }
            const data = await res.json();
            lastUpdated = data?.[0]?.commit?.author?.date ?? '-';

        } catch (err) {
            console.error('Error fetching last updated date:', err);
        }
    }


</script>
<style>
    #sierra-navigation{
        display: flex;
        justify-content: space-between;
    }
    #sierra-navigation a, #sierra-github-page-edit a{
        transition: color 0.1s ease-in;
    }
    #sierra-navigation a:hover, #sierra-github-page-edit a:hover{
        color: var(--primary-bg);
    }
    #sierra-navigation h3{
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    @media (max-width: 768px){
        #sierra-navigation{
            flex-direction: column;
            gap: 1rem;
        }
        #sierra-navigation .text-next{
            text-align: end;
        }
    }
</style>

<section class="space-y-4" style="margin-top: 3rem;">
    <!-- <div><Hr/></div> -->
    <div id="sierra-github-page-edit" class="flex justify-between text-(--text-secondary) text-sm">
        <a href={routes.system.resources.github + pageURL} target="_blank" rel="noreferrer" ><i class="fa-solid fa-pen mr-2"></i>Edit Page</a>
        <h3>Last Updated:
            {lastUpdated? new Date(lastUpdated).toLocaleDateString(): '-'}
        </h3>
    </div>
    <div id="sierra-navigation">
        {#if previous}
            <div class="text-previous">
                <h3>Previous</h3>
                <a href={previous.path}>
                    {previous.trail.join(' → ')}
                </a>
            </div>
        {/if}

        {#if next}
            <div class="text-next">
                <h3>Next</h3>
                <a href={next.path}>
                    {next.trail.join(' → ')}
                </a>
            </div>
        {/if}
    </div>
</section>
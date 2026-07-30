<script>
    import { browser } from '$app/environment';
    import { page } from '$app/state';
    import { sections } from '$lib';
    import { flattenSections } from './flatten';
    import {Hr} from '@sierra-95/svelte-scaffold';

    let previous = $state();
    let next = $state();
    let lastUpdated = $state('');

    const allPages = flattenSections(sections);

    const githubRepo = {
        owner: 'sierra-95',
        repo: 'svelte-scaffold-docs',
        branch: 'main'
    };

    const prefix = '/src/routes';

    /**
     * @param {string} path
     * @returns {string}
     */
    function getGithubFilePath(path) {
        return `${prefix}${path}/+page.svelte`;
    }
    /**
     * @param {string} path
     */
    function getGithubUrl(path) {
        return `https://github.com/${githubRepo.owner}/${githubRepo.repo}/blob/${githubRepo.branch}${path}`;
    }

    const currentPath = $derived(page.url.pathname)
    const filePath = $derived(getGithubFilePath(currentPath))
    const githubUrl = $derived(getGithubUrl(filePath))
    $effect(() => {
        if(browser){
            if(currentPath) load();
            const currentIndex = allPages.findIndex(p => p.path === currentPath);
            previous = currentIndex > 0 ? allPages[currentIndex - 1] : null;
            next = currentIndex < allPages.length - 1
                ? allPages[currentIndex + 1]
                : null;
        }
    });

    async function load() {
        const endpoint = `https://api.github.com/repos/${githubRepo.owner}/${githubRepo.repo}/commits?path=${filePath}&per_page=1`;
        try {
            const res = await fetch(endpoint, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!res.ok) {
                //console.error('GitHub API request failed:', res.status, res.statusText);
                lastUpdated = '-';
                return;
            }
            const data = await res.json();
            lastUpdated = data?.[0]?.commit?.author?.date ?? '-';

        } catch (err) {
            //console.error('Error fetching last updated date:', err);
            lastUpdated = '-';
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
    #sierra-github-page-edit a:hover{
        color: var(--ss-neutral);
    }
    #sierra-navigation a{
        color: var(--ss-neutral);
    }
    #sierra-navigation a:hover{
        text-decoration: underline;
    }
    #sierra-navigation h3{
        font-size: 0.9rem;
        color: var(--ss-d-s);
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

<section class="space-y-4" style="margin-top: 4rem;">
    <div id="sierra-github-page-edit" class="flex justify-between text-sm">
        <a href={githubUrl} target="_blank" rel="noreferrer" ><i class="fa-solid fa-pen mr-2"></i>Edit Page</a>
        <h3>Last Updated:
            {lastUpdated? new Date(lastUpdated).toLocaleDateString(): '-'}
        </h3>
    </div>
    <div><Hr color="var(--ss-border)"/></div>
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
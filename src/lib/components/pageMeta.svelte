<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/state';
    import {Hr} from '@sierra-95/svelte-scaffold';

    let lastUpdated = $state('');
    
    const githubRepo = {
        owner: 'sierra-95',
        repo: 'svelte-scaffold-docs',
        branch: 'main'
    };

    const prefix = '/src/routes';

    function getGithubFilePath(path: string) {
        return `${prefix}${path}/%2Bpage.svelte`;
    }

    function getGithubUrl(path: string) {
        return `https://github.com/${githubRepo.owner}/${githubRepo.repo}/blob/${githubRepo.branch}${path}`;
    }

    const currentPath = $derived(page.url.pathname)
    const filePath = $derived(getGithubFilePath(currentPath))
    const githubUrl = $derived(getGithubUrl(filePath))

    const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week
    const CACHE_KEY = 'sierra_page_meta';

    $effect(() => {
        if(browser && currentPath) load();
    });

    async function load() {
        const cache = JSON.parse(
            localStorage.getItem(CACHE_KEY) || '{}'
        );

        const cached = cache[filePath];

        if (cached && Date.now() - cached.cachedAt < CACHE_DURATION) {
            lastUpdated = cached.date;
            return;
        }
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
            const date = data?.[0]?.commit?.author?.date ?? '-';

            lastUpdated = date;
            cache[filePath] = {
                date,
                cachedAt: Date.now()
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        } catch (err) {
            //console.error('Error fetching last updated date:', err);
            lastUpdated = cached?.date ?? '-';
        }
    }


</script>

<main class="space-y-4" style="margin-top: 4rem;">
    <div class="flex justify-between text-sm">
        <a href={githubUrl} target="_blank" rel="noreferrer" ><i class="fa-solid fa-pen mr-2"></i>Edit Page</a>
        <h3>Last Updated:
            <span class="text-(--ss-neutral)">{lastUpdated? new Date(lastUpdated).toLocaleDateString(): '-'}</span>
        </h3>
    </div>
    <Hr/>
</main>
<script lang="ts">
    import { page } from '$app/state';
    import { ButtonFlip } from '@sierra-95/svelte-scaffold';
    import { routes } from '$lib/assets/company';
</script>

<title>{page.status}</title>
<main class="flex flex-col items-center space-y-4">
    <i class="fa-regular fa-face-frown" style="font-size: 100px;"></i>
    {#if page.status === 404}
            <h1>404 not found</h1>
            <h3>The page you’re looking for might have been moved or deleted.</h3>
    {:else}
            <h1>500 Internal Server Error</h1>
            <h3>Something went wrong</h3>
    {/if}
    <ButtonFlip
        onclick={() => window.location.href = routes.overview.path}
        front="Go Home" back="Click Here"
    />
</main>
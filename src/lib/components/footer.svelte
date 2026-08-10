<script>
    import { resources} from "$lib/assets/company";
    const year = new Date().getFullYear();

    const socialLinks = [
        { label: 'GitHub', href: resources.social.github, icon: 'fa-github' },
        { label: 'Portfolio', href: resources.social.portfolio, icon: 'fa-globe' },
        { label: 'Instagram', href: resources.social.instagram, icon: 'fa-instagram' },
        { label: 'LinkedIn', href: resources.social.linkedin, icon: 'fa-linkedin' }
    ];

    const resourceLinks = [
        { label: 'npm', href: resources.package.npm },
        { label: 'Issues', href: resources.package.github_issues },
        { label: 'Repository', href: resources.package.github },
        { label: 'Backend API', href: resources.package.backend }
    ];
</script>

<style>
    .footer-section h3 {
        text-decoration: underline;
        margin-bottom: 0.75rem;
        font-size: 0.8rem;
    }
    .footer-section a{
        font-size: 0.9rem;
    }
    .footer-section a:hover {
        color: var(--ss-neutral)
    }
    .footer-section i {
        margin-right: 0.5rem;
    }
</style>

<main class="space-y-4" style="margin-top: 5rem;">
    <section class="flex justify-evenly flex-wrap gap-5">
        <div class="footer-section">
            <h3>Social</h3>
            <ul class="space-y-1">
                {#each socialLinks as link}
                    <li>
                        <a href={link.href} target="_blank" rel="noopener">
                            <i class={`fa ${link.icon}`}></i> {link.label}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        <div class="footer-section">
            <h3>Resources</h3>
            <ul class="space-y-1">
                {#each resourceLinks as link}
                    <li>
                        <a href={link.href} target="_blank" rel="noopener">
                            {link.label}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </section>
    <h3 class="text-center text-sm">© {year} @sierra-95/svelte-scaffold. All rights reserved.</h3>
</main>
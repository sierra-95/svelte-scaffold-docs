<script>
    const year = new Date().getFullYear();
</script>
<style>
    #svelte-scaffold-footer {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 1rem;
    }

    .footer-section h3 {
        margin-bottom: 0.75rem;
        font-size: 0.8rem;
        letter-spacing: 0.05em;
        color: var(--text-secondary);

    }

    .footer-section ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .footer-section a{
        font-size: 0.9rem;
    }
    .footer-section a:hover {
        color: var(--primary-bg)
    }
    .footer-section i {
        margin-right: 0.5rem;
    }
    @media (max-width: 600px) {
        #svelte-scaffold-footer {
            justify-content: flex-start;
        }
    }
</style>

<main class="space-y-4" style="margin-top: 2rem; border-radius: 5px; padding: 3rem 0rem">
    <div id="svelte-scaffold-footer">
        <!-- Social -->
        <section class="footer-section">
        <h3>Social</h3>
        <ul>
            <li><a href="https://github.com/sierra-95" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>Profile</a></li>
            <li><a href="https://www.instagram.com/michaelmachohi/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/michael-machohi" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></li>
        </ul>
        </section>

        <!-- Resources -->
        <section class="footer-section">
        <h3>Resources</h3>
        <ul>
            <li><a href="https://github.com/sierra-95/svelte-scaffold-docs" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="https://michaelmachohi.com" target="_blank" rel="noopener">Portfolio</a></li>
        </ul>
        </section>

        <!-- Support -->
        <section class="footer-section">
        <h3>Support</h3>
        <ul>
            <li><a href="https://github.com/sierra-95/svelte-scaffold-docs/issues" target="_blank" rel="noopener">Issues</a></li>
            <li><a href="/support">Help Center</a></li>
            <li><a href="/status">System Status</a></li>
        </ul>
        </section>

        <!-- Legal -->
        <section class="footer-section">
        <h3>Legal</h3>
        <ul>
            <li><a href="/policies/terms">Terms of Use</a></li>
            <li><a href="/policies/privacy">Privacy Policy</a></li>
            <li><a href="/policies/cookies">Cookie Preference</a></li>
        </ul>
        </section>
    </div>
    <h3 class="text-center text-(--text-secondary) text-sm">© {year} @sierra-95/svelte-scaffold. All rights reserved.</h3>
</main>
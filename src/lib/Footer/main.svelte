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
        margin-top: 3rem;
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
</style>

<main class="space-y-4">
    <div id="svelte-scaffold-footer">

        <!-- Social -->
        <section class="footer-section">
        <h3>Social</h3>
        <ul>
            <li><a href="https://x.com" target="_blank" rel="noopener">X</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
        </section>

        <!-- Resources -->
        <section class="footer-section">
        <h3>Resources</h3>
        <ul>
            <li><a href="https://github.com">GitHub</a></li>
            <li><a href="/portfolio">Donate <i class="fa-solid fa-heart text-red-500"></i></a></li>
            <li><a href="/portfolio">Portfolio</a></li>
        </ul>
        </section>

        <!-- Support -->
        <section class="footer-section">
        <h3>Support</h3>
        <ul>
            <li><a href="/issues">Issues</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/status">System Status</a></li>
        </ul>
        </section>

        <!-- Legal -->
        <section class="footer-section">
        <h3>Legal</h3>
        <ul>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="">Cookie Preference</a></li>
        </ul>
        </section>
    </div>
    <h3 class="text-center text-(--text-secondary) text-sm">© {year} Svelte Scaffold. All rights reserved.</h3>
</main>
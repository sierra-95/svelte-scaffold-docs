<script>
    import {routes, sectioning} from '$lib';
</script>

<section id={sectioning.modules.layout.overview} class="space-y-4">
	<title>Layout overview</title>
	<h1>Layout</h1>
	<h3>The layout menu is a portal scaffold.
        It’s designed to save developers time on setup so they can focus on real development work.
    </h3>
    <!-- <img src="https://files.michaelmachohi.com/svelte-ui/images/layout-example.png" alt="Dark Theme Layout" /> -->
    <iframe src="https://svelte.michaelmachohi.com/" width="100%" height="500" class="rounded-sm" title="Layout"></iframe>
    <h2>Why Use the Layout?</h2>
    <ul class="list-disc list-inside space-y-2">
        <li>Prebuilt responsive layout with header, side menu, and content area.</li>
        <li>Customizable header with logo, title, and easy-to-integrate SvelteKit routing.</li>
        <li>In-built <a href={routes.stores.theme_stores} class="note">theme</a> support for light and dark modes.</li>
        <li>It includes certain components by default, hence you don’t need to import them manually.</li>
        <div class="flex flex-wrap gap-4">
            <a href={routes.core.children.alerts.modal} class="note">Modal</a>
            <a href={routes.core.children.alerts.toast} class="note">Toast</a>
            <a href={routes.modules.file_picker.children.getting_started} class="note">File Picker</a>
        </div>
    </ul>
</section>
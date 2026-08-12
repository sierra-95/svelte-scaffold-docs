<script>
    import {routes} from '$lib/assets/company';
</script>


<title>Overview</title>
<section class="space-y-4">
	<h1 class="sierra-docs-h1">Layout</h1>
	<h3>The layout menu is a portal scaffold.
        It’s designed to save developers time on setup so they can focus on real development work.
        If you were looking for something simpler, check out the <a href={routes.core.components.children.menus.path + '#'+  routes.core.components.children.menus.ids.content_switcher} class="note">Content Switcher</a>
    </h3>

    <ol class="sierra-docs-ol space-y-4">
        <section>
            <li>Why Use the Layout?</li>
            <ul class="list-disc list-inside space-y-2">
                <li>Prebuilt responsive layout with header, side menu, and content area.</li>
                <li>Customizable header with logo, title, and easy-to-integrate SvelteKit routing.</li>
                <li>In-built <a href={routes.stores.path + '#'+  routes.stores.ids.theme_store} class="note">theme</a> support for light and dark modes.</li>
                <li>In-built Global Search for route search and navigation.</li>
                <li>Supports RBAC (Role-Based Access Control)</li>
                <li>
                    It includes certain components by default, hence you don’t need to import them manually.
                    <ul class="list-disc list-inside space-y-2 ml-5">
                        <li><a href={routes.core.components.children.modal.path} class="note">Modal</a></li>
                        <li><a href={routes.core.features.children.toast_manager.path} class="note">Toast Manager</a></li>
                        <li><a href={routes.modules.file_picker.base} class="note">File Picker</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </ol>
</section>
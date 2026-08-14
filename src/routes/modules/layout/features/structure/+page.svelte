<script>
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
</script>

<title>Structure Features</title>

<main class="space-y-4">
    <h1 class="sierra-docs-h1">Structure Features</h1>
    <ol class="sierra-docs-ol"> 
        <section id={routes.modules.layout.children.features.children.structure.ids.header_options} data-title="Header Options" class="space-y-4 mb-10">
            <li>Header Options</li>
            <h2 class="sierra-docs-h2">1. Header Content</h2>
            <h3>The header can carry much more content, including searchbars, theme switchers, and more.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {ButtonTheme, SearchBar} from '@sierra-95/svelte-scaffold'

                    let { children } = $props();

                    onMount(()=>{
                        layoutStore.update(store => {
                            store.header = {
                                ...store.header,
                                store.contentCenter = headerCenterContent;
                                store.contentRight = headerRightContent;
                            };
                            return store;
                        });
                    })
                <\/script>

                {#snippet headerCenterContent()}
                    <SearchBar/>
                {/snippet}

                {#snippet headerRightContent()}
                    <ButtonTheme />
                {/snippet}
            `}/>
            <h2 class="sierra-docs-h2">2. Header Dropdown</h2>
            <h3>Usage of this feature is upto the developer</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    let { children } = $props();

                    onMount(()=>{
                        layoutStore.update(store => {
                            store.dropdown = {
                                ...store.dropdown,
                                activate: true,
                                content: dropdownContent
                            };
                            return store;
                        });
                    })
                <\/script>

                {#snippet dropdownContent()}
	                <div class="w-80">
                        <h2>Dropdown Content</h2>
                    </div>
                {/snippet}
            `}/>
        </section>

        <section id={routes.modules.layout.children.features.children.structure.ids.tree_menu}  data-title="Tree Menu" class="space-y-4 mb-10">
            <li>Tree Menu</li>
            <p>The <strong>sections</strong> file defines the structure of the menu using sections and nodes. Each node can represent a page and can contain its own child nodes.</p> 
            <p>Nodes can be nested to any depth, allowing you to build complex menu structures without being limited to a fixed number of child levels. The menu traverses this tree structure to display and manage each node accordingly.</p>
            <h3>View @Sierra-95/svelte-scaffold sections and routes file <a href={routes.modules.layout.children.features.children.scaffold_sections_file.path} class="note">here</a></h3>
        </section>
    </ol>
</main>
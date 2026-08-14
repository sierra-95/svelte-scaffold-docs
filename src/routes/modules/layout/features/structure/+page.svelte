<script>
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
</script>

<title>Features</title>

<main class="space-y-4">
    <h1 class="sierra-docs-h1">Features</h1>
    <ol class="sierra-docs-ol"> 
        <section data-title="Flexible Header" class="space-y-4 mb-10">
            <li>Flexible Header</li>
            <h3>The header can carry much more content, including searchbars, theme switchers, and more.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {ButtonTheme, SearchBar} from '@sierra-95/svelte-scaffold'

                    let { children } = $props();

                    onMount(()=>{
                        layoutStore.update(store => {
                            store.headerCenterContent = headerCenterContent;
                            store.headerRightContent = headerRightContent;
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
        </section>

        <section  data-title="Header Dropdown" class="space-y-4 mb-10">
            <li>Header Dropdown</li>
            <h3>Usage of this feature is upto the developer</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    let { children } = $props();

                    onMount(()=>{
                        layoutStore.update(store => {
                            store.dropdown = true;
                            store.dropdownContent = dropdownContent;
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

        <section  data-title="Tree Menu" class="space-y-4 mb-10">
            <li>Tree Menu</li>
            <h3>
                The menu can include submenus, allowing multiple items to be grouped under the same parent path.
            </h3>
            <h3>Note the following</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>All parents must have a unique id</li>
                <li>Parent Paths must be unique</li>
            </ul>
            <h3 class="font-bold">Example 1</h3>
            <!-- <h3>View @Sierra-95/svelte-scaffold sections file <a href={routes.modules.layout.children.example} class="note">here</a></h3> -->
            <h3 class="font-bold">Example 2</h3>
            <RenderCode
                lang="javascript"
                code={`
                export const sections = [
                    //Independent routes( Don't label if it's an independent route)
                    {
                        label: '',
                        items: [
                            { path: '/random', label: 'Random',  icon: 'fa fa-random' }
                        ]
                    },
                    //Categorized routes
                    {
                        label: 'Random Category',
                        items: [
                            { path: '/random', label: 'Random',  icon: 'fa fa-random' },
                            { path: '/random2', label: 'Random2',  icon: 'fa fa-random' }
                        ]
                    },
                    //Categorized Parents, with children routes
                    {
                        label: 'Core',
                        items: [
                            {
                                id: crypto.randomUUID(),
                                path: '/components',
                                label: 'Components',
                                icon: 'fa fa-cubes',
                                children:[
                                    { 
                                        path: '/components/buttons', 
                                        label: 'Buttons',
                                    },
                                    { 
                                        path: '/components/calender', 
                                        label: 'Calender',
                                    },
                                ],
                            },
                            {
                                id: crypto.randomUUID(),
                                path: '/features',
                                label: 'features',
                                icon: 'fa fa-features',
                                children:[
                                    { 
                                        path: '/features/search', 
                                        label: 'Global Search',
                                    },
                                ],
                            }
                        ]
                    }
                `}
            />
        </section>
    </ol>
</main>
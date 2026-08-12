<script>
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
</script>


<title>Getting Started</title>
<main class="space-y-6">
    <h1 class="sierra-docs-h1">Getting Started</h1>
    <ol class="sierra-docs-ol space-y-4"> 

        <section id={routes.modules.layout.children.getting_started.ids.defination} data-title="Defining a Sections file" class="space-y-4">
            <li>Define a Sections file (Heart of Layout)</li>
            <h3>The sections file is the core of Layout. It contains all information about menu structure, items to hide and RBAC implementation</h3>
            <h3>See the simplified example below:</h3>
            <ul class="list-decimal list-inside space-y-2">
                <li>Labels are used to classify routes that fall under a category. Leave empty if a route is independent</li>
                <li>A <strong>hr</strong> is automatically added after category name if label is included.</li>
            </ul>
            <RenderCode
                lang="javascript"
                code={`
                const routes = {
                    random: '/random',
                    overview: '/overview',
                    installation: '/installation',
                };

                export const sections = [
                    //Independent route( Don't label if it's an independent route)
                    {
                        label: '',
                        items: [
                            { path: routes.random, label: 'Random',  icon: 'fa fa-random' }
                        ]
                    },
                    //Categorized routes
                    {
                        label: 'Getting Started',
                        items: [
                            { 
                                path: routes.overview, 
                                label: 'Overview', 
                                icon: 'fa fa-info',
                            },
                            { 
                                path: routes.installation,
                                label: 'Installation', 
                                icon: 'fa fa-cogs',
                            }
                        ]
                    },
                ];

            `}/>
        </section>

        <section id={routes.modules.layout.children.getting_started.ids.importing} data-title="Importing the Layout component" class="space-y-4">
            <li>Import Layout component</li>
            <h3>Import the sections file and layout component in a <strong>+layout.svelte</strong> file.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {Layout, layoutStore} from '@sierra-95/svelte-scaffold'
                    import {sections} from './sections.js';
                    
                    let { children } = $props();

                    onMount(()=>{
                        layoutStore.update(store => {
                            store.sections = sections;
                            store.headerTitle = "Brand Name";
                            store.headerLink = '/';
                            store.headerImage = "https://example.com/logo.ico";
                            store.headerImageSize = '30px';
                            return store; 
                        });
                    })
                <\/script>
                <Layout>{@render children()}</Layout>

            `}/>
            <h3>And that's it!</h3>
        </section>
    </ol>
</main>
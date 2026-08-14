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
            <h3>
                A sections file defines the structure and hierarchy of Layout.
                It organizes pages into sections and infinitely nested nodes.
                It provides the shared structure used by the menu, search, and page navigator.
            </h3>
            <h3>See the simplified example below:</h3>
            <RenderCode
                lang="javascript"
                code={`
                import type {Section} from '@sierra-95/svelte-scaffold';

                export const sections: Section[] = [
                    {
                        label: 'Getting Started',
                        nodes: [
                            {
                                label: 'Overview',
                                path: '/overview',
                                icon: 'fa-solid fa-magnifying-glass',
                            },
                            {
                                label: 'Installation',
                                path: '/installation',
                                icon: 'fa-solid fa-angles-down',
                            },
                        ],
                    },
                ]

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
                        layoutStore.update(store =>{
                            store.header = {
                                ...store.header,
                                title: 'your app title',
                                link: '/', //redirect to (where) when logo is clicked
                                src: 'https://your-logo.png',
                            }
                            store.sections = sections;
                            return store;
                        })
                    })
                <\/script>
                <Layout>{@render children()}</Layout>

            `}/>
            <h3>And that's it!</h3>
        </section>
    </ol>
</main>
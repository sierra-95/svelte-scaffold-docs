<script>
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
</script>

<title>Global features</title>

<main class="space-y-4">
    <h1 class="sierra-docs-h1">Global features</h1>
    <ol class="sierra-docs-ol"> 

        <section id={routes.modules.layout.children.features.children.global.ids.theme} data-title="Themes" class="space-y-4">
            <li>Theme</li>
            <h3>The layout currently supports only light and dark themes. The theme preference is stored in local storage, so it persists across sessions.</h3>
            <h3>You can either manually manage the
                <a class="note" href={routes.stores.path + '#' + routes.stores.ids.theme_store}>Theme store</a> 
                or import the 
                <a class="note" href={routes.core.components.children.buttons.path + '#' + routes.core.components.children.buttons.ids.theme_button}>Theme button</a>
            </h3>
        </section>

        <section id={routes.modules.layout.children.features.children.global.ids.toc} data-title="Table of Contents" class="space-y-4">
            <li>TOC (Table of Contents)</li>
            <h3>The Table of Contents automatically detects sections within the current page and provides quick navigation between them. It highlights the section currently in view as the user scrolls through the page.</h3>
            <h3>It is active by default, but only appears when a page contains a <code>main</code> element with <code>section</code> elements that have <code>id</code> and <code>data-title</code> attributes.</h3>
            <RenderCode
                lang="svelte"
                code={`

                <main>
                    <section id="section1" data-title="Section 1">
                        <h2>Section 1</h2>
                        <p>Content for Section 1...</p>
                    </section>
                </main>
            `}/>
            <h3>You can add extra information below the TOC using the <code>$layoutStore</code></h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {layoutStore} from '@sierra-95/svelte-scaffold'
                
                    onMount(()=>{
                        layoutStore.update(store => {
                            store.TOC = {
                                ...store.TOC,
                                content: TOCContent
                            }
                            return store;
                        });
                    })
                <\/script>

                {#snippet TOCContent()}
                    <div style="margin-top: 1rem">
                        <h3>Guest Id:
                            <em class="text-sm text-(--ss-success)">{$fileInputConfig.user_id}</em>
                        </h3>
                    </div>
                {/snippet}
            `}/>
        </section>

        <section id={routes.modules.layout.children.features.children.global.ids.global_search} data-title="Global Search" class="space-y-4">
            <li>Global Search</li>
            <h3>Global search allows users to quickly search across the entire application, making it easy to find content without navigating through multiple pages or sections. It can be accessed from anywhere in the app and respects configured RBAC rules.</h3>
            <h3>Press <code>ctrl + K</code>, or click the search bar on the header to get the interface.</h3>
            <h3>For Global Search to work, you need to define a <strong>routes</strong> file. Global Search reads from both the sections and routes files to build and populate its search results.</h3>
            <RenderCode
                lang="ts"
                code={`
                import type {basicPage} from '@sierra-95/svelte-scaffold';

                export const routes = {
                    overview: {
                        path: '/',
                    } as basicPage,

                    installation: {
                        path: '/installation',
                        ids: { //section[ids] in the page. Ignore if you dont use section tags in your page.
                            installing: 'installing',
                            scaffold_icons: 'scaffold-icons',
                        }
                    } as basicPage,
                }
            `}/>
            <h3>Each route segment should be of type <strong>basicPage</strong>. As long as this is respected, you can nest as many child segments as needed.</h3>
            <RenderCode
                lang="ts"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {layoutStore} from '@sierra-95/svelte-scaffold'
                    import {routes} from '$lib/assets/routes';

                    onMount(()=>{
		                layoutStore.update(store =>{
                            store.routes = routes;
                            return store;
                        });
                    })
                <\/script>
            `}/>
        </section>

        <section id={routes.modules.layout.children.features.children.global.ids.navigator} data-title="Navigator" class="space-y-4">
            <li>Navigator</li>
            <h3>The Navigator provides Previous and Next navigation between pages defined in the sections tree. It supports infinitely nested pages and automatically respects configured RBAC rules.</h3>
           <h3>This feature is not included with Layout by default, so you need to import it separately.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {Navigator} from '@sierra-95/svelte-scaffold'
                </script>

                <Navigator/>
            `}/>
        </section>

        <section id={routes.modules.layout.children.features.children.global.ids.rbac} data-title="Role-Based Access Control (RBAC)" class="space-y-4 mb-10">
            <li>RBAC</li>

            <h3>The layout supports role-based access control (RBAC) to restrict menu items, Navigator and Global Search based on user roles. Please note that it doesn't prevent the user from manually typing forbidden routes in the URL, so it's recommended to implement additional routes security measures in your application.</h3>
            <ul>
                <li>Define your application's <code>ROLE_LEVELS</code>. Role levels are incremental, with higher levels having more permissions.
                </li>
                <li>Assign roles to users within your application's authentication system.
                </li>
            </ul>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {layoutStore} from '@sierra-95/svelte-scaffold'
                
                    onMount(()=>{
                        layoutStore.update(store => {
                            store.userRole = 'driver';
                            store.ROLE_LEVELS={
                                user: 1,
                                driver: 2,
                                admin: 3,
                                superadmin: 4
                            }
                            return store;
                        });
                    })
                <\/script>
            `}/>
            <ul>
                <li>The sections file allows you to specify which categories of paths can be accessed by users with specific roles.
                </li>
            </ul>
                <RenderCode
                lang="typescript"
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
                                role: 'admin', // only admins (3) and above can access this route
                            },
                        ],
                    },
                ]
                `}
            />
        </section>
    </ol>
</main>
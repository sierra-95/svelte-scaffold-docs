<script>
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
</script>

<title>Features</title>

<main class="space-y-4">
    <h1 class="sierra-docs-h1">Features</h1>
    <ol class="sierra-docs-ol"> 
        <section  data-title="Role-Based Access Control (RBAC)" class="space-y-4 mb-10">
            <li>RBAC</li>

            <h3>The layout supports role-based access control (RBAC) to restrict menu items and Global Search based on user roles. Please note that it doesn't prevent the user from manually typing forbidden routes in the URL, so it's recommended to implement additional routes security measures in your application.</h3>
            <ul>
                <li>Define your application's <code>ROLE_LEVELS</code>. Role levels are incremental, with higher levels having more permissions.
                </li>
                <li>Assign roles to users within your application's authentication system.
                </li>
            </ul>
            <RenderCode
                lang="js"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {Layout, layoutStore} from '@sierra-95/svelte-scaffold'
                    import {sections} from './sections.js';
                    
                    let { children } = $props();

                    layoutStore.update(store =>{
                        store.userRole = user.role; //from API or JWT response
                        store.ROLE_LEVELS ={
                            'user': 1,
                            'admin': 2,
                            'superadmin': 3,
                        }
                        return store;
                    });
                <\/script>
                <Layout>{@render children()}</Layout>
            `}/>
            <ul>
                <li>The sections file allows you to specify which categories of paths can be accessed by users with specific roles.
                </li>
            </ul>
                <RenderCode
                lang="javascript"
                code={`
                export const sections = [
                    //Independent routes( Don't label if it's an independent route)
                    {
                        label: '',
                        role: 'user', //only users with role level 1 and above can see this item
                        items: [
                            { path: '/random', label: 'Random',  icon: 'fa fa-random' }
                        ]
                    },
                    //Categorized routes
                    {
                        label: 'Random Category',
                        role: 'admin', //only users with role level 2 and above can see this category and its items
                        items: [
                            { path: '/random', label: 'Random',  icon: 'fa fa-random' },
                            { path: '/random2', label: 'Random2',  icon: 'fa fa-random' }
                        ]
                    }
                `}
            />
        </section>
    </ol>
</main>
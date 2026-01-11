<script>
    import {RenderCode, routes} from '$lib';
</script>

<main class="space-y-4">
    <title>Getting Started</title>
    <h1>Getting Started</h1>
    <h3>Define a sections file. The contents will be mapped to the Layout.</h3>
    <ol class="list-decimal list-inside space-y-2">
        <li>Labels are used to classify routes that fall under a category. Leave empty if a route is independent</li>
        <li>A <strong>hr</strong> is automatically added after category name if label is included.</li>
    </ol>
    <RenderCode
        lang="javascript"
        code={`
        const routes = {
            home: '/home',
            profile: 'settings/profile',
            security: 'settings/security',
        };

        export const sections = [
            {
                label: '',
                items: [
                    { path: routes.home, label: 'Home',  icon: 'fa fa-home' }
                ]
            },
            {
                label: 'Settings',
                items: [
                    { 
                        path: routes.profile, 
                        label: 'Profile', 
                        icon: 'fa fa-user',
                    },
                    { 
                        path: routes.security,
                        label: 'Security', 
                        icon: 'fa fa-lock',
                    }
                ]
            },
        ];

    `}/>
    <h3>Import the sections file and layout component in a <strong>+layout.svelte</strong> file.</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {Layout} from '@sierra-95/svelte-scaffold'
            import {sections} from './sections.js';
            
            let { children } = $props();
        <\/script>
        <Layout 
            headerTitle = 'Brand Name'
            headerLink = '/'
            headerImage = 'https://example.com/logo.ico'
            headerImageSize = '35px'
            {sections}
        >{@render children()} 
        </Layout>

    `}/>
</main>
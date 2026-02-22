<script>
    import {RenderCode, routes, sectionIds} from '$lib';
</script>

<section id={sectionIds.modules.layout.usage.header} class="space-y-4 mb-10">
    <title>Usage</title>
    <h1>Usage</h1>
    <h2>Header</h2>
    <h3>The header can carry much more content, including searchbars, theme switchers, and more.</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {Layout, ButtonTheme, SearchBar} from '@sierra-95/svelte-scaffold'
            import {sections} from './sections.js';

            let { children } = $props();
        <\/script>

        {#snippet headerCenterContent()}
            <SearchBar/>
        {/snippet}

        {#snippet headerRightContent()}
            <div class="mr-4"><ButtonTheme /></div>
        {/snippet}

        <Layout 
            {sections}
            contentCenter
            headerCenterContent = {headerCenterContent}
            headerRightContent = {headerRightContent}
        >{@render children()} 
        </Layout>

    `}/>
</section>

<section id={sectionIds.modules.layout.usage.menu} class="space-y-4 mb-10">
    <h2>Menu</h2>
    <h3>
        The menu can include submenus, allowing multiple items to be grouped under the same parent path.
    </h3>
    <h3>Note the following</h3>
    <ul class="list-disc list-inside space-y-2">
        <li>All parents must have a unique id</li>
        <li>Parent Paths must be unique</li>
    </ul>
    <h2>Example 1</h2>
    <h3>View @Sierra-95/svelte-scaffold sections file <a href={routes.modules.layout.children.example} class="note">here</a></h3>
    <h2>Example 2</h2>
    <RenderCode
        lang="javascript"
        code={`
        const core = \`/core\`;
        const alerts = \`\${core}/alerts\`;
        const routes = {
            installation: '/',
            
            core: {
                base: \`\${core}\`,
                children: {
                    alerts: {
                        modal: \`\${alerts}/modal\`,
                        toast: \`\${alerts}/toast\`,
                    },
                }
            },
        }
        export const sections = [
        {
            label: '',
            items: [
                {
                    id: crypto.randomUUID(),
                    path: routes.core.base,
                    label: 'Components',
                    icon: 'fa fa-cubes',
                    children:[
                        { 
                            path: routes.core.children.alerts.modal, 
                            label: 'Modal',
                        },
                        { 
                            path: routes.core.children.alerts.toast, 
                            label: 'Toast',
                        },
                    ],
            }
        }
        `}
    />
</section>
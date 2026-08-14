<script>
    import {RenderCode} from '$lib'
    import {routes, sections} from '$lib/assets/company'
</script>

<title>Scaffold Internal</title>
<main class="space-y-4">
    <h1 class="sierra-docs-h1">@sierra-95/svelte-scaffold Internal</h1> 
    <ol class="sierra-docs-ol">  
        <section id={routes.modules.layout.children.features.children.scaffold_sections_file.ids.sections_file} data-title="Sections File" class="space-y-4">
            <li>Sections File</li>
            <h3>This is @sierra-95/svelte-scaffold Internal sections file</h3>
            <RenderCode
                lang="javascript"
                PREVIEW_LINES={20}
                code={JSON.stringify(sections, null, 2)}
            />
        </section>
        <section id={routes.modules.layout.children.features.children.scaffold_sections_file.ids.routes_file} data-title="Routes File" class="space-y-4">
            <li>Routes File</li>
            <h3>This is @sierra-95/svelte-scaffold Internal routes file</h3>
            <RenderCode
                lang="javascript"
                PREVIEW_LINES={20}
                code={JSON.stringify(routes, null, 2)}
            />
        </section>
    </ol>
</main>
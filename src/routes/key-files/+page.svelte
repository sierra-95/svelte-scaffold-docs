<script>
    import {RenderCode} from '$lib'
    import {routes, sections} from '$lib/assets/company'
    import scaffold_css from '@sierra-95/svelte-scaffold/global.css?raw';
</script>

<title>Key Files</title>
<main class="space-y-4">
    <h1 class="sierra-docs-h1">Key Files</h1> 
    <ol class="sierra-docs-ol space-y-4">          
        <section id={routes.key_files.ids.global_css} data-title="Global CSS" class="space-y-4">
            <li>Global CSS</li>
            <h3>@sierra-95/svelte-scaffold internal CSS file</h3>
            <RenderCode
                lang="css"
                PREVIEW_LINES={20}
                code={scaffold_css}
            />
        </section>
        <section id={routes.key_files.ids.sections_file} data-title="Sections File" class="space-y-4">
            <li>Sections File</li>
            <h3>Documentation sections' file</h3>
            <RenderCode
                lang="javascript"
                PREVIEW_LINES={20}
                code={JSON.stringify(sections, null, 2)}
            />
        </section>
        <section id={routes.key_files.ids.routes_file} data-title="Routes File" class="space-y-4">
            <li>Routes File</li>
            <h3>Documentation routes file</h3>
            <RenderCode
                lang="javascript"
                PREVIEW_LINES={20}
                code={JSON.stringify(routes, null, 2)}
            />
        </section>
    </ol>
</main>
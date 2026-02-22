<script>
    import {sections, RenderCode, sectionIds} from '$lib'
</script>

<section id={sectionIds.modules.layout.usage.example} class="space-y-4">
    <h1>@sierra-95/svelte-scaffold <span class="text-sm">sections file</span></h1> 
    <RenderCode
        lang="javascript"
        PREVIEW_LINES={1000}
        code={JSON.stringify(sections, null, 2)}
    />
</section>
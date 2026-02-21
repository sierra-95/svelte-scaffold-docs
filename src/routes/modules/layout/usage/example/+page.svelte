<script>
    import {sections, RenderCode} from '$lib'
</script>

<RenderCode
    lang="javascript"
    PREVIEW_LINES={1000}
    code={JSON.stringify(sections, null, 2)}
/>
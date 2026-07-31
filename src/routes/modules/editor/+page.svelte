<script>
    import { onMount } from 'svelte';
    import {Editor, editorStore} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectionIds} from '$lib';
    
    let content = {};
    onMount(()=>{
        editorStore.update(store => {
            store.enabledFeatures = ['text-formatting', 'history', 'headings', 'text-color', 'text-align', 'lists', 'images', 'links', 'youtube'];
            return store;
        });
    })

</script>

<main class="space-y-4">
    <title>Editor</title>
	<h1 class="sierra-docs-h1">Editor</h1>
    <section id={sectionIds.modules.editor.getting_started} class="space-y-4">

        <Editor bind:content/>
        <h2 class="sierra-docs-h2">Getting Started</h2>
        <h3>Import the editor and enable the features you need</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import {Editor, editorStore} from '@sierra-95/svelte-scaffold';
                let content = {};
                onMount(()=>{
                    editorStore.update(store => {
                        store.enabledFeatures = ['text-formatting', 'history', 'headings', 'text-color', 'text-align', 'lists', 'images', 'links', 'youtube'];
                        return store;
                    });
                })
            <\/script>
            <Editor bind:content/>
        `}/>
        <h3>The <code>content</code> variable can also be used to load previously saved content.</h3>
        <h3>To read content created in this editor, use <code>readOnly</code> mode</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import {Editor} from '@sierra-95/svelte-scaffold';
                export let data;
                let content = data.content; // Load previously saved content
            <\/script>
            <Editor readOnly bind:content/>
        `}/>
    </section>

    <section id={sectionIds.modules.editor.saving_content} class="space-y-4">
        <h2 class="sierra-docs-h2">Saving Content</h2>
        <h3>
            To save  content from the editor, set the <code class="note">export</code> variable to true. This will give you the content in JSON and HTML format, which can be saved in a database or used as needed.
            The content can be accessed via <code class="note">$editorStore.content</code>.
        </h3>
        <h3>If any function should run immediately after content is exported, attach it to <code class="note">$editorStore.onExport()</code></h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { enhance } from '$app/forms';
                import {editorStore, Button} from '@sierra-95/svelte-scaffold';
                
                let formElement;
                function handleExport(){
                    editorStore.update((state) => ({ ...state, export:true }))
                    if( $editorStore.content ){
                        formElement.requestSubmit();
                    }
                }
                function handleSubmit({formData, cancel}: { formData: FormData; cancel: () => void }){
                    formData.append("content", $editorStore.content);
                }
            <\/script>

            <form bind:formElement method="post" use:enhance={handleSubmit}>
                <Button onclick={handleExport}>Export</Button>
            </form>
        `}/>
    </section>

    <section id={sectionIds.modules.editor.inserting_images} class="space-y-4">
        <h2 class="sierra-docs-h2">Inserting Images</h2>
        <h3>The editor primarily uses
            <a href={routes.modules.file_picker.children.getting_started} class="note">File Picker</a>
            to handle multiple image uploads and insertions.
            An input has also been provided to key in image URLs manually.
        </h3>
        <h3>To disable file picker functionality, unlist it from $editorStore.insertImageMode array. This only leaves manual image URL insertion</h3>
        <h3>You will need to configure the editor with the appropriate API endpoints for image handling. They will be directly used by the File Picker</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { onMount } from 'svelte';
                import {editorConfig} from '@sierra-95/svelte-scaffold';
                
                onMount(()=>{
                    editorConfig.update(config => {
                        config.serverGetUrl = '/api/media/get';
                        config.serverUploadUrl = '/api/media/upload';
                        config.serverDeleteUrl = '/api/media/delete';
                        config.serverDownloadUrl = '/api/media/download';
                        return config;
                    });
                })
            <\/script>

        `}/>
    </section>
</main>
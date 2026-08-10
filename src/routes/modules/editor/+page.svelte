<script>
    import { onMount } from 'svelte';
    import {Editor, editorStore, editorConfig} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
    
    let content = {};

    onMount(()=>{
        editorConfig.update(store => {
            store.style = {
                ...store.style,
                width: {
                    max: '1024px',
                }
            }
			store.serverGetUrl = '/api/media/get';
			store.serverUploadUrl = '/api/media/upload';
			store.serverDeleteUrl = '/api/media/delete';
			store.serverDownloadUrl = '/api/media/download';
			return store;
		});

        editorStore.update(store => {
            store.enabledFeatures = ['text-formatting', 'history', 'headings', 'text-color', 'text-align', 'lists', 'images', 'links', 'youtube'];
            return store;
        });
    })

</script>

<main class="space-y-6">
    <title>Editor</title>
	<h1 class="sierra-docs-h1">Editor</h1>
    <section id={routes.modules.editor.ids.getting_started} data-title="Getting Started" class="space-y-4">

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

    <section id={routes.modules.editor.ids.saving_content} class="space-y-4">
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

    <section id={routes.modules.editor.ids.inserting_images} class="space-y-4">
        <h2 class="sierra-docs-h2">Inserting Images</h2>
        <h3>The editor primarily uses
            <a href={routes.modules.file_picker.children.overview.path} class="note">File Picker</a>
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

    <section class="space-y-4" id={routes.modules.editor.ids.supported_styles}>
        <h2 class="sierra-docs-h2">Supported styles</h2>
        <h2>Some of the supported styling options include width and width</h2>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { onMount } from 'svelte';
                import {editorConfig} from '@sierra-95/svelte-scaffold';
                
                onMount(()=>{
                    editorConfig.update(config => {
                        config.style = {
                            ...config.style,
                            width: {
                                max: '1024px',
                            },
                            boxShadow: true,
                        }
                        return config;
                    });
                })
            <\/script>

        `}/>
    </section>
</main>
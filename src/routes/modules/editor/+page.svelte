<script>
    import { onMount } from 'svelte';
    import {Editor, editorStore} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
    
    let content = {};

    onMount(()=>{
        editorStore.update(store => {
            store.style = {
                ...store.style,
                width: {
                    max: '1024px',
                }
            }
            store.enabledFeatures = ['BIU', 'undo-redo', 'headings', 'color', 'highlight', 'alignment', 'lists', 'images', 'links', 'youtube'];
            return store;
        });
    })

</script>


<title>Editor</title>
<main class="space-y-6">
	<h1 class="sierra-docs-h1">Scaffold Editor <span>I did all this for you. You’re welcome</span></h1>
    <Editor bind:content/>
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.modules.editor.ids.getting_started} data-title="Getting Started" class="space-y-4">
            <li>Getting Started</li>
            <h3>Import the editor and enable the features you need</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {Editor, editorStore} from '@sierra-95/svelte-scaffold';
                    
                    let content = {};
                    onMount(()=>{
                        editorStore.update(store => {
                            store.enabledFeatures = ['BIU', 'undo-redo', 'headings', 'color', 'highlight', 'alignment', 'lists', 'images', 'links', 'youtube'];
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
            <li>Saving Content</li>
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
            <li>Inserting Images</li>
            <h3>The editor uses
                <a href={routes.modules.file_picker.base} class="note">File Picker</a>
                to handle multiple image uploads and insertions.
                An input has also been provided to key in image URLs manually.
            </h3>
            <h3>You can control mode of insertion using <strong>$editorStore.insertImageMode</strong> array, and by default, all modes are enabled.</h3>
            <h3>See the example below.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {editorStore} from '@sierra-95/svelte-scaffold';
                    
                    onMount(()=>{
                        editorStore.update(config => {
                            config.insertImageMode = ['url'];
                            return config;
                        });
                    })
                <\/script>

            `}/>
            <h3>To use File Picker, additional configuration is required.
                <a href={routes.modules.file_picker.base} class="note">Read more</a>
            </h3>
        </section>

        <section class="space-y-4" id={routes.modules.editor.ids.supported_styles}>
            <li>Supported styles</li>
            <h2>Some of the supported styling options include width and width</h2>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {editorStore} from '@sierra-95/svelte-scaffold';
                    
                    onMount(()=>{
                        editorStore.update(config => {
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
    </ol>
</main>
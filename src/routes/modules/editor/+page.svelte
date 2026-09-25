<script>
    import { onMount } from 'svelte';
    import {Editor, editorStore, editorFeatures, editor_styles} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
    
    let content = {};

    onMount(()=>{
        editorStore.update(store => {
            store.features.enabled = ['BIU','font-family', 'undo-redo', 'blocks', 'color', 'highlight', 'alignment', 'lists','tables', 'images', 'links', 'youtube'];
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
            <p>The following features are available in the editor:</p>
            <ul class="sierra-docs-grid">
                {#each editorFeatures as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
            <h3>Import the editor and enable the features you need</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {Editor, editorStore} from '@sierra-95/svelte-scaffold';
                    
                    let content = $state({});

                    onMount(()=>{
                        editorStore.update(store => {
                            store.features.enabled = ['BIU']; //Bold, Italic, Underline
                            return store;
                        });
                    })
                <\/script>
                <Editor bind:content/>
            `}/>
        </section>

        <section id={routes.modules.editor.ids.saving_content} data-title="Saving Content" class="space-y-4">
            <li>Saving Content</li>
            <h3>To export content from the editor, set <code class="note">export.start</code> to <code class="note">true</code>. Once the export is complete, the content is available through <code class="note">$editorStore.export.content</code> in both JSON and HTML formats. You can then store it in a database or use it as needed.</h3>
            <h3>Because the editor is built with Tiptap, some presentation styles are not included in the exported HTML or JSON. These styles are also provided through <code class="note">$editorStore.export.content.styles</code>, allowing you to apply them when rendering or sending the content elsewhere.</h3>

            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {tick} from 'svelte';
                    import { enhance } from '$app/forms';
                    import {editorStore, Button} from '@sierra-95/svelte-scaffold';
                    
                    let content = $state(null);
                    let formEl = $state<HTMLFormElement | null>(null);

                    function handleSave(){
                        editorStore.update(store => {
                            store.export.onExport = async () => {
                                if ($editorStore.export.status === 'success'){
                                    content = $editorStore.export.content;
                                    await tick();
                                    formEl?.requestSubmit();
                                }
                            }
                            store.export.start = true;
                            return store;
                        });
                    }

                    function handleEnhance({formData, cancel}: { formData: FormData; cancel: () => void }){
                        //continue with the form submission
                        return async ({ update, result }: { update: any; result: any }) => {
                            await update(result);
                            if (result.type === 'failure' && result.data?.error) {
                                // Handle the error response from the server
                            }else if (result.type === 'success') {
                                // Handle the success response from the server
                                $editorStore.commands.clearContent();
                            }
                        };
                    }
                <\/script>

                <form use:enhance={handleEnhance} bind:this={formEl} method="POST">
                    <input type="hidden" name="content" value={JSON.stringify(content)} />
                    <Button onclick={handleSave}>Save</Button>
                </form>
            `}/>
        </section>

        <section id={routes.modules.editor.ids.viewing_content} data-title="Viewing Content" class="space-y-4">
            <li>Viewing Content</li>
            <h3>There are two ways to view content generated by the editor:</h3>
            <h3 class="font-bold">1. Using the editor in read-only mode</h3>
            <h3>Bind loaded content to the editor using the <code class="note">content</code> prop and enable read-only mode.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {Editor} from '@sierra-95/svelte-scaffold';
                    const {data} = $props();
                    let content = data.html_content; // Load previously saved content
                <\/script>

                <Editor readOnly bind:content/>
            `}/>
            <h3 class="font-bold">2. Rendering the html yourself</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount, onDestroy } from 'svelte';
                    import { editor_styles } from '@sierra-95/svelte-scaffold';

                    const {data} = $props();
                    const runtime = editor_styles.replaceAll('{{SCOPE}}', '.my_blog_post');
    
                    let style: HTMLStyleElement;
                    onMount(() => {
                        style = document.createElement('style');
                        style.textContent = runtime;
                        style.dataset.myBlogPost = 'true';
                        document.head.appendChild(style);
                    });

                    onDestroy(() => {
                        style?.remove();
                    });
                <\/script>

                <div class="my_blog_post">
                    {@html data.html_content}
                </div>
            `}/>
        </section>

        <section id={routes.modules.editor.ids.inserting_images} data-title="Inserting Images" class="space-y-4">
            <li>Inserting Images</li>
            <h3>The editor uses
                <a href={routes.modules.file_picker.base} class="note">File Picker</a>
                to handle multiple image uploads and insertions.
                An input has also been provided to key in image URLs manually.
            </h3>
            <h3>You can control mode of insertion using <code class="note">$editorStore.features.imageModes</code> array, and by default, all modes are enabled.</h3>
            <h3>See the example below.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {editorStore} from '@sierra-95/svelte-scaffold';
                    
                    onMount(()=>{
                        editorStore.update(config => {
                            config.features.imageModes = ['url'];
                            return config;
                        });
                    })
                <\/script>

            `}/>
            <h3>To use File Picker, additional configuration is required.
                <a href={routes.modules.file_picker.base} class="note">Read more</a>
            </h3>
        </section>

        <section class="space-y-4" id={routes.modules.editor.ids.supported_styles} data-title="Supported Styles">
            <li>Supported styles</li>
            <h2>Some of the supported styling options include width and boxShadows.</h2>
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
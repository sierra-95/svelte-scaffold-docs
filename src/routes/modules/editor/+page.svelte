<script>
    import {Editor, editorStore, User} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectionIds} from '$lib';
    
    let content = {};
    $: if($User.userId){
        const r2_key = `svelte-scaffold/${$User.userId}`;
        editorStore.update(store => {
            store.r2_key = r2_key;
            store.serverGetUrl = '/api/media/get';
            store.serverUploadUrl = '/api/media/upload';
            store.serverDeleteUrl = '/api/media/delete';
            store.serverStorageUrl = '/api/media/storage-usage';
            store.serverDownloadUrl = '/api/media/download';
            return store;
        });
    }
</script>

<section id={sectionIds.modules.editor.getting_started} class="space-y-4">
	<title>Editor</title>
	<h1>Editor</h1>
    <Editor bind:content/>
    <h2>Saving/ Extracting/ Exporting Content</h2>
    <h3>
        To save or extract content from the editor, set the <code class="note">export</code> prop to true. This will give you the content in JSON and HTML format, which can be saved in a database or used as needed.
        This can be accessed via <code class="note">$editorStore.content</code>.
    </h3>
    <h3>If any function should run immediately after content is exported, attach it to <code class="note">$editorStore.onExport()</code></h3>
    <h2>Loading Content</h2>
    <h3>
        The <code>content</code> variable can also be used to load previously saved content. 
        The JSON content is important because it preserves all styling and content from the editor, and can be saved in a database.
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import {Editor} from '@sierra-95/svelte-scaffold';
            let content = {};
		<\/script>
        <Editor bind:content/>
	`}/>
    <h2>Read only</h2>
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

<section id={sectionIds.modules.editor.inserting_images} class="space-y-4">
    <h2>Inserting Images</h2>
    <h3>The editor primarily uses
        <a href={routes.modules.file_picker.children.getting_started} class="note">File Picker</a>
        to handle multiple image uploads and insertions.
        An input has also been provided to key in image URLs manually.
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { onMount } from 'svelte';
            import {editorStore, User} from '@sierra-95/svelte-scaffold';
            
            let content = {};
            $: if($User.userId){
                const r2_key = \`svelte-scaffold/\${$User.userId}\`;
                editorStore.update(store => {
                    store.r2_key = r2_key;
                    store.serverGetUrl = '/api/media/get';
                    store.serverUploadUrl = '/api/media/upload';
                    store.serverDeleteUrl = '/api/media/delete';
                    store.serverStorageUrl = '/api/media/storage-usage';
                    return store;
                });
            }
		<\/script>

	`}/>
</section>
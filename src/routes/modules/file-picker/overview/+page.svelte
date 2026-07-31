<script lang="ts">
    import {RenderCode, routes, sectionIds} from '$lib';
    import {fileInputStore , Button} from '@sierra-95/svelte-scaffold';
    
    function open(){
        fileInputStore.update(store => { 
			store.manage = true;
            store.uploadModalOpen = true;
            return store;
		});
    }
</script>

<title>Overview</title>

<main class="space-y-4">
    <h1 class="sierra-docs-h1">File Picker</h1>
    <h3>The file picker is a cloud solution for form filling that allows users to submit uploaded files,
        update new ones and never lose them all together.
    </h3>
    <section id={sectionIds.modules.file_picker.overview} class="space-y-4">
        <h2 class="sierra-docs-h2">Why Use the File Picker?</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>
            It is convenient for both the user and the developer. The developer only handles <span class="text-(--ss-neutral)">multipart form</span> data once, in the file picker, and can then populate forms using URLs. The user can access and reuse uploaded files at any time.
            </li>
            <li>
            Standardized <code>+server</code> code, with only backend API calls left to implement
            </li>
            <li>
            User-friendly “File Explorer” interface; supports file properties and storage management
            </li>
        </ul>
    </section>
    <h3>Try It out by launching the File Picker</h3>
    <Button onclick={() => open()}>Launch File Picker</Button>
</main>
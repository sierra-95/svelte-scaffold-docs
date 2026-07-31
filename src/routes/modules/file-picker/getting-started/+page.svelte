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

<title>Getting Started</title>

<main class="space-y-4">
    <h1 class="sierra-docs-h1">File Picker</h1>
    <h3>The file picker is a cloud solution for form filling that allows users to submit uploaded files,
        update new ones and never lose them all together.
    </h3>
    <Button onclick={() => open()}>Launch File Picker</Button>
    <section id={sectionIds.modules.file_picker.getting_started} class="space-y-4">
        <h2 class="sierra-docs-h2">Why Use the File Picker?</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>
            It is convenient for both the user and the developer. The developer only handles multipart form data once, in the file picker, and can then populate forms using URLs. The user can access and reuse uploaded files at any time.
            </li>
            <li>
            Standardized <code>+server</code> code, with only backend API calls left to implement
            </li>
            <li>
            User-friendly “File Explorer” interface; supports file properties and storage management
            </li>
        </ul>
        <h2 class="mt-10 sierra-docs-h2">Setting Up File Picker</h2>
        <h3>It is Important to understand that the File Picker is heavily backend dependent. It's performance relies on the efficiency of your backend implementation.</h3>
        <h3>Place this anywhere in your app</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import {FilePicker} from '@sierra-95/svelte-scaffold';
            <\/script>
            <FilePicker />
        `}/>
        <h3>Use <code>fileInputConfig</code> to configure the File Picker endpoints</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import {onMount} from 'svelte';
                import {fileInputConfig} from '@sierra-95/svelte-scaffold';

                const user_id = 'some-unique-user-id';
                onMount(()=>{
                	fileInputConfig.update(store => {
                        store.serverGetUrl = '/api/media/get';
                        store.serverUploadUrl = '/api/media/upload';
                        store.serverDeleteUrl = '/api/media/delete';
                        store.serverDownloadUrl = '/api/media/download';
                        store.user_id = user_id;
                        return store;
                    });
                })
            <\/script>
        `}/>
        <h3>To launch the File Picker, set <code>$fileInputStore.uploadModalOpen</code> to <code>true</code></h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import {fileInputStore, Button} from '@sierra-95/svelte-scaffold';
                function open(){
                    fileInputStore.update(store => { 
                        store.manage = true;
                        store.uploadModalOpen = true;
                        return store;
                    });
                }
            <\/script>
            <Button onclick={() => open()}>Launch File Picker</Button>
        `}/>
        <Button startIcon="fa-arrow-right">Setting Up Backend</Button>
    </section>
    <section id={sectionIds.modules.file_picker.getting_started} class="space-y-4">
        <h2 class="sierra-docs-h2">Setting Up Storage</h2>
        <h3>The File Picker has a storage gauge which shows the amount of storage used and available.</h3>
        <h3>In this example, i fetch the storage information from the backend.</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import {onMount} from 'svelte';
                import {fileInputStore, fileInputConfig} from '@sierra-95/svelte-scaffold';
                
                let storage = $state<{ used_storage_bytes: number; storage_quota_bytes: number }>({
                    used_storage_bytes: 0,
                    storage_quota_bytes: 0
                });

                async function getStorageUsage() {
                    try {
                        const response = await fetch(endpoint);

                        if (!response.ok) {
                            throw new Error('Failed to fetch storage usage');
                        }

                        storage = await response.json();
                        updateFileInputConfig();

                    } catch (err) {
                        console.error('Storage usage error:', err);
                    }
                }	

                function updateFileInputConfig() {
                    fileInputConfig.update(store => {
                        store.usedBytes = storage.used_storage_bytes;
                        store.maxBytes = storage. storage_quota_bytes;
                        return store;
                    });
                }
                onMount(()=>{
                    getStorageUsage();
                    fileInputStore.update(store => {
                        store.onUpload = getStorageUsage;
                        store.onDelete = getStorageUsage;
                        return store;
                    });
                })
            <\/script>
        `}/>
    </section>
</main>
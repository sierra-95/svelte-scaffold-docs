<script lang="ts">
    import {goto} from '$app/navigation';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
    import {Button} from '@sierra-95/svelte-scaffold';
</script>

<title>Getting Started</title>

<main class="space-y-6">
    <h1 class="sierra-docs-h1">Getting Started</h1>
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.modules.file_picker.children.getting_started.ids.getting_started} data-title="Getting Started" class="space-y-4">
            <li>Getting Started</li>
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
            <h3><code>$fileInputStore.manage</code> disables Insertion mode.</h3>
            <Button onclick={() => goto(routes.modules.file_picker.children.backend.path)} startIcon="fa-arrow-right">Setting Up Backend</Button>
        </section>

        <section id={routes.modules.file_picker.children.getting_started.ids.storage} data-title="Setting Up Storage" class="space-y-4">
            <li>Setting Up Storage</li>
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
    </ol>
</main>
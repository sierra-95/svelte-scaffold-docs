<script lang="ts">
    import {filePickerSet, filePickerConfig, Button, Input} from '@sierra-95/svelte-scaffold';
    import type {MediaItem} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';

    function open(){
        filePickerSet.update(store => { 
			store.MenuItems = ['Pictures']
			store.Actions =['none']
			return store;
		});
        filePickerConfig.update(config => {
			config.modalOpen = true;
			return config;
		});
    }
    let value = $state('');
	$effect(()=>{
		if($filePickerSet.insert.length > 0){
			for (const item of $filePickerSet.insert as MediaItem[]) {
				value += item.url + ' ';
			}
			filePickerSet.update(store => {
				store.insert = [];
				return store;
			});
		}
	})    
</script>

<title>Usage</title>
<main class="space-y-6">
    <h1 class="sierra-docs-h1">File picker Usage</h1>
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.modules.file_picker.children.usage.ids.manage_mode} data-title="Manage vs Insertion Mode" class="space-y-4">
            <li>Manage vs Insertion Mode</li>
            <h3>
            By default, <code>$fileInputStore</code> is in normal mode, where <code>$fileInputStore.manage</code> is false.
            When media is clicked, a select button (tick) appears, which is used to fill forms.
            When <code>$fileInputStore.manage</code> is true, the file picker enters manage mode.
            </h3>
            <h3>
            In Insertion Mode, selected media are appended to <code>$filePickerSet.insert</code>,
            which can then be used to populate forms by extracting the required data.
            </h3>
            <Button onclick={open}>Click to test</Button>
            <Input 
                id="url-input" 
                label="File URLs" 
                placeholder="Enter file URLs"
                bind:value={value}
            />

            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {filePickerSet, filePickerConfig, Button, Input} from '@sierra-95/svelte-scaffold';
                    import type {MediaItem} from '@sierra-95/svelte-scaffold';

                    function open(){
                        filePickerSet.update(store => { 
                            store.MenuItems = ['Pictures']
                            store.Actions =['none']
                            return store;
                        });
                        filePickerConfig.update(config => {
                            config.modalOpen = true;
                            return config;
                        });
                    }
                    let value = $state('');
                    $effect(()=>{
                        if($filePickerSet.insert.length > 0){
                            for (const item of $filePickerSet.insert as MediaItem[]) {
                                value += item.url + ' ';
                            }
                            filePickerSet.update(store => {
                                store.insert = [];
                                return store;
                            });
                        }
                    }) 
                <\/script>
                <Button onclick={open}>Click to test</Button>
                <Input 
                    id="url-input" 
                    label="File URLs" 
                    placeholder="Enter file URLs"
                    bind:value={value}
                />
            `}/>
        </section>
        <section id={routes.modules.file_picker.children.usage.ids.storage} data-title="Setting Up Storage" class="space-y-4">
            <li>Setting Up Storage</li>
            <h3>The File Picker has a storage gauge which shows the amount of storage used and available.</h3>
            <h3>In this example, i fetch the storage information from the backend.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {onMount} from 'svelte';
                    import {filePickerConfig, mediaServerConfig} from '@sierra-95/svelte-scaffold';
                    
                    let storageFetched = $state(false);
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
                            updateStorage();
                        } catch (err) {
                            console.error('Storage usage error:', err);
                        }
                    }	

                    function updateStorage() {
                        mediaServerConfig.update(store => {
                            store.usedBytes = storage.used_storage_bytes;
                            store.maxBytes = storage. storage_quota_bytes;
                            return store;
                        });
                    }
                    onMount(()=>{
                        filePickerSet.update(store => {
                            store.onUpload = getStorageUsage;
                            store.onDelete = getStorageUsage;
                            return store;
                        });
                    })

                    \$effect(()=>{
                        if(!storageFetched && $mediaServerConfig.user_id){
                            getStorageUsage();
                            storageFetched = true;
                        }
                    })
                <\/script>
            `}/>
        </section>
    </ol>
</main>
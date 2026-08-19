<script lang="ts">
	import { onMount } from 'svelte';
	import {mediaServerConfig, filePickerSet} from '@sierra-95/svelte-scaffold';

	let { children } = $props();

	let storageFetched = $state(false);
	
	onMount(()=>{
		getStorageUsage();
		mediaServerConfig.update(config => ({
            ...config,
            getUrl: '/api/media/get',
            uploadUrl: '/api/media/upload',
            deleteUrl: '/api/media/delete',
            downloadUrl: '/api/media/download',
        }));

		filePickerSet.update(store => {
			store.onUpload = getStorageUsage;
			store.onDelete = getStorageUsage;
			return store;
		});
    })

	$effect(()=>{
		if(!storageFetched && $mediaServerConfig.user_id){
			getStorageUsage();
			storageFetched = true;
		}
		//console.log('Media Server Config Updated:', $mediaServerConfig);
	})

	//Storage
	let storage = $state<{ used_storage_bytes: number; storage_quota_bytes: number }>({
		used_storage_bytes: 0,
		storage_quota_bytes: 0
	});

	async function getStorageUsage() {
		try {
			const endpoint = `https://backend.michaelmachohi.com/media/storage-usage?user_id=${$mediaServerConfig.user_id}`;
			const response = await fetch(endpoint);

			if (!response.ok) {
				throw new Error('Failed to fetch storage usage');
			}

			storage = await response.json();
			//console.log('Storage usage fetched:', storage);
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

</script>

{@render children()}

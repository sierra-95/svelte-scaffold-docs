<script lang="ts">
	import { onMount } from 'svelte';
	import {fileInputConfig, fileInputStore} from '@sierra-95/svelte-scaffold';

	let { children } = $props();
	
	onMount(()=>{
		getStorageUsage();
		fileInputConfig.update(store => {
			store.serverGetUrl = '/api/media/get';
			store.serverUploadUrl = '/api/media/upload';
			store.serverDeleteUrl = '/api/media/delete';
			store.serverDownloadUrl = '/api/media/download';
			return store;
		});

		fileInputStore.update(store => {
			store.onUpload = getStorageUsage;
			store.onDelete = getStorageUsage;
			store.disabledActions = ["Delete"];
			return store;
		});
    })

	//Storage
	let storage = $state<{ used_storage_bytes: number; storage_quota_bytes: number }>({
		used_storage_bytes: 0,
		storage_quota_bytes: 0
	});

	async function getStorageUsage() {
		try {
			const endpoint = `https://backend.michaelmachohi.com/media/storage-usage?user_id=${$fileInputConfig.user_id}`;
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

</script>

{@render children()}

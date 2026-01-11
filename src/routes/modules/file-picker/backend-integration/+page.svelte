<script>
    import {RenderCode, sectioning} from '$lib';
</script>

<main class="space-y-4">
	<title>Backend Integration</title>
	<h1>Backend Integration</h1>
    <h3>
    The File Picker’s performance depends largely on your backend. Review the code snippets (components making API calls to Svelte <code>+server</code>) to help you integrate your backend.
    </h3>
    <section class="space-y-4" id={sectioning.file_picker.backend.loading_media}>
        <h2>Loading Media</h2>
        <h3>The <code>$fileInputStore.serverGetUrl</code> endpoint is used to load files <code>onMount</code>.</h3>
        <RenderCode
            lang="javascript"
            code={
                `
            async function loadMedia(){
                if (!$User.userId || !$fileInputStore.serverGetUrl) return;
                fileInputStore.update(store => ({ 
                    ...store,
                    requestReload: false
                }));
                try {
                    processing = true;
                    const params = new URLSearchParams({
                        userId: $User.userId
                    });
                    const res = await fetch(\`\${$fileInputStore.serverGetUrl}?\${params.toString()}\`);
                    const data = await res.json();
                    if (!res.ok) {
                        //console.log('Error fetching media:', data);
                        setToastMessage("error", data || "Failed to fetch media.");
                        return;
                    }
                    media = data;
                } catch (e) {
                    console.error("catch error:", e);
                    setToastMessage("error", "An error occurred while fetching media.");
                } finally {
                    processing = false;
                }
            }

            onMount(async () => {
                await loadMedia();
            });
            `}/>
        <h3>Responses are expected in the following format:</h3>
        <RenderCode
            lang="json"
            code={`
                {
                    "Audio": [
                        {
                            "id": "123e4567-e89b-12d3-a456-426614174000",
                            "user_id": "123e4567-e89b-12d3-a456-426614174000",
                            "r2_key": "string",
                            "url": "https://example.com",
                            "created_at": "string",
                            "original_name": "string",
                            "mime_type": "string",
                            "size_bytes": 11234
                        }
                    ],
                    "Documents": [],
                    "Images": [],
                    "Videos": [],
                    "Others": []
                }
        `}/>
    </section>
    <section class="space-y-4" id={sectioning.file_picker.backend.uploading_to_storage}>
        <h2>Uploading to storage</h2>
        <h3>The <code>$fileInputStore.serverUploadUrl endpoint</code> is used to upload files to your cloud. If any error occurs or specific files fail to upload, the error will be displayed using toasts.</h3>
        <RenderCode
            lang="javascript"
            code={`
                $fileInputStore.selectedFiles.forEach(file => formData.append('files', file));
                formData.append('r2_key', $fileInputStore.r2_key);
                formData.append('userid', $User.userId);

                //POST body to $fileInputStore.serverUploadUrl
                const data = await res.json();
                if (!res.ok) {
                    setToastMessage('error', data || 'Upload failed' );
                    return;
                }
                data.forEach((item: { original_name: string; code: number; }) => {
                    if (item.code === 500) {
                        setToastMessage('error', \`Failed to upload file: \${item.original_name}\`);
                    }
                });
        `}/>
    </section>
    <section class="space-y-4" id={sectioning.file_picker.backend.deleting_from_storage}>
        <h2>Deleting from storage</h2>
        <h3>The $fileInputStore.serverDeleteUrl endpoint is used to delete files from your cloud</h3>
        <RenderCode
            lang="javascript"
            code={
                `
            const store = get(fileInputStore);
            const idsToDelete = store.submissions.map(item => item.id);
            try {
                //DELETE body: id's to $fileInputStore.serverDeleteUrl
                const data = await response.json();
                if (!response.ok) {
                    setToastMessage('error', data || 'Failed to delete files.');
                    return;
                }
                data.forEach((item: { id: string; code: number }) => {
                    if (item.code === 404) {
                        setToastMessage('error', \`Failed to delete file with ID: \${item.id}\`);
                    }
                });
            `
            }/>
    </section>
    <section class="space-y-4" id={sectioning.file_picker.backend.storage_information}>
        <h2>Storage information</h2>
        <h3>The $fileInputStore.serverStorageUrl endpoint is used to retrieve storage usage information from your cloud</h3>
        <RenderCode
            lang="js"
            code={`
            async function loadInformation(){
                if (!$User.userId || !$fileInputStore.serverStorageUrl) return;
                try {
                    const params = new URLSearchParams({
                        userId: $User.userId
                    });
                    const res = await fetch(\`\${$fileInputStore.serverStorageUrl}?\${params.toString()}\`);
                    const data = await res.json();

                    if (!res.ok) {
                        setToastMessage("error", data || "Failed to fetch storage usage.");
                        return;
                    }
                    const { usedBytes, maxBytes } = data.storage;
                    progress = (usedBytes / maxBytes) * 100;
                } catch (e) {
                    console.error("catch error:", e);
                    setToastMessage("error", "An error occurred while fetching storage usage.");
                }
            }
            onMount(async () => {
                await loadInformation();
            });
            `}
        />
    </section>
    <section class="space-y-4" id={sectioning.file_picker.backend.downloading_from_storage}>
        <h2>Downloading from storage</h2>
        <h3>The $fileInputStore.serverDownloadUrl endpoint is used to download files from your cloud. Note that files are downloaded one at a time.</h3>
        <RenderCode
            lang="javascript"
            code={
                `
            async function handleDownload() {
                const store = get(fileInputStore);
                if (!store.submissions?.length || !$User.userId) {
                    setToastMessage('error', 'An error occurred while processing your request.');
                    return;
                };
                try {
                    for (const item of store.submissions) {
                        if (!item.id) continue;
                        await download(item.id);
                    }
                } finally {
                    fileInputStore.update(store => {
                        store.submissions = [];
                        return store;
                    });
                }
            }

            async function download(id: string) {
                try {
                    const formData = new FormData();
                    formData.append('id', id);
                    formData.append('userid', $User.userId);

                    const res = await fetch($fileInputStore.serverDownloadUrl, {
                        method: 'POST',
                        body: formData
                    });

                    if (!res.ok) {
                        setToastMessage('error', await res.json() || 'Upload failed' );
                        return;
                    }
                    const blob = await res.blob();
                    let filename = '';
                    const contentDisposition = res.headers.get('Content-Disposition');
                    if (contentDisposition) {
                        const match = /filename="(.+)"/.exec(contentDisposition);
                        if (match?.[1]) filename = match[1];
                    }

                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();

                    URL.revokeObjectURL(url);
                    
                } catch (err) {
                    setToastMessage('error', \`Upload failed: \${err}\`);
                }
            }
            `
            }/>
    </section>
</main>
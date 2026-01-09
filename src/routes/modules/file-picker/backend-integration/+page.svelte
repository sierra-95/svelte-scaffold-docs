<script>
    import {RenderCode} from '$lib';
</script>

<main class="space-y-4">
	<title>Backend Integration</title>
	<h1>Backend Integration</h1>
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
    <h1>Example Integration</h1>
    <RenderCode
        lang="js"
        code={`
            // src/routes/api/media/upload/+server.js
            import {
                BACKEND_URL,
                CLOUDFLARE_R2_BUCKET,
                CLOUDFLARE_R2_PUBLIC_URL
            } from '$env/static/private';

            export async function POST({ request }) {
                try {
                    const incomingForm = await request.formData();

                    const r2_key = incomingForm.get('r2_key');
                    const userId = incomingForm.get('userid');
                    const files = incomingForm.getAll('files');

                    const backendForm = new FormData();
                    backendForm.append('bucket', CLOUDFLARE_R2_BUCKET);
                    backendForm.append('bucket_url', CLOUDFLARE_R2_PUBLIC_URL);
                    backendForm.append('r2_key', r2_key);
                    backendForm.append('user_id', userId);

                    for (const file of files) {
                        backendForm.append('files', file);
                    }

                    const uploadUrl = \`\${BACKEND_URL}media/upload\`;
                    const response = await fetch(uploadUrl, {
                        method: 'POST',
                        body: backendForm
                    });

                    if (!response.ok) {
                        const message = await response.text();
                        return new Response(JSON.stringify(message), {
                            status: response.status
                        });
                    } else {
                        const data = await response.json();
                        return new Response(JSON.stringify(data), {
                            status: 200,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    }
                } catch (err) {
                    return new Response(
                        JSON.stringify('Internal server error'),
                        { status: 500 }
                    );
                }
            }

        `}/>
</main>
<script>
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
    import {Button} from '@sierra-95/svelte-scaffold';

    function handleMetadataBackend(){
        window.open('https://backend.michaelmachohi.com/', '_blank');
    }
</script>

<main class="space-y-4">
	<title>Backend Integration</title>
    <h1 class="sierra-docs-h1">Backend Integration</h1>
    <h3>There are only 4 main endpoints you need to implement:</h3>
    <ul class="list-disc list-inside space-y-2">
        <li><strong>GET:</strong> <code>$fileInputStore.serverGetUrl</code> - used to load files onMount</li>
        <li><strong>POST:</strong> <code>$fileInputStore.serverUploadUrl</code> - used to upload new files</li>
        <li><code>$fileInputStore.serverDownloadUrl</code> - Download files</li>
        <li><strong>DELETE:</strong> <code>$fileInputStore.serverDeleteUrl</code> - used to delete files</li>
    </ul>
    <h3>We will use <strong>uploading</strong> as an example to demonstrate the integration process.</h3>
	
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.modules.file_picker.children.backend.ids.upload_example} data-title="Upload Example" class="space-y-4">
            <li>Understanding the Module API Call</li>
            <h3>This part is not necessarily important. It will help you understand what goes behind the scenes when you click the upload button</h3>
            <h3>OnUpload,the module first checks if there are actual files to be uploaded, and precense of a user_id. If this exists, 
                the component makes a POST request to the <code>$fileInputStore.serverUploadUrl</code> endpoint with the files and user_id in the body. An Ok response will be expected.
            </h3>
            <RenderCode
                lang="javascript"
                code={
                    `
                const res = await fetch($fileInputConfig.serverUploadUrl, {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (!res.ok) {
                    addToast({
                        status: 'error',
                        message: data || 'Upload failed',
                        persistent: true
                    });
                    return;
                }
                `
            }/>

            <li>Creating your +server.js (/api/media/upload) ($fileInputStore.serverUploadUrl)</li>
            <h3>This file is responsible for acknowledging the upload request and processing the file upload logic.</h3>
            <h3>The example shown uses <code>CLOUDFLARE R2</code>. The approach uses a two-step process, where the first step uploads the file to R2 and the second step saves the metadata to the database.</h3>
            <h3>You do not have to do this. This approach leverages Cloudflare Workers for quicker R2 uploads.</h3>
            <RenderCode
                lang="javascript"
                code={`
                    import { BACKEND_URL, BUCKET, WORKER_URL } from '$env/static/private';

                    export async function POST({ request }) {
                        try {
                            const incomingForm = await request.formData();
                            const files = incomingForm.getAll('files');
                            const user_id = incomingForm.get('user_id');

                            if (!files || files.length === 0) {
                                return new Response(JSON.stringify('No files provided'), { status: 400 });
                            }

                            if (!user_id) {
                                return new Response(JSON.stringify('Missing user_id'), { status: 400 });
                            }

                            // ------------------------------------
                            // 1. WORKER UPLOAD TO R2
                            // ------------------------------------
                            const workerForm = new FormData();

                            for (const file of files) {
                                workerForm.append('files', file);
                            }

                            workerForm.append('bucket', BUCKET);
                            workerForm.append('user_id', user_id.toString());

                            const workerRes = await fetch(\`\${WORKER_URL}media/upload\`, {
                                method: 'POST',
                                body: workerForm
                            });

                            const uploadResults = await workerRes.json();

                            if (!workerRes.ok) {
                                console.error('Worker upload failed:', workerRes);
                                return new Response(JSON.stringify(uploadResults), {
                                    status: workerRes.status
                                });
                            }
                            // ------------------------------------
                            // 2. FASTAPI BACKEND - SAVE METADATA
                            // ------------------------------------
                            const dbRes = await fetch(\`\${BACKEND_URL}media/upload\`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    user_id,
                                    uploadResults
                                })
                            });

                            const dbData = await dbRes.text();

                            if (!dbRes.ok) {
                                console.error('Backend metadata save failed:', dbRes);
                                return new Response(JSON.stringify(dbData), {
                                    status: dbRes.status
                                });
                            }

                            // ------------------------------------
                            // SUCCESS
                            // ------------------------------------
                            return new Response(JSON.stringify({ success: true }), {
                                status: 200,
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });

                        } catch (err) {
                            return new Response(
                                JSON.stringify(\`Internal server error \${err}\`),
                                { status: 500 }
                            );
                        }
                    }
                    
            `}/>

            <li>Creating your backend</li>
            <h3>The File Picker is a bit biased in the sense that it was built with Cloudflare R2 in mind. However, it has freedom in backend implementation.</h3>
            <h3>Each file in your database should have this minimal structure.</h3>
            <RenderCode
                lang="json"
                code={`
                {
                    id: string;
                    user_id?: string;
                    r2_key: string;
                    url: string;
                    created_at?: string;
                    original_name?: string;
                    mime_type?: string;
                    size_bytes?: number;
                };
            `}/>
            <h3>As mentioned before, this setup uses a two step process. Follow the link below to see the backend documentation of metadata handling.</h3>
            <Button onclick={handleMetadataBackend} endIcon='fa-up-right-from-square'>Metadata Backend API</Button>
            <h3>Below is an example of workers upload actual files</h3>   
            <RenderCode
                lang="javascript"
                code={`
                const r2 = c.env[metadata.bucket];
                const uploadResults = await Promise.all(
                    fileArray.map(async (file) => {
                        const uuid = crypto.randomUUID();
                        const fileType = file.type || 'application/octet-stream';

                        const extension =
                        mimeToExtension[fileType] ??
                        (file.name.includes('.') ? \`.\${file.name.split('.').pop()}\` : '.bin');

                        const r2_key = \`users/\${metadata.user_id}/\${uuid}\${extension}\`;

                        await r2.put(r2_key, file.stream(), {
                            httpMetadata: {
                                contentType: fileType,
                                contentDisposition: \`attachment; filename="\${file.name}"\`,
                            },
                        });

                        const category = detectCategory(fileType);
                        return {
                            id: uuid,
                            r2_key,
                            original_name: file.name,
                            mime_type: fileType,
                            size_bytes: file.size,
                            category,
                        };
                    })
                );
            `}/>     
        </section>
    </ol>

    <section id={routes.modules.file_picker.children.backend.ids.downloading_example} data-title="Download Example" class="space-y-4" style="margin-top: 4rem;">
        <h1 class="sierra-docs-h1">Download files from Cloud through File Picker</h1>
        <h3>To download files, you ought to have set Content-Type headers correctly during upload, as shown in the example above.</h3>
        <h3>During download, File Picker will trigger two API calls to the same endpoint, but different methods.</h3>
        <ol class="sierra-docs-ol space-y-4">
            <li>Authorization Check</li>
            <h3>The first API call is a POST, to check the file's existence and filter the allowed files.</h3>
            <RenderCode
                lang="javascript"
                code={`
                const res = await fetch($fileInputConfig.serverDownloadUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ids,
                        user_id: $fileInputConfig.user_id
                    })
                });
            `}/>
            <h3>Here is an example</h3>
            <RenderCode
                lang="javascript"
                code={`
                    const db = getDb(c.env);
                    const media = await db
                        .select()
                        .from(userMedia)
                        .where(
                            and(
                            eq(userMedia.user_id, user_id),
                                inArray(userMedia.id, ids)
                            )
                        );
                    if (media.length === 0) {
                        return c.text("Media not found", 404);
                    }
                    return c.json(media, 200);
            `}/>
            <li>File Retrieval</li>
            <h3>If the response is successful, the second API call will be a GET to retrieve the authorized file content. Below is a backend worker snippet</h3>
            <RenderCode
                lang="javascript"
                code={`
                const r2 = c.env[metadata.bucket]
                const object = await r2.get(metadata.r2_key)
                if (!object) {
                    return c.text('File missing from storage', 404)
                }
                return new Response(object.body,{
                    headers: {
                        'Content-Type': object.httpMetadata.contentType || 'application/octet-stream',
                        'Content-Disposition': object.httpMetadata.contentDisposition || \`attachment; filename="\${metadata.r2_key.split('/').pop()}"\`,
                    }
                })
            `}/>
            <h3>Your backend should return the file content with the correct Content-Type and Content-Disposition headers. Your $fileInputConfig.serverDownloadUrl should then return a response to the GET request.</h3>
            <RenderCode
                lang="javascript"
                code={`
                const res = await fetch(\$fileInputConfig.serverDownloadUrl + \`?r2_key=\${item.r2_key}\`, {
                    method: 'GET'
                });
                const blob = await res.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = item.original_name || 'download';

                document.body.appendChild(a);
                a.click();
                a.remove();

                URL.revokeObjectURL(url);
            `}/>
        </ol>
    </section>
</main>
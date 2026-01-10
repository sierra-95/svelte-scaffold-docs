<script lang="ts">
    import {RenderCode, routes} from '$lib';
    import {fileInputStore,  User, Button, setToastMessage} from '@sierra-95/svelte-scaffold';
    
    $: r2_key = `svelte-scaffold/${$User.userId}`;
    function open(){
        if(!$User.userId){
            setToastMessage('error', 'R2 Key not available.');
            return;
        }
        fileInputStore.update(store => ({ 
			...store,
            r2_key,
            manage: true,
			serverGetUrl: '/api/media/get',
            serverUploadUrl: '/api/media/upload',
            serverDeleteUrl: '/api/media/delete',
            serverStorageUrl: '/api/media/storage-usage',
            serverDownloadUrl: '/api/media/download',
			uploadModalOpen: true 
		}));
    }
</script>

<main class="space-y-4">
	<title>File Picker</title>
    <h1>File Picker</h1>
    <h3>The file picker is a cloud solution for form filling that allows users to submit uploaded files,
        update new ones and never lose them all together.
    </h3>
    <h2>Getting Started</h2>
    <h3>The example below uses cloudflare R2 for storage. <a href={routes.modules.file_picker.children.backend} class="note">Read more on backend integration.</a></h3>
    <h3>Place this anywhere in your app</h3>
    <RenderCode
		lang="svelte"
		code={`
        <\script>
            import {FilePicker} from '@sierra-95/svelte-scaffold';
        <\/script>
        <FilePicker />
    `}/>
    <h3>Use <code>fileInputStore</code> to open File Picker</h3>
    <Button onclick={() => open()}>Click to test</Button>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import {fileInputStore, User, setToastMessage} from '@sierra-95/svelte-scaffold';
        
            $: r2_key = \`svelte-scaffold/\${$User.userId}\`;

            function open(){
                if(!$User.userId){
                    setToastMessage('error', 'R2 Key not available.');
                    return;
                }
                fileInputStore.update(store => ({ 
                    ...store, 
                    r2_key,
                    serverGetUrl: '/api/media/get',
                    serverUploadUrl: '/api/media/upload',
                    serverStorageUrl: '/api/media/storage-usage',
                    uploadModalOpen: true 
                }));
            }
		<\/script>
        <Button onclick={open}>Click to test</Button>
	`}/>
</main>
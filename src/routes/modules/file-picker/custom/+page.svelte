<script lang="ts">
    import {fileInputStore, resetFileInputStore, Button, Input} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectioning} from '$lib';

    function limitFilePickerMenu(){
        fileInputStore.update(store => ({ 
			...store,
			serverGetUrl: '/api/media/get',
            disabledMenuItem: ['Documents','Videos','Music', 'Others'],
			uploadModalOpen: true 
		}));
    }
    let value = '';
    $: if (
		$fileInputStore.submissionComplete &&
		$fileInputStore.submissions.length > 0 &&
		$fileInputStore.uploadModalOpen === false
	) {
		const urlsToInsert = $fileInputStore.submissions.map(item => item.url);
		value += urlsToInsert.join(' ');
		resetFileInputStore();
	}
</script>

<main class="space-y-4">
	<title>File Picker</title>
    <h1>Customize File Picker</h1>
    <h2>Menu Options</h2>
    <h3>To remove specific menu items, add them on <code>$fileInputStore.disabledMenuItem</code> array</h3>
    <Button onclick={limitFilePickerMenu}>Click to test</Button>
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
            import {User, Input, FilePicker, fileInputStore, resetFileInputStore} from '@sierra-95/svelte-scaffold';
            
            function limitFilePickerMenu(){
                fileInputStore.update(store => ({ 
                    ...store,
                    serverGetUrl: '/api/media/get',
                    disabledMenuItem: ['Documents','Videos','Music', 'Others'],
                    uploadModalOpen: true 
                }));
            }
            let value = '';
            $: if (
                $fileInputStore.submissionComplete &&
                $fileInputStore.submissions.length > 0 &&
                $fileInputStore.uploadModalOpen === false
            ) {
                const urlsToInsert = $fileInputStore.submissions.map(item => item.url);
                value += urlsToInsert.join(' ');
                resetFileInputStore();
            }
		<\/script>
        <Button onclick={limitFilePickerMenu}>Click to test</Button>
        <Input 
            id="url-input" 
            label="File URLs" 
            placeholder="Enter file URLs"
            bind:value={value}
        />
	`}/>
    <h2>Accept Types</h2>
    <h3>File Picker is built on <a href={`${routes.core.children.inputs}#${sectioning.inputs.file_input}`} class="note">File Input</a>. This means you can control size and type of files to be uploaded.</h3>
    <h2>Deleting files</h2>
    <h3>To delete files from File Picker, set <code>$fileInputStore.manage</code> to <code>true</code>. A trash button will now be displayed if user selects a file</h3>
</main>
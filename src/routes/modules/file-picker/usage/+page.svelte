<script lang="ts">
    import {fileInputStore, resetFileInputStore, Button, Input} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectionIds} from '$lib';

    function limitFilePickerMenu(){
        fileInputStore.update(store => ({ 
			...store,
			serverGetUrl: '/api/media/get',
            serverStorageUrl: '/api/media/storage-usage',
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

<title>Usage</title>
<section id={sectionIds.modules.file_picker.usage} class="space-y-4">
    <h1>Usage</h1>
    <h2>Manage</h2>
    <h3>
    By default, <code>$fileInputStore</code> is in normal mode, where <code>$fileInputStore.manage</code> is false.
    When media is clicked, a select button (tick) appears, which is used to fill forms.
    </h3>
    <h3>
    When <code>$fileInputStore.manage</code> is true, the file picker enters manage mode.
    </h3>
    <h2>Filling Forms</h2>
    <h3>
    Selected media are appended to <code>$fileInputStore.submissions</code>,
    which can then be used to populate forms by extracting the required data.
    </h3>
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
                    serverStorageUrl: '/api/media/storage-usage',
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
    <h3>File Picker is built on <a href={`${routes.core.children.inputs}#${sectionIds.components.inputs.file_input}`} class="note">File Input</a>. This means you can control size and type of files to be uploaded.</h3>
    <h2>Disable Menu Items</h2>
    <h3>To remove specific menu items, add them on <code>$fileInputStore.disabledMenuItem</code> array</h3>
</section>
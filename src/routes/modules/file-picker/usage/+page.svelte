<script lang="ts">
    import {fileInputStore, resetFileInputStore, Button, Input} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectionIds} from '$lib';

    function limitFilePickerMenu(){
        fileInputStore.update(store => ({ 
			...store,
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
<main class="space-y-4">
    <h1 class="sierra-docs-h1">Usage</h1>
    <section id={sectionIds.modules.file_picker.usage.manage_mode} class="space-y-4">
        <h2 class="sierra-docs-h2">Manage vs Insertion Mode</h2>
        <h3>
        By default, <code>$fileInputStore</code> is in normal mode, where <code>$fileInputStore.manage</code> is false.
        When media is clicked, a select button (tick) appears, which is used to fill forms.
        When <code>$fileInputStore.manage</code> is true, the file picker enters manage mode.
        </h3>
        <h3>
        In Insertion Mode, selected media are appended to <code>$fileInputStore.submissions</code>,
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
    </section>
    <section id={sectionIds.modules.file_picker.usage.store_props} class="space-y-4">
        <h2 class="sierra-docs-h2">File Input store props</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>File Picker is built on <a href={`${routes.core.components.children.inputs}#${sectionIds.components.inputs.file_input}`} class="note">File Input</a>. This means you can control size and type of files to be uploaded.</li>
            <li>To remove specific menu items, add them on <code>$fileInputStore.disabledMenuItem</code> array</li>
            <li>To disable Delete or download Actions, list them on <code>$fileInputStore.disabledActions</code> array</li>
        </ul>
    </section>
</main>
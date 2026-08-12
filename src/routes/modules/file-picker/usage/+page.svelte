<script lang="ts">
    import {fileInputStore, resetFileInputStore, Button, Input} from '@sierra-95/svelte-scaffold';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';

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
        <section id={routes.modules.file_picker.children.usage.ids.store_props} data-title="File Input store props" class="space-y-4">
            <li>File Input store props</li>
            <ul class="list-disc list-inside space-y-2">
                <li>File Picker is built on <a href={`${routes.core.components.children.inputs.path}#${routes.core.components.children.inputs.ids.file_input}`} class="note">File Input</a>. This means you can control size and type of files to be uploaded.</li>
                <li>To remove specific menu items, add them on <code>$fileInputStore.disabledMenuItem</code> array</li>
                <li>To disable Delete or download Actions, list them on <code>$fileInputStore.disabledActions</code> array</li>
            </ul>
        </section>
    </ol>
</main>
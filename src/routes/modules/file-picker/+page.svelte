<script lang="ts">
    import {onMount} from 'svelte';
    import {Button, filePickerConfig, filePickerSet} from '@sierra-95/svelte-scaffold';
    
    onMount(()=>{
		filePickerSet.update(store => {
            store.MenuItems = ['Documents', 'Audio', 'Pictures', 'Videos', 'Others']
			store.Actions = ['Properties', 'Download']
			return store;
		});
    })

    function open(){
        filePickerConfig.update(store => { 
			store.manage = true;
            store.modalOpen = true;
            return store;
		});
    }
</script>

<title>Overview</title>

<main class="space-y-6">
    <h1 class="sierra-docs-h1">File Picker</h1>
    <section class="space-y-2">        
        <img 
            alt="File Picker"
            style="max-width: 600px; width: 100%;"
            src="https://files.michaelmachohi.com/svelte-scaffold/others/coraline.jpeg"
        />
        <Button onclick={() => open()}>Launch File Picker</Button>
        <h3>The file picker is a cloud solution for form filling that allows users to submit uploaded files,
            update new ones and never lose them all together.
        </h3>
    </section>
    <ol class="sierra-docs-ol space-y-4">
        <section class="space-y-4">
            <li>Why Use the File Picker?</li>
            <ul class="list-disc list-inside space-y-2">
                <li>
                It is convenient for both the user and the developer. The developer only handles <span class="text-(--ss-neutral)">multipart form</span> data once, in the file picker, and can then populate forms using URLs. The user can access and reuse uploaded files at any time.
                </li>
                <li>
                User-friendly “File Explorer” interface; supports file properties and storage management
                </li>
                <li>It is cool !</li>
            </ul>
        </section>
        <li class="text-(--ss-error)">PLEASE NOTE</li>
        <p>Even as the one documenting this module, it’s been challenging to capture everything clearly. The module is highly dependent on server-side operations, which means a lot happens behind the scenes that isn’t visible to the developer.</p>
        <h3>This Module will test your patience as a developer.</h3>
    </ol>
</main>
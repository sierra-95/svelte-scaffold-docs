<script lang="ts">
    import {goto} from '$app/navigation';
    import {RenderCode} from '$lib';
    import {routes} from '$lib/assets/company';
    import {Button} from '@sierra-95/svelte-scaffold';
</script>

<title>Getting Started</title>

<main class="space-y-6">
    <h1 class="sierra-docs-h1">Getting Started</h1>
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.modules.file_picker.children.getting_started.ids.getting_started} data-title="Getting Started" class="space-y-4">
            <!-- <li>Getting Started</li> -->
            <h3>It is Important to understand that the File Picker is heavily backend dependent. It's performance relies on the efficiency of your backend implementation.</h3>
            <h3>Place this anywhere in your app</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {FilePicker} from '@sierra-95/svelte-scaffold';
                <\/script>
                <FilePicker />
            `}/>
            <h3>Use <code>mediaServerConfig</code> to configure the File Picker endpoints. Use of user_id is required to track ownership.</h3>
            <h3>The filePickerSet is used to enable/disable menu items and actions.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {onMount} from 'svelte';
                    import {mediaServerConfig, filePickerSet} from '@sierra-95/svelte-scaffold';

                    const user_id = 'some-unique-user-id';
                    onMount(()=>{
                        mediaServerConfig.update(config => ({
                            ...config,
                            getUrl: '/api/media/get',
                            uploadUrl: '/api/media/upload',
                            deleteUrl: '/api/media/delete',
                            downloadUrl: '/api/media/download',
                            user_id: user_id
                        }));

                        filePickerSet.update(store => {
                            store.MenuItems = ['Documents', 'Audio', 'Pictures', 'Videos', 'Others']
                            store.Actions = ['Properties', 'Download', 'Delete']
                            return store;
                        });
                    })
                <\/script>
            `}/>
            <h3>To launch the File Picker, set <code>$filePickerConfig.uploadModalOpen</code> to <code>true</code>.
                <code>$filePickerConfig.manage</code> disables Insertion mode.
            </h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {filePickerConfig, Button} from '@sierra-95/svelte-scaffold';
                    function open(){
                        filePickerConfig.update(store => { 
                            store.manage = true;
                            store.modalOpen = true;
                            return store;
                        });
                    }
                <\/script>
                <Button onclick={() => open()}>Launch File Picker</Button>
            `}/>
            <Button onclick={() => goto(routes.modules.file_picker.children.backend.path)} startIcon="fa-arrow-right">Setting Up Backend</Button>
        </section>
    </ol>
</main>
<script>
    import {modalStore,Button, Input} from '@sierra-95/svelte-scaffold';
    import {RenderCode, sectionIds} from '$lib';
    import Table from '$lib/Table.svelte';
    import { title, table } from './table';

    let value = '';
    function triggerPlainModal() {
        modalStore.set({
            open: true,
            title: 'Confirm Action',
            content: 'Modal has been triggered',
            confirmText: 'Accept',
            cancelText: 'Decline',
            onConfirm: () => {},
            onCancel: () => {},
        });
    }

    function Submit(){}
    
    function triggerDynamicModal() {
        modalStore.update(m => ({
            ...m,
            open: true,
            title: 'Editor',
            onConfirm: () => {
                Submit();
            },
            onCancel: () => { value = ''},
            render: formContent
        }));
    }
</script>

{#snippet formContent()}
    <Input label="Enter Youtube URL" id="youtube-url" bind:value={value}/>
{/snippet}

<title>Modal</title>
<section id={sectionIds.components.modal.getting_started} class="space-y-4 mb-10">
    <h1>Modal</h1>
    <h3>Place this anywhere in your app</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { Modal } from '@sierra-95/svelte-scaffold';
        <\/script>

        <Modal />

    `}/>
    <h2>1. Static Mode</h2>
    <Button onclick={triggerPlainModal}>Click to test</Button>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { modalStore, Button } from '@sierra-95/svelte-scaffold';

            function triggerPlainModal() {
                modalStore.set({
                    open: true,
                    title: 'Confirm Action',
                    content: 'Modal has been triggered',
                    confirmText: 'Accept',
                    cancelText: 'Decline',
                    onConfirm: () => alert('Modal confirmed!'),
                    onCancel: () => alert('Modal cancelled!'),
                });
            }
        <\/script>

        <Button onclick={triggerPlainModal}>Click here</Button>

    `}/>

    <h2>2. Dynamic Mode</h2>
    <h3>Used to render custom UI such as inputs, forms, or any arbitrary markup inside the modal.</h3>
    <Button onclick={triggerDynamicModal}>Click to test</Button>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { modalStore, Button, Input } from '@sierra-95/svelte-scaffold';

            let value = '';
            function Submit(){}
    
            function triggerDynamicModal() {
                modalStore.update(m => ({
                    ...m,
                    open: true,
                    title: 'Editor',
                    onConfirm: () => {
                        Submit();
                    },
                    onCancel: () => { value = ''},
                    render: formContent
                }));
            }
        <\/script>
        {#snippet formContent()}
            <Input label="Enter Youtube URL" id="youtube-url" bind:value={value}/>
        {/snippet}
        <Button onclick={triggerPlainModal}>Click here</Button>

    `}/>
</section>

<section id={sectionIds.components.modal.component_api} class="space-y-4 mb-10">
    <h3>Use <code class="note">modalStore.update()</code> for optional properties to keep defaults</h3>
    <Table {title} {table}/>
</section>

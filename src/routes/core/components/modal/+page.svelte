<script>
    import {modalStore,Button, Input, Table} from '@sierra-95/svelte-scaffold';
    import {RenderCode, sectionIds} from '$lib';
    import { favicon } from '$lib/assets/company';
    import { title, table } from './table';

    let value = '';
    function triggerPlainModal() {
        modalStore.update(m => ({
            ...m,
            open: true,
            title: 'Confirm Action',
            content: 'Modal has been triggered',
            confirmText: 'Accept',
            cancelText: 'Decline',
        }));
    }

    function Submit(){}
    
    function triggerDynamicModal() {
        modalStore.update(m => ({
            ...m,
            open: true,
            title: 'Editor',
            logo_url: `${favicon}favicon.ico`,
            onConfirm: () => {
                Submit();
            },
            onCancel: () => { value = ''},
            render: formContent
        }));
    }
</script>

{#snippet formContent()}
    <div style="padding-top: 20px;">
        <Input label="Enter Youtube URL" id="youtube-url" bind:value={value}/>
    </div>
{/snippet}

<main class="space-y-6">
    <title>Modal</title>
    <h1 class="sierra-docs-h1">Breaking news</h1>
    <h3>Modals are used to display important information or prompts to the user.</h3>
    <section id={sectionIds.components.modal.getting_started} class="space-y-4">
        <h2 class="sierra-docs-h2">Getting Started</h2>
        <h3>Place this anywhere in your app</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { Modal } from '@sierra-95/svelte-scaffold';
            <\/script>

            <Modal />

        `}/>

        <h3>The modal can exist in two modes: static and dynamic.</h3>
    </section>
    <ol class="sierra-docs-ol">
        <section id={sectionIds.components.modal.static_mode} class="space-y-4">
            <li>Static Mode</li>
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
        </section>

        <section id={sectionIds.components.modal.dynamic_mode} class="space-y-4">
            <li>Dynamic Mode</li>
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
                            logo_url: 'https://example.com/logo.png',
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
    </ol>
    <section id={sectionIds.components.modal.component_api} class="space-y-4">
        <h2 class="sierra-docs-h2">Component API</h2>
        <h3>Use <code class="note">modalStore.update()</code> for optional properties to keep defaults</h3>
        <Table {title} {table}/>
    </section>
</main>

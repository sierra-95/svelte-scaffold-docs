<script>
    import { onMount } from 'svelte';
    import {RenderCode} from '$lib';
    import { routes } from '$lib/assets/company';
    import { addToast } from '@sierra-95/svelte-scaffold';

    onMount(() => {
        addToast({
            status: 'warning',
            message: 'I am a persistent warning message',
            persistent: true
        });

        addToast({
            status: 'error',
            message: 'I am a high-priority error message',
            priority: 'high'
        });

        addToast({
            status: 'success',
            message: 'I am a success message'
        });

        addToast({
            status: 'info',
            message: 'I am a persistent info message',
            persistent: true
        });

        addToast({
            status: 'success',
            message: 'I am a medium-priority success message',
            priority: 'medium'
        });

        addToast({
            status: 'info',
            message: 'I am a info message',
            priority: 'medium'
        }); 
    });
</script>

<title>Toast manager</title>
<main class="space-y-6">    

    <h1 class="sierra-docs-h1">I won't say it again</h1>
    <h3>Toast manager allows you to manage and display toast notifications in your Svelte application.</h3>     
    <ol class="sierra-docs-ol space-y-4">
        <section id={routes.core.features.children.toast_manager.ids.overview} class="space-y-4">
            <li>Why Use the Toast Manager   ?</li>
            <ul>
                <li>Handles multiple message types simultaneously (info, success, warning, error)</li>
                <li>Supports persistent messages that remain visible until manually dismissed</li>
                <li>Messages are grouped and displayed based on priority (high, medium, low)</li>
                <li>Each message is assigned a unique identifier for tracking and management</li>
            </ul>

            <h3>Note the following</h3>
            <ul>
                <li>Persistent messages are always displayed at the top, regardless of priority</li>
                <li>After persistent messages, order is determined strictly by priority, regardless of message type</li>
            </ul>
        </section>

        <section id={routes.core.features.children.toast_manager.ids.usage} class="space-y-4">
            <li>Usage</li>
            <h3>Place this anywhere in your app.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import {ToastManager} from '@sierra-95/svelte-scaffold';
                <\/script>
                <ToastManager/>
                `}
            />
            <h3>Then use the addToast function to add messages.</h3>
            <RenderCode
                lang="svelte"
                code={`
                <\script>
                    import { onMount } from 'svelte';
                    import {addToast} from '@sierra-95/svelte-scaffold';

                    onMount(() => {
                        addToast({
                            status: 'warning',
                            message: 'I am a persistent warning message',
                            persistent: true
                        });

                        addToast({
                            status: 'error',
                            message: 'I am a high-priority error message',
                            priority: 'high'
                        });

                        addToast({
                            status: 'success',
                            message: 'I am a success message'
                        });

                        addToast({
                            status: 'info',
                            message: 'I am a persistent info message',
                            persistent: true
                        });

                        addToast({
                            status: 'warning',
                            message: 'I am a medium-priority warning message',
                            priority: 'medium'
                        });

                        addToast({
                            status: 'info',
                            message: 'I am a info message',
                            priority: 'medium'
                        }); 
                    });
                <\/script>
                `}
            />
        </section>
    </ol>
</main>
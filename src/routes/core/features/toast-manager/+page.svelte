<script>
    import { onMount } from 'svelte';
    import {sectionIds, RenderCode} from '$lib';
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
</script>

<title>Toast manager</title>
<main class="space-y-4">
    <section id={sectionIds.features.toast_manager.overview} class="space-y-4">
        <h1 class="sierra-docs-h1">I won't say it again</h1>
        <h3>Toast manager allows you to manage and display toast notifications in your Svelte application.</h3>
        
        <h2 class="sierra-docs-h2">Why Use the Toast Manager   ?</h2>
        <ul>
            <li>Handles multiple message types simultaneously (info, success, warning, error)</li>
            <li>Supports persistent messages that remain visible until manually dismissed</li>
            <li>Messages are grouped and displayed based on priority (high, medium, low)</li>
            <li>Each message is assigned a unique identifier for tracking and management</li>
        </ul>

        <h2 class="sierra-docs-h2">Note the following</h2>
        <ul>
            <li>Persistent messages are always displayed at the top, regardless of priority</li>
            <li>After persistent messages, order is determined strictly by priority, regardless of message type</li>
        </ul>
    </section>

    <section id={sectionIds.features.toast_manager.usage} class="space-y-4">
        <h2 class="sierra-docs-h2">Usage</h2>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { onMount } from 'svelte';
                import {ToastManager} from '@sierra-95/svelte-scaffold';

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
            <ToastManager/>
            `}
        />
    </section>
</main>
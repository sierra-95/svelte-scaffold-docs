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
<section id={sectionIds.features.toast_manager} class="space-y-4">
    <h1>Toast manager</h1>
    <h3>Toast manager allows you to manage and display toast notifications in your Svelte application.</h3>
    
    <ol class="sierra-docs-ol">
        <li>Why Use the Toast Manager   ?</li>

        <ul>
            <li>Handles multiple message types simultaneously (info, success, warning, error)</li>
            <li>Supports persistent messages that remain visible until manually dismissed</li>
            <li>Messages are grouped and displayed based on priority (high, medium, low)</li>
            <li>Each message is assigned a unique identifier for tracking and management</li>
        </ul>

        <li>Note the following</li>
        <ul>
            <li>Persistent messages are always displayed at the top, regardless of priority</li>
            <li>After persistent messages, order is determined strictly by priority, regardless of message type</li>
        </ul>

        <li>Usage</li>
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
    </ol> 
</section>
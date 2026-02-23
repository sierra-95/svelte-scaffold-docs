<script>
    import { onMount, onDestroy } from 'svelte';
    import {setToastMessage,clearToastMessage, Button} from '@sierra-95/svelte-scaffold'
    import {RenderCode, sectionIds} from '$lib';
    import ToastTable from '../_table/toast.svelte';
   
    onMount(() => {
        setToastMessage(
            'error', 
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', 
            6000, 
            true
        );
    });
    onDestroy(() => {
        clearToastMessage();
    });
    function triggerToast(){
        setToastMessage('success', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.');
    }
</script>


<title>Toast</title>
<section id={sectionIds.components.toast.getting_started} class="space-y-4 mb-10">
    <h1>Toast</h1>
    <Button onclick={triggerToast}>Toast Me</Button>
    <h3>Place this anywhere in your app</h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { Toast } from '@sierra-95/svelte-scaffold';
        <\/script>

        <Toast />
    `}/>
    <h2>Timed message toast</h2>
    <h3>Default timeout is <strong>6 seconds</strong></h3>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import {setToastMessage, Button} from '@sierra-95/svelte-scaffold';

            function triggerToast(){
                setToastMessage('success', 'Toast Triggered');
            }
        <\/script>

        <Button onclick={triggerToast}>Click here</Button>

    `}/>

    <h2>Persistent message toast</h2>
    <RenderCode
        lang="svelte"
        code={`
        <\script>
            import { onMount, onDestroy } from 'svelte';
            import {setToastMessage,clearToastMessage} from '@sierra-95/svelte-scaffold';

            setToastMessage(
                'success', 
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', 
                6000, 
                true
            );
            onDestroy(() => {
                clearToastMessage();
            });
        <\/script>

    `}/>
</section>
<section id={sectionIds.components.toast.props} class="space-y-4 mb-10">
    <ToastTable />
</section>
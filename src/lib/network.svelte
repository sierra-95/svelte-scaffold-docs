<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount, onDestroy } from 'svelte';
    import { setToastMessage } from '@sierra-95/svelte-scaffold';

  let isOnline = true;

  function updateStatus() {
    isOnline = navigator.onLine;
  }

  onMount(() => {
    if(!browser) return;
    updateStatus();
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
  });

  onDestroy(() => {
    if(!browser) return;
    window.removeEventListener('online', updateStatus);
    window.removeEventListener('offline', updateStatus);
  });

  $effect(()=>{
    if(!isOnline){
        setToastMessage('warning','A loss of your internet connection was detected')
    }
  })
</script>
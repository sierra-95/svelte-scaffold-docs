<script>
    import {RenderCode, routes, sectioning} from '$lib';
</script>

<main class="space-y-4">
	<title>User Store</title>
	<h1>User Store</h1>
	<h3>This store can be used components to manage user-related data including the  
        <a href={`${routes.core.children.Menus}#${sectioning.menu.user}`} class="note">This example</a> 
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
			import { goto } from '$app/navigation';
			import { onMount } from 'svelte';
	        import {User, resetUserStore, isLoggedIn} from '@sierra-95/svelte-scaffold';

			onMount(() => {
				User.update(store => {
					store.userId = 'w23ac20r-58ra-4372-a567-0e02k2m3x832';
					store.firstName = 'John';
					store.lastName = 'Doe';
					store.email = 'john.doe@example.com';
					store.phone = '+1-555-123-4567';
					return store;
				});
			});

			function handleLogout(){
				resetUserStore();
				isLoggedIn.set(false);
				goto('/login');
			}
		<\/script>
	`}/>
	<h2>Compulsory $User.userId?</h2>
	<h3>Here are some modules that rely on $User.userId</h3>
    <div class="flex flex-wrap gap-4">
        <a href={routes.modules.editor} class="note">Editor</a>
        <a href={routes.modules.file_picker.children.getting_started} class="note">File Picker</a>
	</div>
</main>
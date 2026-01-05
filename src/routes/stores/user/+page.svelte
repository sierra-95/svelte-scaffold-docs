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
	<h2>$User.userId</h2>
	<h3>
		On mount, the application checks whether local storage contains a <code>anonymous_id</code>.
		If it exists, the User store is updated with this value.</h3>
	<h3>If it doesn't exist and  your not logged in (<a href={routes.stores.general_stores} class="note">isLoggedIn</a> is false), a new user id is generated using <code>crypto.randomUUID()</code>.
		The User store and local storage is then updated with the newly created value.
	</h3>
	<h3>If you're logged in, manually update <code>$User.userId</code> accordingly.</h3>

	<h2>Compulsory $User.userId?</h2>
	<h3>Here are some modules that rely on $User.userId</h3>
    <ul class="list-disc list-inside space-y-2">
        <li><a href={routes.modules.editor} class="note">Editor</a></li>
        <li><a href={routes.modules.file_picker.children.getting_started} class="note">File Picker</a></li>
    </ul>
</main>
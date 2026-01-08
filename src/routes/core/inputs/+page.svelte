<script lang="ts">
	import { onMount } from 'svelte';
	import {Input, PasswordInput, fileInputStore, FileInput, resetFileInputStore} from '@sierra-95/svelte-scaffold';
	import {RenderCode, routes, sectioning} from '$lib';
	import FileInputTable from './_table/fileInput.svelte';

	let email = '';
	let password = '';

	let processing = false; 

    function handleUpload(){
        processing = true;
        const files = $fileInputStore.selectedFiles;
        //process the files here
        processing = false;
        resetFileInputStore();
    }

    onMount(() => {
        fileInputStore.update(store => {
            store.sizeConstraint = 5 * 1024 * 1024;
            store.uploadType = ['image','video','audio','documents'];
            return store;
        });
    });
</script>

<main class="space-y-4">
	<title>Inputs</title>
	<section id={sectioning.inputs.basic} class="space-y-4">
		<h1 class="font-bold text-2xl">Inputs</h1>
		<Input 
			id="email" 
			type="email" 
			label="Email Address" 
			placeholder="Enter your email"
			bind:value={email}
		/>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { Input } from '@sierra-95/svelte-scaffold';
				let email = '';
			<\/script>
			<!-- id == name == label_for -->
			<!-- type: default=text, options: text, number, email, tel, url  etc-->
			<Input 
				id="email" 
				type="email" 
				label="Email Address" 
				placeholder="Enter your email"
				bind:value={email}
			/>
			
		`}/>
	</section>
	
	<section id={sectioning.inputs.password} class="space-y-4">
		<h2>Password Input</h2>
		<PasswordInput
			id="password" 
			label="Password" 
			placeholder="Enter your password"
			bind:value={password} 
		/>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { PasswordInput } from '@sierra-95/svelte-scaffold';
				let password = '';
			<\/script>

			<!-- id == name == label_for -->
			<PasswordInput
				id="password" 
				label="Password" 
				placeholder="Enter your password"
				bind:value={password} 
			/>
			
		`}/>
	</section>

	<section id={sectioning.inputs.file_input} class="space-y-4">
		<h2>File Input</h2>
		<FileInput bind:processing onclick={handleUpload}  />
		<h3>Incase any errors occur during upload, the
			<a href={routes.core.children.alerts.toast} class="note">Toast</a>
			component will display it. Ensure its imported and added to your root layout.
		</h3>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { onMount } from 'svelte';
				import { FileInput, fileInputStore, resetFileInputStore} from '@sierra-95/svelte-scaffold';
			
				let processing = false; 

				function handleUpload(){
					processing = true;
					const files = $fileInputStore.selectedFiles;
					//process the files here
					processing = false;
					resetFileInputStore();
				}

				onMount(() => {
					fileInputStore.update(store => {
						store.sizeConstraint = 5 * 1024 * 1024; // 5 MB
						store.uploadType = ['image','video','audio','documents'];
						return store;
					});
				});
			<\/script>
			<FileInput bind:processing onclick={handleUpload}  />
		`}/>
		<FileInputTable />
	</section>
</main>
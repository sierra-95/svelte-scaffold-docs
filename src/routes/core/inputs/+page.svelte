<script lang="ts">
	import { onMount } from 'svelte';
	import {Input, PasswordInput, fileInputStore, FileInput, resetFileInputStore, SearchBar} from '@sierra-95/svelte-scaffold';
	import {RenderCode, routes, sectionIds} from '$lib';
	import FileInputTable from './_table/fileInput.svelte';

	let email = '';
	let password = '';
	let searchQuery = '';

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


<title>Inputs</title>
<section id={sectionIds.components.inputs.basic_input} class="space-y-4 mb-10">
	<h1>Inputs</h1>
	<h2>Basic Input</h2>
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

<section id={sectionIds.components.inputs.password_input} class="space-y-4 mb-10">
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

<section id={sectionIds.components.inputs.search_bar} class="space-y-4 mb-10">
	<h2>Search Bar</h2>
	<SearchBar bind:value={searchQuery} onSearch={() => alert(`Search triggered ${searchQuery}!`)}/>
	<SearchBar enableHotkey onHotkey={()=> alert('Hotkey triggered!')}/>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { SearchBar } from '@sierra-95/svelte-scaffold';
			let searchQuery = '';
		<\/script>

		<SearchBar bind:value={searchQuery} onSearch={() => alert(\`Search triggered \${searchQuery}!\`)}/>
		<SearchBar enableHotkey onHotkey={()=> alert('Hotkey triggered!')}/>
	`}/>
</section>

<section id={sectionIds.components.inputs.file_input} class="space-y-4 mb-10">
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
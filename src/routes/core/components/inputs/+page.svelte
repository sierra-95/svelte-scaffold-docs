<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Input, fileInputStore, FileInput, 
		resetFileInputStore, SearchBar, Select,
		TextArea, PasswordStrength, Table
	} from '@sierra-95/svelte-scaffold';
	import {RenderCode} from '$lib';
	import { routes } from '$lib/assets/company';
	import { inputsTable, fileInputDocumentListTable, fileInputUploadTypeTable } from './table';

	let email = '';
	let new_password = '';
	let confirm_password = '';
	let textareaValue = '';
	let searchQuery = '';
	let selectedValue = '';

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

	const options = [
		{ value: '', label: 'Select an option', disabled: true },
		{ value: 'value1', label: 'Option 1' },
		{ value: 'value2', label: 'Option 2' },
		{ value: 'value3', label: 'Option 3' }
	];
</script>


<title>Inputs</title>
<main class="space-y-6">		
	<h1 class="sierra-docs-h1">Scaffold Inputs<span>Your turn. I’ve got a box</span></h1>
	<ol class="sierra-docs-ol space-y-4">
		<section id={routes.core.components.children.inputs.ids.basic_input} data-title="Basic Input" class="space-y-4">
			<li>Basic Input</li>
			<h3>id == name == label_for</h3>
			<h3>type= default: [text] options: [password, date, time, number, email, tel, url  etc]</h3>
			<div class="flex gap-4 items-center flex-wrap">
				<Input 
					id="email" 
					type="email" 
					label="Email Address" 
					placeholder="Enter your email"
					bind:value={email}
				/>
				<Input label="Select Date" type="date"/>
				<Input label="Select Time" type="time"/>
			</div>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { Input } from '@sierra-95/svelte-scaffold';
					let email = '';
				<\/script>

				<Input 
					id="email" 
					type="email" 
					label="Email Address" 
					placeholder="Enter your email"
					bind:value={email}
				/>
				
			`}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.password_strength_meter} data-title="Password Strength" class="space-y-4">
			<li>Password Strength</li>
			<Input type="password" label="New Password" placeholder="Enter your new password" bind:value={new_password}/>
			<Input type="password" label="Confirm Password" placeholder="Confirm your new password" bind:value={confirm_password}/>
			<PasswordStrength
				minLength={8}
				new_password={new_password}
				confirm_password={confirm_password}
			/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { PasswordStrength, Input } from '@sierra-95/svelte-scaffold';

					let new_password = '';
					let confirm_password = '';
				<\/script>

				<Input type="password" label="New Password" placeholder="Enter your new password" bind:value={new_password}/>
				<Input type="password" label="Confirm Password" placeholder="Confirm your new password" bind:value={confirm_password}/>

				<PasswordStrength
					minLength={8}
					new_password={new_password}
					confirm_password={confirm_password}
				/>
				
			`}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.textarea_input} data-title="Textarea" class="space-y-4">
			<li>Textarea</li>
			<TextArea
				id="textarea" 
				label="Your Message" 
				placeholder="Enter your message"
				bind:value={textareaValue}
				rows={2}
			/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { TextArea } from '@sierra-95/svelte-scaffold';
					let textareaValue = '';
				<\/script>

				<!-- id == name == label_for -->
				<TextArea
					id="textarea" 
					label="Your Message" 
					placeholder="Enter your message"
					bind:value={textareaValue}
					rows={2}
				/>
				
			`}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.search_bar_input} data-title="Search Bar" class="space-y-4">
			<li>Search Bar</li>
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

		<section id={routes.core.components.children.inputs.ids.select_input} data-title="Select" class="space-y-4">
			<li>Select</li>
			<Select 
				optionsBackground="var(--ss-l-s)" 
				maxWidth="300px" 
				height="40px" 
				bind:value={selectedValue} 
				options={options} 
			/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { Select } from '@sierra-95/svelte-scaffold';
					let selectedValue = '';
					const options = [
						{ value: '', label: 'Select an option', disabled: true },
						{ value: 'value1', label: 'Option 1' },
						{ value: 'value2', label: 'Option 2' },
						{ value: 'value3', label: 'Option 3' }
					];
				<\/script>

				<Select 
					optionsBackground="var(--ss-l-s)" 
					maxWidth="300px" 
					height="40px" 
					bind:value={selectedValue} 
					options={options} 
				/>
				
			`}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.file_input} data-title="File Input" class="space-y-4">
			<li>File Input</li>
			<FileInput bind:processing onclick={handleUpload}  />
			<h3>Incase any errors occur during upload,
				<a href={routes.core.features.children.toast_manager.path} class="note">Toast Manager</a>
				will display it. Ensure its imported and added to your root layout.
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
			<Table table={fileInputUploadTypeTable.table}/>
			<Table table={fileInputDocumentListTable.table}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.inputs_api} data-title="Inputs API" class="space-y-4">
			<li>Inputs API</li>
			<Table title={inputsTable.title} table={inputsTable.table}/>
		</section>
	</ol>
</main>
<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Input, FileInput, SearchBar, Select,
		TextArea, PasswordStrength, Table, 
		fileInputConfig, resetFileInput, addToast
	} from '@sierra-95/svelte-scaffold';
	import {RenderCode} from '$lib';
	import { routes } from '$lib/assets/company';
	import { inputsTable, fileInputDocumentListTable, 
		SearchBarTable, fileInputUploadTypeTable, inputsStyleTable } from './table';

	let new_password = 'xyz1234';
	let confirm_password = 'vvv1234ß';
	let textareaValue = '';
	let searchQuery = '';
	let selectedValue = '';

	let processing = false; 
	let randomUUID = crypto.randomUUID();

    function handleUpload(){
        processing = true;
        const files = $fileInputConfig.selectedFiles;
        //process the files here
        processing = false;
        resetFileInput();
    }

    onMount(() => {
        fileInputConfig.update(store => {
            store.sizeConstraint = 5 * 1024 * 1024;
            store.uploadType = ['Pictures'];
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
		<section id={routes.core.components.children.inputs.ids.input} data-title="Input" class="space-y-4">
			<li>Input</li>
			<h3>id == name == label_for</h3>
			<h3>type= default: [text] options: [password, date, time, number, email, tel, url  etc]</h3>
			<div class="flex gap-4 items-center flex-wrap">
				<Input type="email" label="Email Address" placeholder="Enter your email" styleC={{ maxWidth: '300px' }}/>
				<Input label="Select Date" type="date" styleC={{ maxWidth: '300px' }}/>
				<Input label="Select Time" type="time" styleC={{ maxWidth: '300px' }}/>
				<Input label="Icon Enabled Input" value={randomUUID} readonly
					iconC={{ 
						title: 'Copy ID',
						name: 'fa-regular fa-copy',
						size: '18px', 
						onclick: () => {
							navigator.clipboard.writeText(randomUUID);
							addToast({
								status: 'success',
								message: 'ID copied to clipboard.'
							});
						} 
					}}
					styleC={{ maxWidth: '400px' }}
				/>
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
					styleC={{ maxWidth: '300px' }}
				/>
				
			`}/>
			<h3>The example below shows how to make a copyable input:</h3>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { Input } from '@sierra-95/svelte-scaffold';
					let randomUUID = crypto.randomUUID();
				<\/script>

				<Input label="Icon Enabled Input" 
					value={randomUUID} readonly
					iconC={{ 
						title: 'Copy ID',
						name: 'fa-regular fa-copy',
						size: '18px', 
						onclick: () => {
							navigator.clipboard.writeText(randomUUID);
							addToast({
								status: 'success',
								message: 'ID copied to clipboard.'
							});
						} 
					}}
				/>
				
			`}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.select_input} data-title="Select" class="space-y-4">
			<li>Select</li>
			<Select 
				title="Select Example"
				bind:value={selectedValue} 
				options={options}
				styleC={{styles: 'cursor: pointer;'}} 
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
					title="Select Example"
					bind:value={selectedValue} 
					options={options} 
					styleC={{styles: 'cursor: pointer;'}}
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

		<section id={routes.core.components.children.inputs.ids.ist_api} data-title="Input, Select, TextArea API" class="space-y-4">
			<li>Input, Select, TextArea API</li>
			<Table title={inputsTable.title} table={inputsTable.table}/>
			<Table title={inputsStyleTable.title} table={inputsStyleTable.table}/>
		</section>

		<section id={routes.core.components.children.inputs.ids.password_strength_meter} data-title="Password Strength" class="space-y-4">
			<li>Password Strength</li>
			<Input type="password" label="New Password" placeholder="Enter your new password" bind:value={new_password}/>
			<Input type="password" label="Confirm Password" placeholder="Confirm your new password" bind:value={confirm_password}/>
			<div style="max-width: 500px;">
				<PasswordStrength
					minLength={8}
					new_password={new_password}
					confirm_password={confirm_password}
				/>
			</div>
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


		<section id={routes.core.components.children.inputs.ids.search_bar_input} data-title="Search Bar" class="space-y-4">
			<li>Search Bar</li>
			<SearchBar bind:value={searchQuery} onSearch={() => alert(`Search triggered ${searchQuery}!`)}/>
			<SearchBar enableHotkey onHotkey={()=> alert('Hotkey triggered!')}/>
			<p>
				The component supports two search modes in a single component.
				By default, it behaves as a standard search input with a search button and clear button.
				When <strong>enableHotkey</strong> is set to <strong>true</strong>, it becomes a
				documentation-style search bar that is read-only and can be triggered using
				<strong>Ctrl + K</strong> (or <strong>Cmd + K</strong> on macOS).
			</p>
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
			<Table title={SearchBarTable.title} table={SearchBarTable.table}/>
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
					import { FileInput, fileInputConfig, resetFileInput } from '@sierra-95/svelte-scaffold';
				
					let processing = false; 
					function handleUpload(){
						const files = $fileInputConfig.selectedFiles;
						//process the files here
						resetFileInput();
					}

					onMount(() => {
						fileInputConfig.update(store => {
							store.sizeConstraint = 5 * 1024 * 1024;
							store.uploadType = ['Pictures'];
							return store;
						});
					});
				<\/script>
				<FileInput bind:processing onclick={handleUpload}  />
			`}/>
			<Table table={fileInputUploadTypeTable.table}/>
			<Table table={fileInputDocumentListTable.table}/>
		</section>


	</ol>
</main>
<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Input, PasswordInput, fileInputStore, FileInput, 
		resetFileInputStore, SearchBar, Select, DateInput, TimeInput,
		TextArea, PasswordStrength
	} from '@sierra-95/svelte-scaffold';
	import {RenderCode, routes, sectionIds} from '$lib';
	import Table from '$lib/Table.svelte';
	import FileInputTable from './_table/fileInput.svelte';
	import { propsTable, propsTitle, eventHandlersTable, eventHandlersTitle, stylingTable, stylingTitle } from './_table/shared';

	let email = '';
	let password = '';
	let new_password = '';
	let confirm_password = '';
	let textareaValue = '';
	let searchQuery = '';
	let selectedValue = '';
	let selectedDate = '';
	let selectedTime = '';

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
	<section id={sectionIds.components.inputs.basic_input} class="space-y-4">
		<h1>Inputs</h1>
		<h2>1. Basic Input</h2>
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

	<section id={sectionIds.components.inputs.password_input} class="space-y-4">
		<h2>2. Password Input</h2>
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

	<section id={sectionIds.components.inputs.password_strength_meter} class="space-y-4">
		<h2>3. Password Strength</h2>
		<PasswordInput
			id="new_password" 
			label="New Password" 
			placeholder="Enter your password"
			bind:value={new_password} 
		/>
		<PasswordInput
			id="confirm_password" 
			label="Confirm Password" 
			placeholder="Confirm your password"
			bind:value={confirm_password} 
		/>
		<PasswordStrength
			minLength={8}
			new_password={new_password}
			confirm_password={confirm_password}
		/>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { PasswordStrength, PasswordInput } from '@sierra-95/svelte-scaffold';
				let new_password = '';
				let confirm_password = '';
			<\/script>

			<PasswordInput
				id="new_password" 
				label="New Password" 
				placeholder="Enter your password"
				bind:value={new_password} 
			/>
			<PasswordInput
				id="confirm_password" 
				label="Confirm Password" 
				placeholder="Confirm your password"
				bind:value={confirm_password} 
			/>
			<PasswordStrength
				minLength={8}
				new_password={new_password}
				confirm_password={confirm_password}
			/>
			
		`}/>
	</section>

	<section id={sectionIds.components.inputs.textarea} class="space-y-4">
		<h2>4. Textarea</h2>
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

	<section id={sectionIds.components.inputs.date_time_input} class="space-y-4">
		<h2>5. Date & Time Inputs</h2>
		<DateInput 
			id="date" 
			label="Select Date" 
			placeholder="Enter date"
			bind:value={selectedDate}
			maxWidth="300px"
		/>
		<TimeInput 
			id="time" 
			label="Select Time" 
			placeholder="Enter time"
			bind:value={selectedTime}
			maxWidth="300px"
		/>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { DateInput, TimeInput } from '@sierra-95/svelte-scaffold';
				let selectedDate = '';
				let selectedTime = '';
			<\/script>

			<DateInput 
				id="date" 
				label="Select Date" 
				placeholder="Enter date"
				bind:value={selectedDate}
				maxWidth="300px"
			/>
			<TimeInput 
				id="time" 
				label="Select Time" 
				placeholder="Enter time"
				bind:value={selectedTime}
				maxWidth="300px"
			/>
			
		`}/>
	</section>

	<section id={sectionIds.components.inputs.search_bar} class="space-y-4">
		<h2>6. Search Bar</h2>
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

	<section id={sectionIds.components.inputs.select} class="space-y-4">
		<h2>7. Select</h2>
		<Select 
			optionsBackground="var(--background)" 
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
				optionsBackground="var(--background)" 
				maxWidth="300px" 
				height="40px" 
				bind:value={selectedValue} 
				options={options} 
			/>
			
		`}/>
	</section>
	<section id={sectionIds.components.inputs.file_input} class="space-y-4">
		<h2>8. File Input</h2>
		<FileInput bind:processing onclick={handleUpload}  />
		<h3>Incase any errors occur during upload,
			<a href={routes.core.features.children.toast_manager} class="note">Toast Manager</a>
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
		<FileInputTable />
	</section>

	<section id={sectionIds.components.inputs.component_api} class="space-y-4">
		<Table title={propsTitle} table={propsTable}/>
		<Table title={eventHandlersTitle} table={eventHandlersTable}/>
		<Table title={stylingTitle} table={stylingTable}/>
	</section>
</main>
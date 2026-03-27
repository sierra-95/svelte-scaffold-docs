<script lang="ts">
	import {Button, ButtonFlip, ButtonMarquee, ButtonSwipe} from '@sierra-95/svelte-scaffold'
	import {RenderCode, sectionIds} from '$lib';
	import ButtonCustom from './_tables/buttonCustom.svelte';
	import ButtonDefault from './_tables/buttonDefault.svelte';

	const contained_buttons = [
		{ color: 'primary', title: 'Primary contained' },
		{ color: 'warning', title: 'Warning contained' },
		{ color: 'error', title: 'Error contained' }
	] as const;
	const outlined_buttons = [
		{ color: 'primary', title: 'Primary outlined' },
		{ color: 'warning', title: 'Warning outlined' },
		{ color: 'error', title: 'Error outlined' }
	] as const;
</script>


<title>Buttons</title>
<section id={sectionIds.components.buttons.default_button} class="space-y-4 mb-10">
	<h1>Buttons</h1>
	<h2>1. Default Buttons</h2>
	<div class="flex gap-4 flex-wrap">
	{#each contained_buttons as { color, title }}
		<Button variant="contained" color={color} title={title}>Button</Button>
	{/each}
	{#each outlined_buttons as { color, title }}
		<Button variant="outlined" color={color} title={title}>Button</Button>
	{/each}
		<Button variant="contained"  isLoading title="Loading" endIcon="fa-trash">Button</Button>
		<Button variant='contained' disabled title="Disabled" startIcon="fa-cloud-arrow-down">Button</Button>
		<Button pill variant='outlined' title="Pill"><i class="fa fa-chevron-right"></i></Button>
	</div>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { Button } from '@sierra-95/svelte-scaffold';
		<\/script>

		<Button
			title="Download"
			startIcon="fa-cloud-arrow-down"
			onclick={() => alert('Download Started!')}
		>Download
		</Button>
		
	`}/>
	<div class='space-y-4'>
		<h3 class="font-bold">1. Customizing with Tailwind</h3>
		<Button color="none" style="bg-green-500 text-white w-[100px]" startIcon="fa-star">Export</Button>
		<h3>You may also customize it using Tailwind via the <strong>style</strong> prop. To use your own color palette, set the <strong>color</strong> prop to "none".</h3>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { Button } from '@sierra-95/svelte-scaffold';
			<\/script>

			<Button color="none" style="bg-green-500 text-white w-[100px]" startIcon="fa-star">Export</Button>
		`}/>
		<h3 class="font-bold">2. Form Submission Example</h3>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { enhance } from '$app/forms';
				import { Button } from '@sierra-95/svelte-scaffold';
				
				let processing = false;
				let success = false;
				function handleEnhance({formData, cancel}) {
					processing = true;
					return ({ update, result }) => {
						processing = false;
						if(result.type === 'success' && result.data){
							success = true;
						}else{
							update();
						}
					};
				}
			<\/script>
			<form method="post" use:enhance={handleEnhance}>
				<Button 
					title="Submit Form"
					type="submit" 
					style="w-[150px]"
					isLoading={processing}
					disabled={success}
				>Submit
				</Button>
			</form>
		`}/>
	</div>
</section>

<section id={sectionIds.components.buttons.custom_button} class="space-y-4 mb-10">
	<h2>2. Custom Buttons</h2>
	<div class="flex gap-4 items-center">
		<ButtonSwipe />
		<ButtonMarquee/>
		<ButtonFlip />
	</div>    
	<h3>These buttons are not built to be as flexible compared to default buttons.</h3>
	<ol class="list-decimal pl-5">
		<li>They are designed to be used as-is, with minimal customization options.</li>
		<li>All have fixed dimensions (w × h), with <strong>Marquee</strong> as the exception. Marquee automatically adjusts its width based on text length.</li>
	</ol>
	<RenderCode
		lang="svelte"
		code={`
		<\script>
			import { goto } from '$app/navigation';
			import { ButtonMarquee } from '@sierra-95/svelte-scaffold';
		<\/script>

		<ButtonMarquee onclick={() => goto('/auth')} text='Sign In' bg='red' color = 'blue'  />

	`}/>
</section>

<section id={sectionIds.components.buttons.props} class="space-y-4">
	<h2>Default Buttons Table</h2>
	<div class='overflow-x-auto'><ButtonDefault/></div>
	<h2>Custom Buttons Table</h2>
	<div class='overflow-x-auto'><ButtonCustom/></div>
</section>

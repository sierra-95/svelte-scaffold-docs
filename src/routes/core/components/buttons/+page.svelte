<script lang="ts">
	import {Button, ButtonFlip, ButtonMarquee, ButtonSwipe} from '@sierra-95/svelte-scaffold'
	import {RenderCode, sectionIds} from '$lib';
	import Table from '$lib/Table.svelte';

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


	const DefaultButtonHeaders = ["Prop", "Type", "Default", "Description"];

	const DefaultButtonRows = [
		[
			{ content: "title" },
			{ content: "string" },
			{ content: "''" },
			{ content: "The button label content." }
		],
		[
			{ content: "type" },
			{ content: "string (button, submit, reset)" },
			{ content: "'button'" },
			{ content: "" }
		],
		[
			{ content: "onclick=&#123;() =&gt; your_function()&#125;" },
			{ content: "function(s)" },
			{ content: "" },
			{ content: "Function or functions triggered when the button is clicked." }
		],
		[
			{ content: "color" },
			{ content: "string (primary, warning, error, none)" },
			{ content: "'primary'" },
			{ content: "Sets the color scheme, used with <strong>variant</strong> to determine visual appearance." }
		],
		[
			{ content: "variant" },
			{ content: "string (contained, outlined)" },
			{ content: "'contained'" },
			{ content: "Defines the button style variant." }
		],
		[
			{ content: "style" },
			{ content: "string (Tailwind only)" },
			{ content: '""' },
			{ content: "Tailwind utility classes for custom styling." }
		],
		[
			{ content: "startIcon & endIcon" },
			{ content: "string (Font Awesome only)" },
			{ content: '""' },
			{ content: "Icons to display at the start or end of the button." }
		],
		[
			{ content: "disabled" },
			{ content: "boolean" },
			{ content: "false" },
			{ content: "Disables the button and blocks <strong>onClick</strong> actions." }
		],
		[
			{ content: "isLoading" },
			{ content: "boolean" },
			{ content: "false" },
			{ content: "Displays a spinner. Automatically disables the button while loading." }
		],
		[
			{ content: "pill" },
			{ content: "boolean" },
			{ content: "false" },
			{ content: "If true, applies full rounding (Tailwind <strong>rounded-full</strong>) to make the button pill-shaped." }
		],
		[
			{ content: "spinner" },
			{ content: "number" },
			{ content: '20' },
			{ content: "Controls the size of the loading spinner (in pixels) when <strong>isLoading</strong> is active." }
		],
		[
			{ content: "thickness" },
			{ content: "number" },
			{ content: '2' },
			{ content: "Defines the stroke thickness of the spinner icon (applies when <strong>isLoading</strong> is active)" }
		],
		[
			{ content: "html2canvas_ignore" },
			{ content: "string (true, false)" },
			{ content: "'false'" },
			{ content: "When set to <strong>'true'</strong>, activates data-html2canvas-ignore to exclude the button from screenshots." }
		]
	];

	const CustomButtonHeaders = ["Import Name", "Prop", "Type", "Default"];

	const CustomButtonRows = [
		[
			{ content: "ButtonSwipe", rowspan: 2 },
			{ content: "text" },
			{ content: "string" },
			{ content: "Button" }
		],
		[
			{ content: "bg / color" },
			{ content: "string" },
			{ content: "var(--primary-bg)/ #4B5563" }
		],
		[
			{ content: "ButtonSwipe", rowspan: 2 },
			{ content: "text" },
			{ content: "string" },
			{ content: "Hover me" }
		],
		[
			{ content: "bg / color" },
			{ content: "string" },
			{ content: "var(--primary-bg)/ #4B5563" }
		],
		[
			{ content: "ButtonFlip", rowspan: 5 },
			{ content: "front" },
			{ content: "string" },
			{ content: "front" }
		],
		[
			{ content: "back" },
			{ content: "string" },
			{ content: "back" }
		],
		[
			{ content: "bgFront" },
			{ content: "string" },
			{ content: "var(--primary-bg)" }
		],
		[
			{ content: "bgBack / color" },
			{ content: "string" },
			{ content: "#f4e5d4 / var(--button-text)" }
		]
	];
</script>


<title>Buttons</title>

<main class="space-y-4">
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

	<section id={sectionIds.components.buttons.default_button_props} class="space-y-4">
		<Table 
			title = {{
				name:"Component API"
			}}
			table ={{
				striped:true,
				headers: DefaultButtonHeaders ,
				rows: DefaultButtonRows,
				borderSize: "1px"
			}}
		/>
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

	<section id={sectionIds.components.buttons.custom_button_props} class="space-y-4">
		<Table 
			title = {{
				name:"Component API"
			}}
			table ={{
				striped:true,
				headers: CustomButtonHeaders ,
				rows: CustomButtonRows,
				borderSize: "1px"
			}}
		/>
	</section>

</main>
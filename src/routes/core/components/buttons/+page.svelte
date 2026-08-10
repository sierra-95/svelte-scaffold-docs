<script lang="ts">
	import {
		Button, ButtonFlip, ButtonMarquee, ButtonSwipe,ButtonTheme,
		ButtonHamburger, addToast, Table, ButtonWhatsappShare, Date, Time
	} from '@sierra-95/svelte-scaffold'
	import {RenderCode, routes, sectionIds} from '$lib';
	import { DefaultButtonTable, CustomButtonTable, ButtonHamburgerTable} from './tables';

	function handleHamburgerClick() {
		addToast({
			status: 'info',
			message: 'javascript:void(0). This is just a button. Use the link to view the prebuilt hamburger menu.'
		});
	}

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

<main class="space-y-4">
	<h1 class="sierra-docs-h1">Will you be my button?</h1>
	<title>Buttons</title>
	<ol class="sierra-docs-ol">
		<section id={sectionIds.components.buttons.default_button} class="space-y-4 mb-10">
			<li>Default Buttons</li>
			<div class="flex gap-4 flex-wrap">
			{#each contained_buttons as { color, title }}
				<Button variant="contained" color={color} title={title}>Button</Button>
			{/each}
			{#each outlined_buttons as { color, title }}
				<Button variant="outlined" color={color} title={title}>Button</Button>
			{/each}
				<Button variant="contained"  isLoading title="Loading" endIcon="fa-trash">Button</Button>
				<Button variant='contained' disabled title="Disabled" startIcon="fa-cloud-arrow-down">Button</Button>
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
				<Button unstyled style="background-color: #4CAF50; color: white; width: 200px;" startIcon="fa-star">Export</Button>
				<h3>You may also customize it via the <strong>style</strong> prop. To avoid side effects, use the <strong>unstyled</strong> prop.</h3>
				<RenderCode
					lang="svelte"
					code={`
					<\script>
						import { Button } from '@sierra-95/svelte-scaffold';
					<\/script>

					<Button unstyled style="background-color: #4CAF50; color: white; width: 200px;" startIcon="fa-star">Export</Button>
				`}/>
				<h3>Form Submission Example</h3>
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

		<section id={sectionIds.components.buttons.default_button_api} class="space-y-4">
			<Table 
				title = {DefaultButtonTable.title}
				table = {DefaultButtonTable.table}
			/>
		</section>

		<section id={sectionIds.components.buttons.custom_button} class="space-y-4 mb-10">
			<li>Custom Buttons</li>
			<div class="flex gap-4 items-center">
				<ButtonSwipe />
				<ButtonMarquee/>
				<ButtonFlip />
			</div>    
			<h3>These buttons are not built to be as flexible compared to default buttons.</h3>
			<p>They are designed to be used as-is, with minimal customization options.</p>
			<p>All have fixed dimensions (w × h), with <strong>Marquee</strong> as the exception. Marquee automatically adjusts its width based on text length.</p>
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

		<section id={sectionIds.components.buttons.custom_button_api} class="space-y-4">
			<Table 
				title = {CustomButtonTable.title}
				table = {CustomButtonTable.table}
			/>
		</section>

		<section id={sectionIds.components.buttons.hamburger_button} class="space-y-4">
			<li>Hamburger Button</li>
			<ButtonHamburger onclick={handleHamburgerClick} />
			<a href={routes.core.components.children.menus + '#' + sectionIds.components.menu.hamburger} class="note">View the Prebuilt Hamburger Menu</a>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { ButtonHamburger } from '@sierra-95/svelte-scaffold';
					
					let menuOpen = $state(false);

					function toggleMenu() {
						menuOpen = !menuOpen;
					}
				<\/script>

				<ButtonHamburger
					barWidth = "30px"
					barHeight = "3px"
					barColor = "black"
					barBorderRadius = "5px"
					barSpacing = "5px"
					onclick={toggleMenu}
				/>
			`}/>
			<Table
				title = {ButtonHamburgerTable.title}
				table = {ButtonHamburgerTable.table}
			/>
		</section>

		<section id={sectionIds.components.buttons.theme_button} class="space-y-4">
			<li>Theme Button</li>
			<div class="flex items-start">
				<ButtonTheme />
			</div>
			<h3>The theme button directly manipulates the <a href={routes.stores + '#' + sectionIds.stores_utils.stores.theme_store} class="note">Theme Store</a>.</h3>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import {ButtonTheme} from '@sierra-95/svelte-scaffold';
				<\/script>
				<ButtonTheme />
			`}/>
		</section>

		<section id={sectionIds.components.buttons.whatsapp_share} class="space-y-4">
			<li>WhatsApp Share</li>
			<h3>When clicked, the button will attempt to share the link on WhatsApp. Your website information is best displayed if Open Graph (OG) tags are configured.</h3>
			<h3>If the share fails, it falls back to copying the link.</h3>
			<ButtonWhatsappShare
				shareURL="https://yoursite.com"
				shareTitle="Cats & Coffee"
				shareText="A cat just knocked over a cup of coffee while debugging your code. Productivity level: questionable."
			/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { ButtonWhatsappShare } from '@sierra-95/svelte-scaffold';
				<\/script>

				<ButtonWhatsappShare
					shareURL="https://yoursite.com"
					shareTitle="Cats & Coffee"
					shareText="A cat just knocked over a cup of coffee while debugging your code. Productivity level: questionable."
				/>
			`}/>
		</section>
	</ol>
</main>
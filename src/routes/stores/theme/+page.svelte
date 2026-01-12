<script>
    import {ButtonTheme} from '@sierra-95/svelte-scaffold';
    import {RenderCode, routes, sectioning} from '$lib';
</script>

<section id={sectioning.stores.theme} class="space-y-4">
	<title>Theme Store</title>
	<h1>Theme Store</h1>
	<h3>The theme store is tightly integrated with the 
        <a href={routes.modules.layout.children.overview} class="note">Layout component</a> 
        and internal body styling.
    </h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { onMount } from 'svelte';
			import { theme } from '@sierra-95/svelte-scaffold';
			onMount(() => {
                theme.set('light');
            });
		<\/script>

	`}/>
    <h3>Note that updates made to the store are also saved to localStorage, ensuring they persist.</h3>
    <h2>Theme Button</h2>
    <div class="flex items-start">
        <ButtonTheme />
    </div>
    <h3>The theme button simplifies integration by directly manipulating the theme store.</h3>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
	        import {ButtonTheme} from '@sierra-95/svelte-scaffold';
		<\/script>
        <ButtonTheme />
	`}/>
</section>
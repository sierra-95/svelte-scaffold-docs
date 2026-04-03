<script>
    import { Hr, HrSplit, Checkbox } from '@sierra-95/svelte-scaffold';
    import {sectionIds, RenderCode} from '$lib';

    let checked=$state(false);
</script>

<title>General Components</title>
<section id={sectionIds.components.general.checkbox} class="space-y-4">
    <h1 style="color: var(--text)">General Components</h1>
    <h1>1. Checkbox</h1>
    <Checkbox bind:checked><p>I agree to the terms and conditions</p></Checkbox>
    <RenderCode
		lang="svelte"
		code={`
        <\script>
            import { Checkbox } from '@sierra-95/svelte-scaffold';
            let checked=$state(false);
        <\/script>
        <Checkbox bind:checked><p>I agree to the terms and conditions</p></Checkbox>
    `}/>
</section>
<section id={sectionIds.components.general.hr} class="space-y-4">
    <h1>2. Hr</h1>
    <h2>1. Default</h2>
    <div><Hr color="var(--primary-bg)" width="90%" /></div>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { Hr } from '@sierra-95/svelte-scaffold';
		<\/script>
        
        <Hr color="var(--primary-bg)" width="90%" />
	`}/>
    <h2>2. Split</h2>
    <HrSplit margin="1rem">Split HR</HrSplit>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { HrSplit } from '@sierra-95/svelte-scaffold';
		<\/script>
        
        <HrSplit margin="1rem">Split HR</HrSplit>
	`}/>
</section>
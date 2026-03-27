<script>
    import { Hr, HrSplit } from '@sierra-95/svelte-scaffold';
    import {sectionIds, RenderCode} from '$lib';
</script>


<section id={sectionIds.components.hr.default} class="space-y-4">
    <h1>HR</h1>
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
</section>

<section id={sectionIds.components.hr.split} class="space-y-4">
    <h2>2. Split</h2>
    <HrSplit text="Split HR" margin="1rem" />
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { HrSplit } from '@sierra-95/svelte-scaffold';
		<\/script>
        
        <HrSplit text="Split HR" margin="1rem" />
	`}/>
</section>
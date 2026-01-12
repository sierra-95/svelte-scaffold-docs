<script>
    import { Date, Time} from '@sierra-95/svelte-scaffold';
    import {RenderCode, sectioning} from '$lib';

    const timezone = "America/New_York";
</script>

<section id={sectioning.components.date} class="space-y-4">
	<title>DateTime</title>
	<h1>Date & Time</h1>
    <Date {timezone}/>

    <Time {timezone}/>
    <RenderCode
		lang="svelte"
		code={`
		<\script>
            import { Date, Time} from '@sierra-95/svelte-scaffold';

            const timezone = "America/New_York";
		<\/script>
        <Date {timezone}/>
        <Time {timezone}/>
	`}/>
</section>
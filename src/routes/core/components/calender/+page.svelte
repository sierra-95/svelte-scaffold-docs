<script>
    import { Date, Time} from '@sierra-95/svelte-scaffold';
    import {RenderCode, sectionIds} from '$lib';

    const timezone = "America/New_York";
</script>


<title>Calender</title>
<section id={sectionIds.components.calender.date_picker} class="space-y-4">
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
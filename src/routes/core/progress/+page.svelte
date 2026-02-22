<script lang="ts">
	import {CircularProgress, LinearProgress, CustomProgress} from '@sierra-95/svelte-scaffold';
	import {RenderCode, sectionIds} from '$lib';
</script>


<title>Progress</title>
<main class="space-y-4">
	<h1>Progress</h1>
	<section id={sectionIds.components.progress.circular_progress} class="space-y-4 mb-10">
		<h2>Circular Progress</h2>
		<div class="flex flex-wrap gap-5">
			<CircularProgress thickness={2} size={40}/>
			<CircularProgress size={45} color="var(--warning-bg)"/>
			<CircularProgress color="var(--error-bg)"/>
		</div>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { CircularProgress } from '@sierra-95/svelte-scaffold';
			<\/script>

			<CircularProgress size={45} color="var(--warning-bg)"/>

		`}/>
	</section>

	<section id={sectionIds.components.progress.linear_progress} class="space-y-4 mb-10">
		<h2>Linear Progress</h2>
		<LinearProgress/>
		<LinearProgress color="var(--warning-bg)"/>
		<LinearProgress color="var(--error-bg)"/>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { LinearProgress } from '@sierra-95/svelte-scaffold';
			<\/script>
			<LinearProgress color="var(--error-bg)"/>
		`}/>
	</section>

	<section id={sectionIds.components.progress.custom_progress} class="space-y-4 mb-10">
		<h2>Custom Progress</h2>
		<CustomProgress value={30}/>
		<CustomProgress value={60} color="var(--warning-bg)"/>
		<CustomProgress value={90} color="var(--error-bg)"/>
		<RenderCode
			lang="svelte"
			code={`
			<\script>
				import { CustomProgress } from '@sierra-95/svelte-scaffold';
			<\/script>
			<CustomProgress value={60} height="7px" color="var(--warning-bg)"/>
		`}/>
	</section>
</main>
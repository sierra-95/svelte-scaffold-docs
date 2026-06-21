<script lang="ts">
	import {CircularProgress, LinearProgress, CustomProgress} from '@sierra-95/svelte-scaffold';
	import {RenderCode, sectionIds} from '$lib';
</script>

<main class="space-y-4">
	<title>Progress</title>
	<h1>Progress</h1>
	<ol class="sierra-docs-ol">
		<section id={sectionIds.components.progress.circular_progress} class="space-y-4 mb-10">
			<li>Circular Progress</li>
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
			<li>Linear Progress</li>
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
			<li>Custom Progress</li>
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
	</ol>
</main>
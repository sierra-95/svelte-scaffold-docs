<script lang="ts">
	import {CircularProgress, LinearProgress, CustomProgress} from '@sierra-95/svelte-scaffold';
	import {RenderCode, sectionIds} from '$lib';
</script>

<main class="space-y-4">
	<title>Progress</title>
	<h1 class="sierra-docs-h1">Trust me bro %</h1>
	<ol class="sierra-docs-ol">
		<section id={sectionIds.components.progress.circular_progress} class="space-y-4 mb-10">
			<li>Circular Progress</li>
			<div class="flex flex-wrap gap-5">
				<CircularProgress thickness={2} size={40}/>
				<CircularProgress size={45} color="var(--ss-warning)"/>
				<CircularProgress color="var(--ss-error)"/>
			</div>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { CircularProgress } from '@sierra-95/svelte-scaffold';
				<\/script>

				<CircularProgress size={45} color="var(--ss-warning)"/>

			`}/>
		</section>

		<section id={sectionIds.components.progress.linear_progress} class="space-y-4 mb-10">
			<li>Linear Progress</li>
			<LinearProgress/>
			<LinearProgress color="var(--ss-warning)"/>
			<LinearProgress color="var(--ss-error)"/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { LinearProgress } from '@sierra-95/svelte-scaffold';
				<\/script>
				<LinearProgress color="var(--ss-error)"/>
			`}/>
		</section>

		<section id={sectionIds.components.progress.custom_progress} class="space-y-4 mb-10">
			<li>Custom Progress</li>
			<CustomProgress value={30}/>
			<CustomProgress value={60} color="var(--ss-warning)"/>
			<CustomProgress value={90} color="var(--ss-error)"/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { CustomProgress } from '@sierra-95/svelte-scaffold';
				<\/script>
				<CustomProgress value={60} height="7px" color="var(--ss-warning)"/>
			`}/>
		</section>
	</ol>
</main>
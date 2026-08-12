<script lang="ts">
	import {CircularProgress, LinearProgress, CustomProgress} from '@sierra-95/svelte-scaffold';
	import {RenderCode} from '$lib';
	import { routes } from '$lib/assets/company';
</script>

<main class="space-y-6">
	<title>Progress</title>
	<h1 class="sierra-docs-h1">Trust me bro %</h1>

	<ol class="sierra-docs-ol space-y-4">
		<section id={routes.core.components.children.progress.ids.circular_progress} data-title="Circular Progress" class="space-y-4">
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

		<section id={routes.core.components.children.progress.ids.linear_progress} data-title="Linear Progress" class="space-y-4">
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

		<section id={routes.core.components.children.progress.ids.custom_progress} data-title="Custom Progress" class="space-y-4">
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
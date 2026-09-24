<script lang="ts">
	import {CircularProgress, LinearProgress, CustomProgress, Table} from '@sierra-95/svelte-scaffold';
	import {RenderCode} from '$lib';
	import { routes } from '$lib/assets/company';
	import { CustomProgressTable, CircularProgressTable } from './table';
</script>


<title>Progress</title>
<main class="space-y-6">
	<h1 class="sierra-docs-h1">Scaffold Progress<span>Almost there… probably</span></h1>
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
			<Table title={CircularProgressTable.title} table={CircularProgressTable.table}/>
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
			<CustomProgress value={60} styleC={{background: "var(--ss-warning)"}}/>
			<CustomProgress value={90} styleC={{background: "var(--ss-error)"}}/>
			<RenderCode
				lang="svelte"
				code={`
				<\script>
					import { CustomProgress } from '@sierra-95/svelte-scaffold';
				<\/script>
				<CustomProgress value={60} styleC={{background: "var(--ss-warning)"}}/>
			`}/>
			<Table title={CustomProgressTable.title} table={CustomProgressTable.table}/>
		</section>
	</ol>
</main>
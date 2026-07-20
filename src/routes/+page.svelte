<script lang="ts">
	import { goto } from '$app/navigation';
	import { routes, sectionIds } from '$lib';
	import { ButtonFlip } from '@sierra-95/svelte-scaffold';
</script>

<title>Getting Started</title>
<section
	id={sectionIds.overview}
	class="mx-auto max-w-300 px-8 py-16 sm:px-4 sm:py-8 md:px-8 md:py-16"
>
	<!-- Welcome -->
	<div class="mb-12 text-center">
		<p class="mb-2 text-sm font-medium tracking-widest text-(--text-secondary) uppercase">
			Welcome to
		</p>
		<h1
			class="font-mono text-2xl font-extrabold tracking-[-0.02em] text-(--primary-bg) sm:text-3xl"
		>
			@sierra-95/svelte-scaffold
		</h1>
	</div>

	<!-- Hero -->
	<div class="text-center">
		<p class="mx-auto mb-8 max-w-150 text-xl leading-relaxed text-(--text-secondary) sm:text-base">
			A powerful Svelte scaffold with pre-built components, modules, and stores to jumpstart your
			project.
		</p>
		<ButtonFlip onclick={() => goto(routes.installation)} front="Get Started" back="Lets Go!" />
	</div>

	<!-- Features -->
	<div class="mb-16 rounded-2xl px-8 py-12 sm:px-0 sm:py-8">
		<div
			class="mb-8 flex items-end justify-between gap-4 border-b border-(--text-secondary)/20 pb-4 sm:flex-col sm:items-start"
		>
			<div>
				<p class="mb-2 text-xs font-bold tracking-[0.2em] text-(--primary-bg) uppercase">
					Explore the toolkit
				</p>
				<h2 class="text-2xl font-bold">What's Inside</h2>
			</div>
			<span class="text-sm text-(--text-secondary)">Five ways to ship faster</span>
		</div>

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-1">
			<a
				href={routes.core.components.children.buttons}
				class="group relative overflow-hidden rounded-2xl border border-(--primary-bg)/25 bg-(--primary-bg)/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-(--primary-bg) hover:shadow-lg sm:p-5"
			>
				<span class="mb-8 block font-mono text-sm text-(--primary-bg)/60">01</span>
				<span class="mb-2 flex items-center justify-between text-lg font-bold text-(--primary-bg)">
					Components
					<span class="text-xl transition-transform duration-300 group-hover:translate-x-1">↗</span>
				</span>
				<span class="block leading-relaxed text-(--text-secondary)"
					>Buttons, inputs, modals, toasts, progress bars, date pickers, and more</span
				>
				<span
					class="absolute -top-8 -right-8 h-24 w-24 rounded-full border-8 border-(--primary-bg)/10"
				></span>
			</a>

			<a
				href={routes.modules.editor}
				class="group relative overflow-hidden rounded-2xl border border-(--text-secondary)/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-(--primary-bg) hover:shadow-lg sm:p-5"
			>
				<span class="mb-8 block font-mono text-sm text-(--primary-bg)/60">02</span>
				<span class="mb-2 flex items-center justify-between text-lg font-bold text-(--primary-bg)">
					Modules
					<span class="text-xl transition-transform duration-300 group-hover:translate-x-1">↗</span>
				</span>
				<span class="block leading-relaxed text-(--text-secondary)"
					>Layout system, file picker, text editor and more</span
				>
				<span
					class="absolute -right-4 -bottom-10 h-24 w-24 rotate-45 border-8 border-(--primary-bg)/10"
				></span>
			</a>

			<a
				href={routes.core.features.children.global_search}
				class="group relative overflow-hidden rounded-2xl border border-(--text-secondary)/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-(--primary-bg) hover:shadow-lg sm:p-5"
			>
				<span class="mb-8 block font-mono text-sm text-(--primary-bg)/60">03</span>
				<span class="mb-2 flex items-center justify-between text-lg font-bold text-(--primary-bg)">
					Features & Random Stuff
					<span class="text-xl transition-transform duration-300 group-hover:translate-x-1">↗</span>
				</span>
				<span class="block leading-relaxed text-(--text-secondary)"
					>Global Search, Toast Manager, Avatars, Carousels, and more</span
				>
			</a>

			<a
				href={routes.stores}
				class="group relative overflow-hidden rounded-2xl border border-(--text-secondary)/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-(--primary-bg) hover:shadow-lg sm:p-5"
			>
				<span class="mb-8 block font-mono text-sm text-(--primary-bg)/60">04</span>
				<span class="mb-2 flex items-center justify-between text-lg font-bold text-(--primary-bg)">
					Stores
					<span class="text-xl transition-transform duration-300 group-hover:translate-x-1">↗</span>
				</span>
				<span class="block leading-relaxed text-(--text-secondary)"
					>Theme management, user state, and general app state stores</span
				>
			</a>

			<div
				class="relative overflow-hidden rounded-2xl border border-dashed border-(--text-secondary)/30 p-6 sm:p-5"
			>
				<span class="mb-8 block font-mono text-sm text-(--primary-bg)/60">05</span>
				<span class="mb-2 block text-lg font-bold text-(--primary-bg)">Built with Svelte</span>
				<span class="block leading-relaxed text-(--text-secondary)"
					>Modern, reactive, and efficient.</span
				>
				<span class="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-(--primary-bg)/10"
				></span>
			</div>
		</div>
	</div>
</section>

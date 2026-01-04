<script lang="ts">
  import { goto } from '$app/navigation';
  import { routes } from '$lib';
  import { ButtonFlip } from '@sierra-95/svelte-scaffold';
</script>

<main id='scaffold-overview' class="mx-auto max-w-[1200px] px-8 py-16 md:px-8 md:py-16 sm:px-4 sm:py-8 h-full">
  <!-- Welcome -->
  <div class="mb-12 text-center">
    <p class="mb-2 text-sm font-medium uppercase tracking-widest text-(--text-secondary)"
    >Welcome to
    </p>
    <h1 class="font-mono text-2xl font-extrabold tracking-[-0.02em] text-(--primary-bg) sm:text-3xl"
    >@sierra-95/svelte-scaffold
    </h1>
  </div>

  <!-- Hero -->
  <div class="text-center">
    <p class="mx-auto mb-8 max-w-[600px] text-xl leading-relaxed text-(--text-secondary) sm:text-base"
    >A powerful Svelte scaffold with pre-built components, modules, and stores to jumpstart your project.
    </p>
    <ButtonFlip onclick={() => goto(routes.installation)} front="Get Started" back="Lets Go!"/>
  </div>

  <!-- Features -->
  <div class="mb-16 rounded-2xl px-8 py-12">
    <h2 class="mb-8 text-center text-2xl font-bold">
      What's Inside
    </h2>

    <div
      class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
    >
      <div class="p-6">
        <a href={routes.core.children.buttons}
          class="mb-2 block text-sm font-bold uppercase tracking-wide text-(--primary-bg) hover:underline"
        >Components
        </a>
        <p class="leading-relaxed text-(--text-secondary)">
          Buttons, inputs, modals, toasts, progress bars, date pickers, and more
        </p>
      </div>

      <div class="p-6">
        <a href={routes.modules.editor}
          class="mb-2 block text-sm font-bold uppercase tracking-wide text-(--primary-bg) hover:underline"
        >Modules
        </a>
        <p class="leading-relaxed text-(--text-secondary)">
          Reusable layout system, file picker with backend integration, and rich text editor
        </p>
      </div>

      <div class="p-6">
        <a href={routes.stores.general_stores}
          class="mb-2 block text-sm font-bold uppercase tracking-wide text-(--primary-bg) hover:underline"
        >Stores
        </a>
        <p class="leading-relaxed text-(--text-secondary)">
          Theme management, user state, and general app state stores
        </p>
      </div>

      <div class="p-6">
        <span
          class="mb-2 block text-sm font-bold uppercase tracking-wide text-(--primary-bg)"
        >
          Built with Svelte
        </span>
        <p class="leading-relaxed text-(--text-secondary)">
          Modern, reactive, and efficient.
        </p>
      </div>
    </div>
  </div>
</main>

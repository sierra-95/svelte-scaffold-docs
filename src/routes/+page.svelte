<script lang="ts">
  import { routes } from '$lib/assets/company';

  const sections = [
  {
    title: "Components",
    href: routes.core.components.base,
    description: "Buttons, inputs, modals, toasts, progress bars, date pickers, and more"
  },
  {
    title: "Modules",
    href: routes.modules.editor.path,
    description: "Layout system, File Picker, Editor and more"
  },
  {
    title: "Features",
    href: routes.core.features.base,
    description: "Toast Manager"
  },
  {
    title: "Utilities",
    href: routes.core.utilities.path,
    description: "Avatars, Carousels, Color Picker, WhatsApp Share and more"
  },
  {
    title: "Stores",
    href: routes.stores.path,
    description: "Theme management, user state, and general app state stores"
  },
  {
    title: "Utils",
    href: routes.utils.path,
    description: "isValidEmail, handleRedirect and other utility functions"
  } 
];
</script>

<style>
  .brand-name {
    font-family:  'Striper Regular', sans-serif;
    font-size: 3rem;
    line-height: 0.86;
  }
  .brand-products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .brand-products a {
    font-family:  'TrenchSlab Regular', sans-serif;
  }
  @media (max-width: 768px) {
    .brand-name {
      font-size: 2rem;
    }
  }
</style>
<title>Getting Started</title>
<section class="mx-auto max-w-300 px-8 py-16 md:px-8 md:py-16 sm:px-4 sm:py-8">
  <div class="space-y-4">
    <h1 class="brand-name">@sierra-95/svelte-scaffold</h1>
    <p>A powerful Svelte scaffold with pre-built components, modules, and stores to jumpstart your project.</p>
    <!-- <ButtonFlip onclick={() => goto(routes.installation)} front="Get Started" back="Lets Go!"/> -->
  </div>
  <div class="brand-products">
    {#each sections as section}
      <div>
        <a
          href={section.href}
          class="mb-2 block text-sm font-bold uppercase tracking-wide underline hover:text-(--ss-neutral) transition-colors duration-300"
        >
          {section.title}
        </a>

        <p class="leading-relaxed">
          {section.description}
        </p>
      </div>
    {/each}
    </div>
</section>

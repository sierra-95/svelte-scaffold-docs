<script lang="ts">
  import { routes, sectionIds } from '$lib';

  const sections = [
  {
    title: "Components",
    href: routes.core.components.children.buttons,
    description: "Buttons, inputs, modals, toasts, progress bars, date pickers, and more"
  },
  {
    title: "Modules",
    href: routes.modules.editor,
    description: "Layout system, file picker, text editor and more"
  },
  {
    title: "Features",
    href: routes.core.features.children.global_search,
    description: "Global Search, Toast Manager"
  },
  {
    title: "Random Stuff",
    href: routes.core.random_stuff,
    description: "Avatars, Carousels, Color Picker, WhatsApp Share and more"
  },
  {
    title: "Stores",
    href: routes.stores,
    description: "Theme management, user state, and general app state stores"
  },
  {
    title: "Utils",
    href: routes.utils,
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
<section id={sectionIds.overview} class="mx-auto max-w-300 px-8 py-16 md:px-8 md:py-16 sm:px-4 sm:py-8">
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

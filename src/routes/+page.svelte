<script lang="ts">
  import { routes, resources } from '$lib/assets/company';

  const sections = [
    {
      number: '01',
      title: 'Components',
      href: routes.core.components.base,
      description: 'Buttons, inputs, modals, toasts, progress bars, date pickers, and more',
      icon: '✦'
    },
    {
      number: '02',
      title: 'Modules',
      href: routes.modules.editor.path,
      description: 'A flexible layout system, File Picker, Editor, and more',
      icon: '▧'
    },
    {
      number: '03',
      title: 'Features',
      href: routes.core.features.base,
      description: 'Thoughtful extras like a ready-to-use Toast Manager',
      icon: '↗'
    },
    {
      number: '04',
      title: 'Utilities',
      href: routes.core.utilities.path,
      description: 'Avatars, carousels, color tools, sharing, and more',
      icon: '⌘'
    },
    {
      number: '05',
      title: 'Stores',
      href: routes.stores.path,
      description: 'Theme, user, and app state without starting from scratch',
      icon: '◉'
    },
    {
      number: '06',
      title: 'Utils',
      href: routes.utils.path,
      description: 'Handy helpers for validation, redirects, and everyday tasks',
      icon: '↳'
    }
  ];
</script>

<svelte:head>
  <title>@sierra-95/svelte-scaffold — Start building</title>
  <meta
    name="description"
    content="A Svelte toolkit packed with useful components, modules, stores, and utilities. Spend less time on setup and more time building."
  />
</svelte:head>

<div class="landing-page">
  <section class="hero-panel">
    <div class="hero-copy">
      <div class="eyebrow"><span class="eyebrow-dot"></span> A little less setup. A lot more making.</div>
      <h1>Less setup.<br /><span>More making.</span></h1>
      <p class="hero-description">
        The useful bits your next Svelte project needs, already in one place. Pick up a component,
        plug in a module, and get straight to the good part.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href={routes.installation.path}>
          Get started <span aria-hidden="true">↗</span>
        </a>
        <a class="button button-secondary" href={routes.core.components.base}>Explore components</a>
      </div>
      <div class="hero-footnote"><span class="footnote-spark">✦</span> Meet your new favorite starting point.</div>
    </div>

    <div class="hero-art" aria-hidden="true">
      <div class="art-glow"></div>
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <div class="floating-label label-top"><span class="label-dot"></span> MADE FOR MOMENTUM</div>
      <div class="preview-window">
        <div class="preview-topbar">
          <div class="window-dots"><i></i><i></i><i></i></div>
          <span>svelte-scaffold</span>
          <span class="preview-topbar-mark">S/</span>
        </div>
        <div class="preview-content">
          <div class="preview-kicker">YOUR NEXT PROJECT</div>
          <div class="preview-title">A head start<br />looks good on you.</div>
          <div class="preview-rule"></div>
          <div class="preview-row">
            <div class="preview-tile tile-blue"><span>✦</span><small>Components</small></div>
            <div class="preview-tile tile-lilac"><span>▧</span><small>Modules</small></div>
            <div class="preview-tile tile-peach"><span>◉</span><small>Stores</small></div>
          </div>
          <div class="preview-bottom">
            <div class="preview-avatar">S</div>
            <div class="preview-bottom-copy"><strong>Less boilerplate.</strong><small>More room for your idea.</small></div>
            <div class="preview-arrow">↗</div>
          </div>
        </div>
      </div>
      <div class="floating-label label-bottom"><span class="label-spark">✦</span> BUILT TO BE BUILT ON</div>
      <div class="art-sticker">GO<br />MAKE<br />THINGS<span>↗</span></div>
    </div>
  </section>

  <section class="toolkit-section" aria-labelledby="toolkit-heading">
    <div class="section-heading">
      <div>
        <div class="section-kicker">GOOD THINGS, ALL TOGETHER</div>
        <h2 id="toolkit-heading">A head start in every direction.</h2>
      </div>
      <p>Find your next building block.<br />Everything here is ready when you are.</p>
    </div>

    <div class="brand-products">
      {#each sections as section}
        <a class="product-card" href={section.href}>
          <div class="product-card-top">
            <span class="product-number">{section.number} / TOOLKIT</span>
            <span class="product-icon" aria-hidden="true">{section.icon}</span>
          </div>
          <h3>{section.title}<span aria-hidden="true">↗</span></h3>
          <p>{section.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="install-banner">
    <div class="banner-mark" aria-hidden="true">S/</div>
    <div class="banner-copy">
      <span>THE FIRST STEP IS A SMALL ONE</span>
      <h2>Let’s make something.</h2>
    </div>
    <a href={routes.installation.path} class="banner-link">Read the install guide <span aria-hidden="true">↗</span></a>
  </section>

  <div class="brand-signoff">
    <span>@sierra-95/svelte-scaffold</span>
    <a href={resources.package.npm} target="_blank" rel="noreferrer">Find it on npm ↗</a>
  </div>
</div>

<style>
  .landing-page {
    --ink: #171a22;
    --muted: #727985;
    --accent-blue: #72b7ff;
    max-width: 1320px;
    margin: 0 auto;
    padding: clamp(1.25rem, 4vw, 3.5rem);
    color: var(--ink);
  }

  .hero-panel {
    position: relative;
    display: grid;
    grid-template-columns: 1.04fr 0.96fr;
    align-items: center;
    min-height: 510px;
    overflow: hidden;
    isolation: isolate;
    padding: clamp(2rem, 5vw, 4.5rem);
    border: 1px solid #252e3c;
    border-radius: 28px;
    background: #111722;
    color: #f6f6ef;
  }

  .hero-panel::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    background: radial-gradient(ellipse at 76% 52%, rgb(66 139 220 / 22%), transparent 42%),
      linear-gradient(125deg, transparent 40%, rgb(255 255 255 / 2%));
    content: '';
  }

  .hero-copy {
    position: relative;
    z-index: 2;
    max-width: 570px;
  }

  .eyebrow,
  .section-kicker,
  .preview-kicker,
  .floating-label,
  .banner-copy > span {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.13em;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-bottom: 1.6rem;
    color: #c5c9bd;
  }

  .eyebrow-dot,
  .label-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--accent-blue);
    box-shadow: 0 0 14px rgb(114 183 255 / 60%);
  }

  .hero-copy h1 {
    margin: 0;
    font-family: 'Clash Display', 'Arial', sans-serif;
    font-size: clamp(3.25rem, 5.7vw, 5.25rem);
    font-weight: 400;
    letter-spacing: -0.075em;
    line-height: 0.93;
  }

  .hero-copy h1 span {
    color: var(--accent-blue);
  }

  .hero-description {
    max-width: 440px;
    margin: 1.6rem 0 1.8rem;
    color: #b4b9ad;
    font-size: 1rem;
    line-height: 1.75;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
  }

  .button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 0.8rem 1.15rem;
    border: 1px solid transparent;
    border-radius: 7px;
    font-size: 0.86rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
  }

  .button:hover,
  .banner-link:hover {
    transform: translateY(-2px);
  }

  .button-primary {
    background: var(--accent-blue);
    color: #132033;
  }

  .button-primary:hover {
    background: #a9d5ff;
  }

  .button-secondary {
    border-color: #41463e;
    color: #f6f6ef;
  }

  .button-secondary:hover {
    border-color: #929987;
  }

  .hero-footnote {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-top: 1.5rem;
    color: #939a8c;
    font-size: 0.76rem;
  }

  .footnote-spark {
    color: var(--accent-blue);
    font-size: 1rem;
  }

  .hero-art {
    position: relative;
    min-height: 390px;
  }

  .art-glow {
    position: absolute;
    top: 12%;
    right: 1%;
    width: 78%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(circle, rgb(83 161 245 / 22%), rgb(124 147 255 / 10%) 45%, transparent 70%);
    filter: blur(10px);
  }

  .orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgb(240 242 222 / 12%);
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  .orbit-one {
    width: 108%;
    height: 70%;
  }

  .orbit-two {
    width: 120%;
    height: 85%;
    transform: translate(-50%, -50%) rotate(38deg);
  }

  .preview-window {
    position: absolute;
    top: 50%;
    left: 50%;
    width: min(94%, 385px);
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 65%);
    border-radius: 13px;
    background: #f5f5ee;
    box-shadow: 0 28px 90px rgb(0 0 0 / 38%);
    color: #1b2019;
    transform: translate(-48%, -48%) rotate(3deg);
  }

  .preview-topbar {
    display: flex;
    height: 39px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.85rem;
    border-bottom: 1px solid #e4e5dc;
    background: #fbfbf7;
    color: #74786f;
    font-size: 0.65rem;
  }

  .window-dots {
    display: flex;
    gap: 4px;
  }

  .window-dots i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d5d7cd;
  }

  .preview-topbar-mark {
    color: #34445b;
    font-family: 'Clash Display', sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .preview-content {
    padding: 1.45rem 1.5rem 1.15rem;
  }

  .preview-kicker {
    color: #777c6f;
    font-size: 0.57rem;
  }

  .preview-title {
    margin-top: 0.45rem;
    font-family: 'Clash Display', sans-serif;
    font-size: clamp(1.65rem, 3vw, 2.1rem);
    letter-spacing: -0.055em;
    line-height: 1.02;
  }

  .preview-rule {
    height: 1px;
    margin: 1rem 0;
    background: #e0e2d8;
  }

  .preview-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.55rem;
  }

  .preview-tile {
    display: flex;
    min-height: 76px;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.65rem;
    border-radius: 6px;
  }

  .preview-tile > span {
    font-size: 1.25rem;
  }

  .preview-tile small {
    font-size: 0.58rem;
    font-weight: 700;
  }

  .tile-blue {
    background: #d9eaff;
  }

  .tile-blue > span {
    color: #3a77b6;
  }

  .tile-lilac {
    background: #e0e5ff;
  }

  .tile-peach {
    background: #d9f0f2;
  }

  .preview-bottom {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-top: 1rem;
  }

  .preview-avatar {
    display: grid;
    width: 29px;
    height: 29px;
    place-items: center;
    border-radius: 50%;
    background: #24334a;
    color: var(--accent-blue);
    font-family: 'Clash Display', sans-serif;
    font-size: 0.85rem;
  }

  .preview-bottom-copy {
    display: grid;
    gap: 2px;
    font-size: 0.63rem;
  }

  .preview-bottom-copy small {
    color: #777c72;
    font-size: 0.58rem;
  }

  .preview-arrow {
    display: grid;
    width: 27px;
    height: 27px;
    place-items: center;
    margin-left: auto;
    border-radius: 50%;
    background: #24334a;
    color: var(--accent-blue);
    font-size: 0.8rem;
  }

  .floating-label {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #e7eadf;
    font-size: 0.55rem;
    white-space: nowrap;
  }

  .label-top {
    top: -2%;
    right: 2%;
    padding: 0.7rem 0.85rem;
    border: 1px solid rgb(255 255 255 / 15%);
    border-radius: 999px;
    background: rgb(30 40 56 / 88%);
    transform: rotate(5deg);
  }

  .label-dot {
    width: 6px;
    height: 6px;
  }

  .label-bottom {
    bottom: -2%;
    left: -1%;
    padding: 0.7rem 0.85rem;
    border: 1px solid rgb(255 255 255 / 15%);
    border-radius: 999px;
    background: rgb(30 40 56 / 88%);
    transform: rotate(-4deg);
  }

  .label-spark {
    color: var(--accent-blue);
  }

  .art-sticker {
    position: absolute;
    right: 1%;
    bottom: 2%;
    display: grid;
    width: 73px;
    height: 73px;
    align-content: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--accent-blue);
    color: #14243a;
    font-size: 0.55rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.15;
    transform: rotate(10deg);
  }

  .art-sticker span {
    position: absolute;
    top: 10px;
    right: 13px;
    font-size: 0.7rem;
  }

  .toolkit-section {
    padding: clamp(3rem, 6vw, 5.25rem) 0 2.5rem;
  }

  .section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.4rem;
  }

  .section-kicker {
    margin-bottom: 0.65rem;
    color: #74839a;
    font-size: 0.62rem;
  }

  .section-heading h2,
  .banner-copy h2 {
    margin: 0;
    font-family: 'Clash Display', 'Arial', sans-serif;
    font-size: clamp(1.9rem, 3.4vw, 2.8rem);
    font-weight: 400;
    letter-spacing: -0.055em;
    line-height: 1.05;
  }

  .section-heading > p {
    margin: 0 0 0.15rem;
    color: var(--muted);
    font-size: 0.85rem;
    line-height: 1.6;
  }

  .brand-products {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .product-card {
    display: flex;
    min-height: 184px;
    flex-direction: column;
    padding: 1.15rem 1.2rem 1.25rem;
    border: 1px solid #e9eae3;
    border-radius: 10px;
    background: #fbfbf8;
    color: inherit;
    text-decoration: none;
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .product-card:hover {
    transform: translateY(-4px);
    border-color: #cbdaf0;
    box-shadow: 0 12px 28px rgb(40 76 128 / 9%);
  }

  .product-card:focus-visible,
  .button:focus-visible,
  .banner-link:focus-visible,
  .brand-signoff a:focus-visible {
    outline: 3px solid #4b93dc;
    outline-offset: 4px;
  }

  .product-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-number {
    color: #83887d;
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .product-icon {
    display: grid;
    width: 30px;
    height: 30px;
    place-items: center;
    border-radius: 8px;
    background: #eaf1fa;
    color: #354c6c;
    font-size: 1.15rem;
  }

  .product-card h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.75rem 0 0.35rem;
    font-family: 'Clash Display', 'Arial', sans-serif;
    font-size: 1.45rem;
    font-weight: 400;
    letter-spacing: -0.04em;
  }

  .product-card h3 span {
    color: #8b927f;
    font-family: sans-serif;
    font-size: 0.95rem;
    transition: transform 180ms ease, color 180ms ease;
  }

  .product-card:hover h3 span {
    color: #315b89;
    transform: translate(2px, -2px);
  }

  .product-card p {
    max-width: 290px;
    margin: 0;
    color: var(--muted);
    font-size: 0.78rem;
    line-height: 1.55;
  }

  .install-banner {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-top: 0.5rem;
    padding: 1.55rem 1.8rem;
    border-radius: 12px;
    background: #eaf1fa;
  }

  .banner-mark {
    display: grid;
    width: 48px;
    height: 48px;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 50%;
    background: #1a2433;
    color: var(--accent-blue);
    font-family: 'Clash Display', sans-serif;
    font-size: 1rem;
    font-weight: 700;
  }

  .banner-copy > span {
    color: #60738e;
    font-size: 0.56rem;
  }

  .banner-copy h2 {
    margin-top: 0.25rem;
    font-size: 1.55rem;
  }

  .banner-link {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
    padding: 0.85rem 1rem;
    border-radius: 6px;
    background: #1a2433;
    color: #f7f8f1;
    font-size: 0.78rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform 180ms ease;
  }

  .banner-link span {
    color: var(--accent-blue);
  }

  .brand-signoff {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1.2rem;
    color: #83887d;
    font-size: 0.68rem;
  }

  .brand-signoff a {
    color: inherit;
    text-decoration: none;
  }

  .brand-signoff a:hover {
    color: #343d2b;
  }

  @media (max-width: 900px) {
    .hero-panel {
      grid-template-columns: 1fr 0.8fr;
      padding: 2.5rem;
    }

    .hero-copy h1 {
      font-size: clamp(3.25rem, 7vw, 5rem);
    }

    .hero-art {
      min-height: 345px;
    }

    .preview-window {
      width: 100%;
    }

    .label-top {
      right: -5%;
    }
  }

  @media (max-width: 680px) {
    .landing-page {
      padding: 1rem;
    }

    .hero-panel {
      width: calc(100% + 2rem);
      grid-template-columns: 1fr;
      gap: 0.5rem;
      margin-inline: -1rem;
      padding: 2.1rem 1.25rem 1rem;
      border-radius: 0;
    }

    .eyebrow {
      margin-bottom: 1.25rem;
      font-size: 0.58rem;
    }

    .hero-copy h1 {
      font-size: clamp(3.45rem, 13vw, 5.2rem);
    }

    .hero-description {
      margin: 1.25rem 0 1.4rem;
      font-size: 0.9rem;
    }

    .button {
      min-height: 44px;
      padding: 0.7rem 0.85rem;
      font-size: 0.75rem;
    }

    .hero-footnote {
      margin-top: 1rem;
    }

    .hero-art {
      width: min(100%, 430px);
      min-height: 330px;
      margin: 0 auto;
    }

    .preview-window {
      width: min(86%, 360px);
    }

    .label-top {
      top: 4%;
      right: 0;
    }

    .label-bottom {
      bottom: 4%;
    }

    .art-sticker {
      right: 2%;
      bottom: 0;
      width: 63px;
      height: 63px;
      font-size: 0.48rem;
    }

    .toolkit-section {
      padding-top: 3rem;
    }

    .section-heading {
      display: block;
    }

    .section-heading > p {
      margin-top: 0.7rem;
    }

    .brand-products {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.6rem;
    }

    .product-card {
      min-height: 180px;
      padding: 0.9rem;
    }

    .product-card h3 {
      font-size: 1.2rem;
    }

    .product-card p {
      font-size: 0.72rem;
    }

    .install-banner {
      flex-wrap: wrap;
      gap: 0.8rem;
      padding: 1.2rem;
    }

    .banner-mark {
      width: 40px;
      height: 40px;
    }

    .banner-copy h2 {
      font-size: 1.35rem;
    }

    .banner-link {
      width: 100%;
      justify-content: space-between;
      margin: 0;
    }
  }

  @media (max-width: 380px) {
    .hero-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .brand-products {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .button,
    .product-card,
    .product-card h3 span,
    .banner-link {
      transition: none;
    }
  }
</style>

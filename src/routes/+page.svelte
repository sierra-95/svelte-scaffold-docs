<script lang="ts">
  import { goto } from '$app/navigation';
  import { routes } from '$lib/assets/company';
  import { Button } from '@sierra-95/svelte-scaffold';
</script>

<svelte:head>
  <title>@sierra-95/svelte-scaffold</title>
  <meta
    name="description"
    content="A Svelte toolkit packed with useful components, modules, stores, and utilities. Spend less time on setup and more time building."
  />
</svelte:head>

<div class="landing-page">
  <section class="hero-panel">
    <div class="hero-copy">
      <div class="eyebrow"><span class="eyebrow-dot"></span>You Belong</div>
      <h1>@sierra-95<br /><span>Svelte Scaffold</span></h1>
      <p class="hero-description">
        The useful bits your next Svelte project needs, already in one place. Pick up a component,
        plug in a module, and get straight to the good part.
      </p>
      <div class="hero-actions">
        <div class="sierra-translate">
          <Button style="background-color: var(--accent-blue); color:#132033 " startIcon="fa fa-arrow-up-right-from-square" onclick={() => goto(routes.installation.path)}>Get Started</Button>
        </div>
        <div class="sierra-translate">
          <Button style="border-color: #41463e;color: #f6f6ef;" variant="outlined" onclick={() => goto(routes.modules.editor.path)}>Explore Modules</Button>
        </div>
      </div>
      <div class="hero-footnote">Why build it twice? You already know how this ends..</div>
    </div>

    <div class="hero-art" aria-hidden="true">
      <div class="art-glow"></div>
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <div class="floating-label label-top"><span class="label-dot"></span>SKIP THE BLANK CANVAS</div>
      <div class="preview-window">
        <div class="preview-topbar">
          <div class="window-dots"><i></i><i></i><i></i></div>
          <span>svelte-scaffold</span>
          <img src="https://files.michaelmachohi.com/portfolio/svelte-logo-cutout.svg" alt="Svelte Logo" width="15" />
        </div>
        <div class="preview-content">
          <div class="preview-kicker">YOUR NEXT PROJECT</div>
          <div class="preview-title">A head start<br />looks good on you.</div>
          <div class="preview-rule"></div>
          <div class="preview-row">
            <div title="Explore Components" role="none" on:click={() => goto(routes.core.components.base)} class="preview-tile sierra-translate"  style="border-color: var(--ss-neutral);"><i class="fa-solid fa-puzzle-piece"></i><small>Components</small></div>
            <div title="Explore Modules" role="none" on:click={() => goto(routes.modules.editor.path)} class="preview-tile sierra-translate" style="border-color: var(--ss-success);"><i class="fa-solid fa-cogs"></i><small>Modules</small></div>
            <div title="Explore Stores" role="none" on:click={() => goto(routes.stores.path)} class="preview-tile sierra-translate" style="border-color: var(--ss-warning);"><i class="fa-solid fa-store"></i><small>Stores</small></div>
          </div>
          <div class="preview-bottom">
            <div class="preview-bottom-copy"><strong>Less boilerplate.</strong><small>You've got better things to do.</small></div>
            <div class="preview-arrow">↗</div>
          </div>
        </div>
      </div>
      <div class="floating-label label-bottom">TAKE IT. MAKE IT YOURS</div>
      <div class="art-sticker">GO<br />MAKE<br />THINGS<span>↗</span></div>
    </div>
  </section>


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
  .preview-kicker,
  .floating-label{
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
    font-family: 'Striper Regular', 'Arial', sans-serif;
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

  .hero-footnote {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-top: 1.5rem;
    color: #939a8c;
    font-size: 0.76rem;
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

  .preview-content {
    padding: 1.45rem 1.5rem 1.15rem;
  }

  .preview-kicker {
    color: #777c6f;
    font-size: 0.57rem;
  }

  .preview-title {
    margin-top: 0.45rem;
    font-family: 'Array Regular', sans-serif;
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
    border: 1px solid;
    border-radius: 6px;
    cursor: pointer;
  }

  .preview-tile small {
    font-size: 0.58rem;
    font-weight: 700;
  }

  .preview-bottom {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-top: 1rem;
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
      padding: 0rem;
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
  }

  @media (max-width: 380px) {
    .hero-actions {
      align-items: stretch;
      flex-direction: column;
    }
  }
</style>

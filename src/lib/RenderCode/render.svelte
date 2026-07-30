<script lang="ts">
  import { onDestroy } from 'svelte';
  import { createHighlighter, type Highlighter } from 'shiki';
  import { tick } from 'svelte';
  import {theme} from '@sierra-95/svelte-scaffold';
  import './shiki.css';

  const {
    code = '',
    lang = 'javascript',
    PREVIEW_LINES = 10
  } = $props();

  let _theme = '';
  let html = $state('Loading...');
  let fullHtml = '';
  let previewHtml = '';
  let highlighter: Highlighter | undefined;  
  let copied = $state(false);
  let canExpand = $state(false);
  let expanded = $state(false);
  //dracula, everforest-dark, one-dark-pro, 
  //github-light light-plus
  async function setupHighlighter() {
    _theme = $theme === 'light' ? 'github-light' : 'everforest-dark';

    if (!highlighter) {
      highlighter = await createHighlighter({
        themes: ['github-light', 'everforest-dark'],
        langs: [lang]
      });
    }

    fullHtml = highlighter.codeToHtml(code, {
      lang,
      theme: _theme
    });

    const lines = code.split('\n');
    canExpand = lines.length > PREVIEW_LINES;

    const previewCode = canExpand
      ? lines.slice(0, PREVIEW_LINES).join('\n')
      : code;

    previewHtml = highlighter.codeToHtml(previewCode, {
      lang,
      theme: _theme
    });

    html = canExpand && !expanded ? previewHtml : fullHtml;
  }

  $effect(() => {
    if ($theme) {
      setupHighlighter();
    }
    html = canExpand && !expanded ? previewHtml : fullHtml;
	});

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    copied = true;
    await tick();
    setTimeout(() => copied = false, 2000);
  }

  onDestroy(() => {
    highlighter?.dispose();
  });

</script>
<main>
  <div class="shiki-header">
    <span class="text-(--ss-neutral)">{lang}</span>
    <div class="flex gap-5">  
     {#if canExpand}
        <button onclick={() => expanded = !expanded}>
          <span class:hidden={expanded}>Expand Code</span>
          <span class:hidden={!expanded}>Collapse</span>
        </button>
      {/if}
      <button onclick={copyCode}>
        <span class:hidden={copied}>Copy</span>
        <span class:hidden={!copied} class="text-(--ss-success)">Copied</span>
      </button>
  </div>
  </div>
  {@html html}
</main>

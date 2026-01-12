<script lang="ts">
  import {RenderCode, sectioning} from '$lib'; 
</script>

<section id={sectioning.installation.installation} class="space-y-4 mb-10">
  <title>Getting Started</title>
  <h1>Installation</h1>
  <h3>
    To get started, install the package via npm:
  </h3>
  <RenderCode
    lang="bash"
    code={`
    npm i @sierra-95/svelte-scaffold    
  `}/>
  <h3>Add this in your <strong>app.css</strong></h3>
  <RenderCode
      lang="css"
      code={`
      @import '@sierra-95/svelte-scaffold/global.css';
  `}/>
  <h3>And thats it!</h3>
  <h2>Usage Example</h2>
  <h3>After installation, import any component you want to use. For example, to add a button:</h3>
  <RenderCode
    lang="svelte"
    code={`
    <\script>
      import { Button } from '@sierra-95/svelte-scaffold';
    <\/script>

    <Button onclick={() => alert('Button clicked!')}>
      Click Me
    </Button>
  `}/>
</section>

<section id={sectioning.installation.font_awesome} class="space-y-4">
  <h1>Scaffold Icons</h1>
  <h3><code>@sierra-95/svelte-scaffold</code> uses Font Awesome for icons.</h3>
  <h3>Create an account
    <a href="https://fontawesome.com/" class="note" target="_blank">here</a>
    and follow <a href="https://docs.fontawesome.com/" class="note" target="_blank">these</a>
    instructions to make your own kit and get kit embed code.
  </h3>
  <h3>Add this to your layout</h3>
  <RenderCode
      lang="html"
      code={`
      <svelte:head>
        <\script
          src="https://kit.fontawesome.com/YOUR_KIT_CODE.js"
          crossorigin="anonymous"
        ></script>
      </svelte:head>
  `}/>
</section>


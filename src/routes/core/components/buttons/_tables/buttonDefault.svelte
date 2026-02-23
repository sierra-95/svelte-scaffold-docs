<table class="table-auto w-full text-sm text-left">
  <thead class="text-xs uppercase ">
    <tr>
      <th class="p-3 border">Prop</th>
      <th class="p-3 border">Type</th>
      <th class="p-3 border">Default</th>
      <th class="p-3 border">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-3 border font-mono">title</td>
      <td class="p-3 border font-mono">string</td>
      <td class="p-3 border font-mono">''</td>
      <td class="p-3 border">The button label content.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">type</td>
      <td class="p-3 border font-mono">string (button, submit, reset)</td>
      <td class="p-3 border font-mono">'button'</td>
      <td class="p-3 border"></td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">onclick=&#123;() =&gt; your_function()&#125;</td>
      <td class="p-3 border font-mono">function(s)</td>
      <td class="p-3 border font-mono"></td>
      <td class="p-3 border">Function or functions triggered when the button is clicked.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">color</td>
      <td class="p-3 border font-mono">string (primary, warning, error)</td>
      <td class="p-3 border font-mono">'primary'</td>
      <td class="p-3 border">Sets the color scheme, used with <strong>variant</strong> to determine visual appearance.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">variant</td>
      <td class="p-3 border font-mono">string (contained, outlined)</td>
      <td class="p-3 border font-mono">'contained'</td>
      <td class="p-3 border">Defines the button style variant. If used, it <strong>overrides</strong> any Tailwind styles passed via the <strong>style</strong> prop.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">style</td>
      <td class="p-3 border font-mono">string (Tailwind only)</td>
      <td class="p-3 border font-mono">""</td>
      <td class="p-3 border">Tailwind utility classes for custom styling. <strong>Priority</strong> is given to <strong>variant</strong></td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">startIcon & endIcon</td>
      <td class="p-3 border font-mono">string (Font Awesome only)</td>
      <td class="p-3 border font-mono">""</td>
      <td class="p-3 border"></td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">disabled</td>
      <td class="p-3 border font-mono">boolean</td>
      <td class="p-3 border font-mono">false</td>
      <td class="p-3 border">Disables the button and blocks <strong>onClick</strong> actions.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">isLoading</td>
      <td class="p-3 border font-mono">boolean</td>
      <td class="p-3 border font-mono">false</td>
      <td class="p-3 border">Displays a spinner. Automatically disables the button while loading.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">pill</td>
      <td class="p-3 border font-mono">boolean</td>
      <td class="p-3 border font-mono">false</td>
      <td class="p-3 border">If true, applies full rounding (Tailwind <strong>rounded-full</strong>) to make the button pill-shaped.</td>
    </tr>
    <tr>
        <td class="p-3 border font-mono">spinner</td>
        <td class="p-3 border font-mono">number</td>
        <td class="p-3 border font-mono">20</td>
        <td class="p-3 border">Controls the size of the loading spinner (in pixels) when <strong>isLoading</strong> is active.</td>
    </tr>
    <tr>
        <td class="p-3 border font-mono">thickness</td>
        <td class="p-3 border font-mono">number</td>
        <td class="p-3 border font-mono">2</td>
        <td class="p-3 border">Defines the stroke thickness of the spinner icon (applies when <strong>isLoading</strong> is active)</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">html2canvas_ignore</td>
      <td class="p-3 border font-mono">string (true, false)</td>
      <td class="p-3 border font-mono">'false'</td>
      <td class="p-3 border">When set to <strong>'true'</strong>, activates data-html2canvas-ignore to exclude the button from screenshots.</td>
    </tr>
  </tbody>
</table>

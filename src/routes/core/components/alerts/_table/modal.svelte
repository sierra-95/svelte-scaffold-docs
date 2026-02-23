<table class="table-auto w-full text-sm text-left">
  <thead class="text-xs uppercase">
    <tr>
      <th class="p-3 border">Name</th>
      <th class="p-3 border">Type</th>
      <th class="p-3 border">Default</th>
      <th class="p-3 border">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-3 border font-mono">open</td>
      <td class="p-3 border font-mono">boolean</td>
      <td class="p-3 border font-mono">false</td>
      <td class="p-3 border">Decides if the modal is open</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">title</td>
      <td class="p-3 border font-mono">string</td>
      <td class="p-3 border font-mono">''</td>
      <td class="p-3 border">(Required)</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">content</td>
      <td class="p-3 border font-mono">string</td>
      <td class="p-3 border font-mono">''</td>
      <td class="p-3 border">(Optional)</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">confirmText</td>
      <td class="p-3 border font-mono">string</td>
      <td class="p-3 border font-mono">'Confirm'</td>
      <td class="p-3 border">(Optional)</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">cancelText</td>
      <td class="p-3 border font-mono">string</td>
      <td class="p-3 border font-mono">'Cancel'</td>
      <td class="p-3 border">(Optional)</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">onConfirm</td>
      <td class="p-3 border font-mono">function</td>
      <td class="p-3 border font-mono">void</td>
      <td class="p-3 border">Callback function when the confirm button is clicked.</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">onCancel</td>
      <td class="p-3 border font-mono">function</td>
      <td class="p-3 border font-mono">void</td>
      <td class="p-3 border">Callback function when the cancel button is clicked. (optional).</td>
    </tr>
    <tr>
      <td class="p-3 border font-mono">render</td>
      <td class="p-3 border font-mono">() =&gt; Snippet</td>
      <td class="p-3 border font-mono">null</td>
      <td class="p-3 border">
        Function that returns dynamic modal content. Used to render custom UI
        such as inputs, forms, or any arbitrary markup inside the modal. (Optional)
      </td>
    </tr>

  </tbody>
</table>

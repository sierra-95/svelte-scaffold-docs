<script lang="ts">
	import type { SvelteComponent } from "svelte";

  type TableCell = {
    content: string | (() => string) | SvelteComponent;
    colspan?: number;
    rowspan?: number;
    class?: string;
  };
  
  type TableRow = TableCell[];

  type TableProps = {
    title?: {
      name: string;
      fontSize?: string;
      fontWeight?: string;
      color?: string;
    };
    table:{
      headers: string[];
      rows: TableRow[];
      striped?: boolean;
      stripeColor?: string;
      fontSize?: string;
      borderSize?: string;
      borderColor?: string;
    }
  };

  const defaultTitle = {
    name: '',
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "var(--text-primary)"
  };

  const defaultTable = {
    headers: [],
    rows: [],
    striped: true,
    fontSize: "0.875rem",
    borderSize: "1px",
    borderColor: "var(--border)"
  };
  
  const props: TableProps = $props();

  const title = $derived({
    ...defaultTitle,
    ...props.title
  });

  const table = $derived({
    ...defaultTable,
    ...props.table
  });

  const stripeColor = "var(--background-secondary)";
</script>

<style>
  #sierra-table table {
    table-layout: auto;
    width: 100%;
    text-align: left;
  }
  #sierra-table thead {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  #sierra-table th,
  #sierra-table td {
    padding: 0.75rem;
  }
  #sierra-table h2{
    margin-bottom: 1rem;

  }
</style>

<main id="sierra-table" style="width: 100%;">
  {#if title.name}
    <h2>{title.name}</h2>
  {/if}
  <table style="font-size: {table.fontSize};">
    <thead>
      <tr>
        {#each table.headers as header}
          <th style="border: {table.borderSize} solid {table.borderColor};">{header}</th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each table.rows as row, i}
        <tr
          style="{table.striped && i % 2 === 1 ? `background-color: ${stripeColor}` : ''}"
        >
          {#each row as cell}
            <td
              class={`${cell.class || ''}`}
              style="border: {table.borderSize} solid {table.borderColor};"
              colspan={cell.colspan || 1}
              rowspan={cell.rowspan || 1}
            >
              {#if typeof cell.content === 'function'}
                {@html cell.content()}
              {:else}
                {@html cell.content}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</main>
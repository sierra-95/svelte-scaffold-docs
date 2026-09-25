<script lang="ts">
  import { goto } from '$app/navigation';
  import { sections } from '$lib/assets/conf/sections';
  import {MenuItem} from '@sierra-95/svelte-scaffold';
  import type { MenuNode } from '@sierra-95/svelte-scaffold';

  const {
    parent=''
  }:{parent: string} = $props();

  function findNodeByPath(
    nodes: MenuNode[],
    path: string
  ): MenuNode | undefined {
    for (const node of nodes) {
      if (node.path === path) {
        return node;
      }

      if (node.children?.length) {
        const found = findNodeByPath(node.children, path);

        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  function getChildren(parentPath: string): MenuNode[] {
    const allNodes = sections.flatMap(section => section.nodes);
    const parent = findNodeByPath(allNodes, parentPath);

    return parent?.children ?? [];
  }
</script>

<main class="sierra-docs-grid">
  {#each getChildren(parent) as child, index}
    <MenuItem
      onclick={() => goto(child.path ?? '')}
      iconC={{ name: child.icon }}
    >{child.label}
    </MenuItem>
  {/each}
</main>
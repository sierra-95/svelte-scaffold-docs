<script>
    import { Table } from "@sierra-95/svelte-scaffold";
    import { sectionIds, RenderCode } from "$lib";

    const exampleTable = {
        title: {
            name: "Example Table"
        },
        table: {
            headers: ['COL1', 'COL2', 'COL3', 'COL4'],
            rows: [
                [
                    { content: "value" },
                    { content: "value" },
                    { content: "value" },
                    { content: "value" }
                ],
            ]    
        }
    };

    const titleTable = {
        title: {
            name: "Title props"
        },
        table: {
            headers: ['name', 'fontSize', 'fontWeight', 'color'],
            rows: [
                [
                    { content: "''" },
                    { content: "1.25rem" },
                    { content: "bold" },
                    { content: "var(--text)" }
                ],
            ]    
        }
    };
    const actualTable = {
        title: {
            name: "Table props"
        },
        table: {
            headers: ['headers', 'rows', 'striped', 'stripeColor','fontSize', 'borderSize', 'borderColor'],
            rows: [
                [
                    { content: "array[]" },
                    { content: "array[]" },
                    { content: "true" },
                    { content: "internal" },
                    { content: "0.875rem" },
                    { content: "1px" },
                    { content: "var(--border)" }
                ],
            ]    
        }
    };
    const cellTable = {
        title: {
            name: "TableCell props - <td>"
        },
        table: {
            headers: ['prop', 'type', 'description', 'default'],
            rows: [
                [
                    { content: "content" },
                    { content: "string | fn | component" },
                    { content: "Cell content" },
                    { content: "''" }
                ],
                [
                    { content: "colspan" },
                    { content: "number" },
                    { content: "Span across columns" },
                    { content: "1" }
                ],
                [
                    { content: "rowspan" },
                    { content: "number" },
                    { content: "Span across rows" },
                    { content: "1" }
                ],
                [
                    { content: "class" },
                    { content: "string" },
                    { content: "Custom CSS classes" },
                    { content: "''" }
                ]
            ]
        }
    };
    const advancedTable = {
        title: {
            name: "Advanced Example"
        },
        table: {
            headers: ['Name', 'Role', 'Status'],
            rows: [
                [
                    { content: "John Doe", rowspan: 2 },
                    { content: "Engineer" },
                    { content: "Active", class: "bg-green-500" }
                ],
                [
                    { content: "Designer" },
                    { content: "Inactive", class: "bg-red-500" }
                ],
                [
                    { content: "Summary", colspan: 3, class: "font-bold" }
                ]
            ]
        }
    };
</script>

<main class="space-y-6">
    <section id={sectionIds.components.table.getting_started} class="space-y-4">
        <h1>Table</h1>
        <h3>Table allows you to quickly display data in a structured format without worrying about styling.</h3>
        <h2>1. Getting Started</h2>
        <h3>Use the format below to organize your table data:</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                const exampleTable = {
                    title: {
                        name: "Example Table"
                    },
                    table: {
                        headers: ['COL1', 'COL2', 'COL3', 'COL4'],
                        rows: [
                            [
                                { content: "value" },
                                { content: "value" },
                                { content: "value" },
                                { content: "value" }
                            ],
                        ]    
                    }
                };
            <\/script>
        `}/>	
        <h3>Then pass your table data to the component:</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { Table } from "@sierra-95/svelte-scaffold";
            <\/script>
            <Table table={exampleTable.table} title={exampleTable.title}/>
        `}/>
        <Table table={exampleTable.table} title={exampleTable.title}/>

    </section>

    <section id={sectionIds.components.table.component_api} class="space-y-4">
        <h2>2. Component API</h2>
        <h3>Table accepts the following props:</h3>
        <Table table={titleTable.table} title={titleTable.title}/>
        <Table table={actualTable.table} title={actualTable.title}/>
        <Table table={cellTable.table} title={cellTable.title}/>
    </section>

    <section id={sectionIds.components.table.advanced_example} class="space-y-4">
        <h2>3. Advanced Example</h2>
        <h3>Table supports more complex data with rowspan, colspan, and custom cell classes:</h3>
        <RenderCode
            lang="svelte"
            code={`
            <\script>
                import { Table } from "@sierra-95/svelte-scaffold";
                
                const advancedTable = {
                    title: {
                        name: "Advanced Example"
                    },
                    table: {
                        headers: ['Name', 'Role', 'Status'],
                        rows: [
                            [
                                { content: "John Doe", rowspan: 2 },
                                { content: "Engineer" },
                                { content: "Active", class: "bg-green-500" }
                            ],
                            [
                                { content: "Designer" },
                                { content: "Inactive", class: "bg-red-500" }
                            ],
                            [
                                { content: "Summary", colspan: 3, class: "font-bold" }
                            ]
                        ]
                    }
                };
            <\/script>
            <Table table={exampleTable.table} title={exampleTable.title}/>
        `}/>
        <Table table={advancedTable.table} title={advancedTable.title}/>
    </section>
</main>
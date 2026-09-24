export const AddToastTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "status" },
                { content: '"info" | "success" | "warning" | "error"' },
                { content: "required" },
                { content: "Sets the status and corresponding icon and color of the toast." }
            ],
            [
                { content: "message" },
                { content: "string" },
                { content: "required" },
                { content: "The message displayed inside the toast." }
            ],
            [
                { content: "priority" },
                { content: '"high" | "medium" | "low"' },
                { content: '"low"' },
                { content: "Controls the toast's position in the queue. Higher-priority toasts are displayed first." }
            ],
            [
                { content: "persistent" },
                { content: "boolean" },
                { content: "false" },
                { content: "Keeps the toast visible until it is manually removed with removeToast." }
            ],
            [
                { content: "duration" },
                { content: "number" },
                { content: "6000" },
                { content: "Sets how long, in milliseconds, a non-persistent toast remains visible." }
            ],
            [
                { content: "id" },
                { content: "string" },
                { content: "auto-generated" },
                { content: "Provides a custom ID for the toast. Useful for identifying and removing a persistent toast with removeToast." }
            ]
        ]
    }
};
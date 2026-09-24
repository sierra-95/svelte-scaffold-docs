export const CircularProgressTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "size" },
                { content: "number" },
                { content: "50" }
            ],
            [
                { content: "thickness" },
                { content: "number" },
                { content: "4" }
            ],
            [
                { content: "color" },
                { content: "string" },
                { content: '"var(--ss-neutral)"' }
            ]
        ]
    }
};

export const CustomProgressTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "value" },
                { content: "bindable number" },
                { content: "0" },
                { content: "Controls the progress percentage, from 0 to 100." }
            ],
            [
                { content: "useTimeout" },
                { content: "boolean" },
                { content: "false" },
                { content: "Enables the automatic timeout-based progress." }
            ],
            [
                { content: "seconds" },
                { content: "number" },
                { content: "0" },
                { content: "Sets the timeout duration in seconds. The countdown starts when the component mounts." }
            ],
            [
                { content: "onComplete" },
                { content: "function | null" },
                { content: "null" },
                { content: "Runs once the timeout reaches 0." }
            ],
            [
                { content: "styleC" },
                { content: "{ height, radius, background }" },
                { content: '{ height: "5px", radius: "8px", background: "var(--ss-neutral)" }' },
                { content: "Customizes the progress bar appearance." }
            ]
        ]
    }
};
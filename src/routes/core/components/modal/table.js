export const title ={
    name: 'Component API'
}
export const table = {
    headers: ['Prop', 'Type', 'Default', 'Description'],
    rows: [
        [
            { content: "open" },
            { content: "boolean" },
            { content: "false" },
            { content: "Decides if the modal is open" },
        ],
        [
            { content: "title: {name, font, fontSize, fontWeight}" },
            { content: "object" },
            { content: "'',inherit, 1.3rem, inherit" },
            { content: "Title styles" },
        ],
        [
            { content: "logo: {src, size, spacing}" },
            { content: "object" },
            { content: "\"\", 30px, 1rem" },
            { content: "Logo styles" },
        ],
        [
            { content: "content" },
            { content: "string" },
            { content: "\"\"" },
            { content: "(Optional)" },
        ],
        [
            { content: "confirmText" },
            { content: "string" },
            { content: "'Confirm'" },
            { content: "(Optional)" },
        ],
        [
            { content: "cancelText" },
            { content: "string" },
            { content: "'Cancel'" },
            { content: "(Optional)" },
        ],
        [
            { content: "onConfirm" },
            { content: "function" },
            { content: "void" },
            { content: "Callback function when the confirm button is clicked." },
        ],
        [
            { content: "onCancel" },
            { content: "function" },
            { content: "void" },
            { content: "Callback function when the cancel button is clicked. (optional)." },
        ],
        [
            { content: "render" },
            { content: "() => Snippet" },
            { content: "null" },
            { content: 
                `Function that returns dynamic modal content. Used to render custom UI
                such as inputs, forms, or any arbitrary markup inside the modal. (Optional)`
                },
        ],

    ],
    borderSize:"1px"
}
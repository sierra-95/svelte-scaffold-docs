export const DefaultButtonTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "type" },
                { content: "string (button, submit, reset)" },
                { content: "'button'" },
                { content: "" }
            ],
            [
                { content: "onclick=&#123;() =&gt; your_function()&#125;" },
                { content: "function(s)" },
                { content: "" },
                { content: "Function or functions triggered when the button is clicked." }
            ],
            [
                { content: "color" },
                { content: "string (primary, warning, error)" },
                { content: "'primary'" },
                { content: "Sets the color scheme, used with <strong>variant</strong> to determine visual appearance." }
            ],
            [
                { content: "variant" },
                { content: "string (contained, outlined)" },
                { content: "'contained'" },
                { content: "Defines the button style variant." }
            ],
            [
                { content: "style" },
                { content: "string (Vanilla CSS)" },
                { content: '""' },
                { content: "Custom CSS styles for the button." }
            ],
            [
                { content: "unstyled" },
                { content: "boolean" },
                { content: "false" },
                { content: "When set to <strong>true</strong>, removes all default styling from the button." }
            ],
            [
                { content: "startIcon & endIcon" },
                { content: "string (Font Awesome only)" },
                { content: '""' },
                { content: "Icons to display at the start or end of the button." }
            ],
            [
                { content: "disabled" },
                { content: "boolean" },
                { content: "false" },
                { content: "Disables the button and blocks <strong>onClick</strong> actions." }
            ],
            [
                { content: "isLoading" },
                { content: "boolean" },
                { content: "false" },
                { content: "Displays a spinner. Automatically disables the button while loading." }
            ],
        ]
    }
};

export const CustomButtonTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Import Name', 'Prop', 'Default'],
        rows: [
            [
                { content: "ButtonSwipe", rowspan: 3 },
                { content: "bg" },
                { content: "var(--ss-neutral)" }
            ],
            [
                { content: "color" },
                { content: "var(--ss-d-p)" }
            ],
            [
                { content: "swipeColor" },
                { content: "var(--ss-l-p)" }
            ],
            [
                { content: "ButtonMarquee", rowspan: 2 },
                { content: "bg" },
                { content: "var(--ss-neutral)" }
            ],
            [
                { content: "color" },
                { content: "var(--ss-d-p)" }
            ],
            [
                { content: "ButtonFlip", rowspan: 5 },
                { content: "front" },
                { content: "front" }
            ],
            [
                { content: "back" },
                { content: "back" }
            ],
            [
                { content: "bgFront & bgBack" },
                { content: "var(--ss-neutral)" }
            ],
            [
                { content: "color" },
                { content: "var(--ss-l-p)" }
            ]
        ]
    }
};

export const ButtonHamburgerTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "width" },
                { content: "string" },
                { content: "30px" },
            ],
            [
                { content: "height" },
                { content: "string" },
                { content: "3px" },
            ],
            [
                { content: "color" },
                { content: "string" },
                { content: "black" },
            ],
            [
                { content: "bradius" },
                { content: "string" },
                { content: "5px" },
            ],
            [
                { content: "spacing" },
                { content: "string" },
                { content: "5px" },
            ]
        ]
    }
};
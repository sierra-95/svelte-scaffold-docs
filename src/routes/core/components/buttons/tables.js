export const DefaultButtonTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "title" },
                { content: "string" },
                { content: "''" },
                { content: "The button label content." }
            ],
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
            [
                { content: "spinner" },
                { content: "number" },
                { content: '20' },
                { content: "Controls the size of the loading spinner (in pixels) when <strong>isLoading</strong> is active." }
            ],
            [
                { content: "thickness" },
                { content: "number" },
                { content: '2' },
                { content: "Defines the stroke thickness of the spinner icon (applies when <strong>isLoading</strong> is active)" }
            ],
            [
                { content: "html2canvas_ignore" },
                { content: "string (true, false)" },
                { content: "'false'" },
                { content: "When set to <strong>'true'</strong>, activates data-html2canvas-ignore to exclude the button from screenshots." }
            ]
        ]
    }
};

export const CustomButtonTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Import Name', 'Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "ButtonSwipe", rowspan: 2 },
                { content: "text" },
                { content: "string" },
                { content: "Button" }
            ],
            [
                { content: "bg / color" },
                { content: "string" },
                { content: "var(--primary-bg)/ #4B5563" }
            ],
            [
                { content: "ButtonMarquee", rowspan: 2 },
                { content: "text" },
                { content: "string" },
                { content: "Hover me" }
            ],
            [
                { content: "bg / color" },
                { content: "string" },
                { content: "var(--primary-bg)/ #4B5563" }
            ],
            [
                { content: "ButtonFlip", rowspan: 5 },
                { content: "front" },
                { content: "string" },
                { content: "front" }
            ],
            [
                { content: "back" },
                { content: "string" },
                { content: "back" }
            ],
            [
                { content: "bgFront" },
                { content: "string" },
                { content: "var(--primary-bg)" }
            ],
            [
                { content: "bgBack / color" },
                { content: "string" },
                { content: "#f4e5d4 / var(--button-text)" }
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
                { content: "barWidth" },
                { content: "string" },
                { content: "30px" },
            ],
            [
                { content: "barHeight" },
                { content: "string" },
                { content: "3px" },
            ],
            [
                { content: "barColor" },
                { content: "string" },
                { content: "black" },
            ],
            [
                { content: "barBorderRadius" },
                { content: "string" },
                { content: "5px" },
            ],
            [
                { content: "barSpacing" },
                { content: "string" },
                { content: "5px" },
            ]
        ]
    }
};
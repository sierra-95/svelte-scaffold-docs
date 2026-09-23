export const DropdownTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "top" },
                { content: "string" },
                { content: '"130%"' }
            ],
            [
                { content: "width" },
                { content: "string" },
                { content: '"auto"' }
            ],
            [
                { content: "maxHeight" },
                { content: "string" },
                { content: '""' }
            ],
            [
                { content: "open" },
                { content: "bindable boolean" },
                { content: "true" }
            ],
            [
                { content: "dropdownTrigger" },
                { content: "Snippet" },
                { content: "null" }
            ],
            [
                { content: "zIndex" },
                { content: "number" },
                { content: "5" }
            ],
            [
                { content: "children" },
                { content: "Snippet" },
                { content: "null" }
            ]
        ]
    }
};

export const TabsTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "tabs" },
                { content: "array of { key, title, icon? }" },
                { content: "required" }
            ],
            [
                { content: "snippets" },
                { content: "object of snippets keyed by tab key" },
                { content: "required" }
            ],
            [
                { content: "active" },
                { content: "bindable string" },
                { content: "undefined" }
            ],
            [
                { content: "iconC" },
                { content: "{ size, bg }" },
                { content: '{ size: "15px", bg: "var(--ss-neutral)" }' }
            ],
            [
                { content: "boxShadow" },
                { content: "boolean" },
                { content: "false" }
            ],
            [
                { content: "actions" },
                { content: "Snippet" },
                { content: "required" }
            ],
            [
                { content: "padding" },
                { content: "string" },
                { content: '"1rem"' }
            ]
        ]
    }
};

export const ContentSwitcherTable = {

    title: {
        name: "Component API"
    },

    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [

            [

                { content: "navC" },

                { content: "{ width, background }" },

                { content: '{ width: "300px", background: "inherit" }' },

                { content: "Customizes the navigation panel." }

            ],

            [

                { content: "contentC" },

                { content: "{ position, padding, background }" },

                { content: '{ position: "static", padding: "24px", background: "inherit" }' },

                { content: "Customizes the content area where the actual content is displayed." }

            ],

            [

                { content: "switcherC" },

                { content: "{ height, responsive }" },

                { content: '{ height: "100%", responsive: true }' },

                { content: "Customizes the ContentSwitcher as a whole." }

            ],

            [

                { content: "items" },

                { content: "Snippet" },

                { content: "required" },

                { content: "Provides the navigation items displayed in the navigation panel." }

            ],

            [

                { content: "children" },

                { content: "Snippet" },

                { content: "required" },

                { content: "Provides the main content displayed in the content area." }

            ]

        ]

    }

};


export const HamburgerMenuTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "barC" },
                { content: "{ width, height, color, bradius, spacing }" },
                { content: '{ width: "30px", height: "3px", color: "var(--ss-d-p)", bradius: "5px", spacing: "5px" }' }
            ],
            [
                { content: "menuC" },
                { content: "{ zIndex, padding, color, backgroundColor, buttonTimesColor }" },
                { content: '{ zIndex: 15, padding: "20px", color: "currentColor", backgroundColor: "var(--ss-l-p)", buttonTimesColor: "currentColor" }' }
            ],
            [
                { content: "logo" },
                { content: "{ src, width }" },
                { content: '{ src: "", width: "100px" }' }
            ],
            [
                { content: "menuOpen" },
                { content: "bindable boolean" },
                { content: "false" }
            ],
            [
                { content: "children" },
                { content: "Snippet" },
                { content: "null" }
            ]
        ]
    }
};
export const fileInputUploadTypeTable = {
    table: {
        headers: ['Name', 'type', 'Default', 'Description'],
        rows: [
            [
                { content: "uploadType" },
                { content: "Array"},
                { content: "['image','video','audio','documents', 'others']" },
                { content: "Decides the types of files allowed for upload"}
            ]
        ]
    }
};

export const fileInputDocumentListTable = {
    table: {
        headers: ['Documents list'],
        rows: [
            [
                { content: `
                    ['application/pdf',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'application/vnd.ms-excel',
                    'text/plain']
                `}
            ]
        ]
    }
};

export const inputsTable = {
    title: {
        name: "Components API"
    },
    table: {
        headers: [
            'Component',
            'id == name == label_for',
            'type',
            'label',
            'placeholder',
            'value',
            'rows',
            'options',
            'autocomplete',
            'showInput',
            'iconC',
            'rest'
        ],
        rows: [
            [
                { content: "Input" },
                { content: "string" },
                { content: "type_input" },
                { content: "string" },
                { content: "string" },
                { content: "bindable" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "type_AutoFill" },
                { content: "true" },
                { content: "{}" },
                { content: "...rest" }
            ],
            [
                { content: "Select" },
                { content: "string" },
                { content: "undefined" },
                { content: "string" },
                { content: "undefined" },
                { content: "bindable" },
                { content: "undefined" },
                { content: "define" },
                { content: "undefined" },
                { content: "true" },
                { content: "undefined" },
                { content: "...rest" }
            ],
            [
                { content: "TextArea" },
                { content: "string" },
                { content: "undefined" },
                { content: "string" },
                { content: "string" },
                { content: "bindable" },
                { content: "4" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "true" },
                { content: "undefined" },
                { content: "...rest" }
            ],
        ]
    }
};

export const inputsStyleTable = {
    title: {
        name: "styleC API"
    },
    table: {
        headers: ['Component', 'Prop', 'Default'],
        rows: [
            [
                { content: "Input", rowspan: 8 },
                { content: "underline" },
                { content: "false" }
            ],
            [
                { content: "border.size" },
                { content: '"1px"' }
            ],
            [
                { content: "border.color" },
                { content: '"var(--ss-input-border)"' }
            ],
            [
                { content: "border.radius" },
                { content: '"4px"' }
            ],
            [
                { content: "width" },
                { content: '"100%"' }
            ],
            [
                { content: "maxWidth" },
                { content: '"500px"' }
            ],
            [
                { content: "color" },
                { content: '"inherit"' }
            ],
            [
                { content: "background" },
                { content: '"transparent"' }
            ],
            
            [
                { content: "Select", rowspan: 9 },
                { content: "width" },
                { content: '"100%"' }
            ],
            [
                { content: "maxWidth" },
                { content: '"500px"' }
            ],
            [
                { content: "height" },
                { content: '"50px"' }
            ],
            [
                { content: "padding" },
                { content: '""' }
            ],
            [
                { content: "color" },
                { content: '"inherit"' }
            ],
            [
                { content: "background" },
                { content: '"transparent"' }
            ],
            [
                { content: "options.color" },
                { content: '"inherit"' }
            ],
            [
                { content: "options.background" },
                { content: '"var(--ss-l-p)"' }
            ],
                        [
                { content: "styles" },
                { content: 'Vanilla CSS' }
            ],
            [
                { content: "TextArea", rowspan: 7 },
                { content: "border.size" },
                { content: '"1px"' }
            ],
            [
                { content: "border.color" },
                { content: '"var(--ss-input-border)"' }
            ],
            [
                { content: "border.radius" },
                { content: '"4px"' }
            ],
            [
                { content: "width" },
                { content: '"100%"' }
            ],
            [
                { content: "maxWidth" },
                { content: '"500px"' }
            ],
            [
                { content: "color" },
                { content: '"inherit"' }
            ],
            [
                { content: "background" },
                { content: '"transparent"' }
            ],
            [
                { content: "SearchBar", rowspan: 4 },
                { content: "width" },
                { content: '"200px"' }
            ],
            [
                { content: "height" },
                { content: '"40px"' }
            ],
            [
                { content: "fontSize" },
                { content: '"0.9rem"' }
            ],
            [
                { content: "border.radius" },
                { content: '"5px"' }
            ],
            [
                { content: "Checkbox", rowspan: 5 },
                { content: "color" },
                { content: '"inherit"' }
            ],
            [
                { content: "background" },
                { content: '"transparent"' }
            ],
            [
                { content: "fontSize" },
                { content: '"1rem"' }
            ],
            [
                { content: "border.radius" },
                { content: '"2px"' }
            ],
            [
                { content: "border.color" },
                { content: '"var(--ss-d-p)"' }
            ],
        ]
    }
};


export const SearchBarTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "value" },
                { content: "bindable string" },
                { content: '""' },
                { content: "The current search value." }
            ],
            [
                { content: "placeholder" },
                { content: "string" },
                { content: '"Search"' },
                { content: "Placeholder." }
            ],
            [
                { content: "enableHotkey" },
                { content: "boolean" },
                { content: "false" },
                { content: "Switches the component to hotkey mode, displaying the <strong>Ctrl K</strong> shortcut and making the input read-only." }
            ],
            [
                { content: "onHotkey" },
                { content: "function" },
                { content: "() => {}" },
                { content: "Function called when <strong>Ctrl + K</strong> / <strong>Cmd + K</strong> is pressed or when the hotkey-mode search input is clicked." }
            ],
            [
                { content: "onSearch" },
                { content: "function" },
                { content: "() => {}" },
                { content: "Function called when the search button is clicked. The current <strong>value</strong> is passed to the function." }
            ],
            [
                { content: "inputEl" },
                { content: "bindable HTMLInputElement | null" },
                { content: "null" },
                { content: "Provides a reference to the underlying input element." }
            ]
        ]
    }
};

export const CheckboxTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "checked" },
                { content: "bindable boolean" },
                { content: "false" }
            ],
            [
                { content: "children" },
                { content: "Snippet" },
                { content: "required" }
            ],
            [
                { content: "...rest" },
                { content: "HTML attributes & event handlers" },
                { content: "" }
            ]
        ]
    }
};

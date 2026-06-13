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

export const propsTable = {
    title: {
        name: "Props API"
    },
    table: {
        headers: ['Component', 'id == name == label_for', 'type', 'label', 'placeholder', 'value', 'rows', 'options', 'required', 'readonly', 'autocomplete'],
        rows: [
            [
                { content: "Input" },
                { content: "true" },
                { content: "type_input" },
                { content: "true" },
                { content: "true" },
                { content: "bindable" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "supported" },
                { content: "supported" },
                { content: "type_AutoFill" },
            ],
            [
                { content: "PasswordInput" },
                { content: "true" },
                { content: "undefined" },
                { content: "true" },
                { content: "true" },
                { content: "bindable" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "supported" },
                { content: "undefined" },
                { content: "type_AutoFill" },
            ],
            [
                { content: "TextArea" },
                { content: "true" },
                { content: "undefined" },
                { content: "true" },
                { content: "true" },
                { content: "bindable" },
                { content: "true" },
                { content: "undefined" },
                { content: "supported" },
                { content: "supported" },
                { content: "undefined" },
            ],
            [
                { content: "Select" },
                { content: "true" },
                { content: "undefined" },
                { content: "true" },
                { content: "undefined" },
                { content: "bindable" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "supported" },
                { content: "supported" },
                { content: "undefined" },
            ],
            [
                { content: "DateInput, TimeInput" },
                { content: "true" },
                { content: "date | time" },
                { content: "true" },
                { content: "true" },
                { content: "bindable" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "supported" },
                { content: "supported" },
                { content: "undefined" },
            ],
        ]
    }
}

export const eventHandlersTable = {
    title: { name: 'Event Handlers API' },
    table: {
        headers: ['Component','onclick', 'oninput', 'onfocus', 'onblur', 'onchange'],
        rows: [
            [
                { content: "Input" },
                { content: "supported" },
                { content: "supported" },
                { content: "supported" },
                { content: "supported" },
                { content: "rest" },
            ],
            [
                { content: "PasswordInput" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "undefined" },
                { content: "undefined" },
            ],
            [
                { content: "TextArea, TimeInput, DateInput" },
                { content: "supported" },
                { content: "rest" },
                { content: "rest" },
                { content: "rest" },
                { content: "rest" },
            ],
            [
                { content: "Select" },
                { content: "rest" },
                { content: "rest" },
                { content: "rest" },
                { content: "rest" },
                { content: "supported" },
            ],
        ]
    }
}

export const stylingTable = {
    title: { name: 'Styling API' },
    table: {
        headers: ['Component','borderSize', 'borderColor', 'background', 'width', 'maxWidth','height', 'textColor', 'showInput', 'optionsColor', 'optionsBackground'],
        rows: [
            [
                { content: "Input, PasswordInput, TextArea, TimeInput, DateInput" },
                { content: "1px" },
                { content: "var(--input-border)",},
                { content: "transparent" },
                { content: "100%" },
                { content: "\"\"" },
                {content: 'undefined'},
                { content: "inherit" },
                { content: "true" },
                {content: 'undefined'},
                {content: 'undefined'},
            ],
            [
                { content: "Select" },
                { content: "undefined" },
                { content: "undefined",},
                { content: "transparent" },
                { content: "100%" },
                { content: "\"\"" },
                {content: '100%'},
                { content: "inherit" },
                { content: "true" },
                {content: 'inherit'},
                {content: 'white'},
            ]
        ]
    }
}
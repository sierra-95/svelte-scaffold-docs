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
        name: "Inputs API"
    },
    table: {
        headers: ['Component', 'id == name == label_for', 'type', 'label', 'placeholder', 'value', 'rows', 'options', 'autocomplete', 'rest'],
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
                {content: "...rest"}
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
                {content: "...rest"}
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
                {content: "...rest"}
            ],
        ]
    }
}


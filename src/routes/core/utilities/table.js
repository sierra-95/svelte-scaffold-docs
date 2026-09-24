export const AvatarTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "src" },
                { content: "string" },
                { content: '""' },
                { content: "The profile image source. If not provided, the default user icon is shown." }
            ],
            [
                { content: "iconC" },
                { content: "{ size, name, color }" },
                { content: '{ size: "24px", name: "fa-solid fa-user", color: "var(--gray-300)" }' },
                { content: "Customizes the default avatar icon." }
            ],
            [
                { content: "avatarC" },
                { content: "{ border, size, boxShadow, backgroundColor }" },
                { content: '{ border: { size: "1px", color: "var(--ss-d-t)" }, size: upload ? "150px" : "50px", boxShadow: "", backgroundColor: "var(--ss-l-s)" }' },
                { content: "Customizes the avatar container appearance." }
            ],
            [
                { content: "upload" },
                { content: "boolean" },
                { content: "false" },
                { content: "Enables upload mode, enlarges the avatar, and displays an edit button." }
            ],
            [
                { content: "onClick" },
                { content: "function" },
                { content: "() => {}" },
                { content: "Runs when the edit button is clicked while upload mode is enabled." }
            ]
        ]
    }
};

export const CarouselTable = {
    title: {
        name: "Component API"
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "images" },
                { content: "array" },
                { content: "[]" }
            ],
            [
                { content: "period" },
                { content: "number" },
                { content: "5000" }
            ],
            [
                { content: "buttonColor" },
                { content: "string" },
                { content: '"white"' }
            ],
            [
                { content: "autoScale" },
                { content: "boolean" },
                { content: "true" }
            ],
            [
                { content: "autoplay" },
                { content: "boolean" },
                { content: "true" }
            ]
        ]
    }
};

export const HrTable = {
    title: {
        name: "Component API",
        fontSize: "0.9rem",
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "width" },
                { content: "string" },
                { content: '"100%"' }
            ],
            [
                { content: "color" },
                { content: "string" },
                { content: '"var(--gray-400)"' }
            ],
            [
                { content: "margin" },
                { content: "string" },
                { content: '"1rem 0"' }
            ]
        ]
    }
};

export const HrSplitTable = {
    title: {
        name: "Component API",
        fontSize: "0.9rem",
    },
    table: {
        headers: ['Prop', 'Type', 'Default', 'Description'],
        rows: [
            [
                { content: "children" },
                { content: "Snippet" },
                { content: "required" },
                { content: "Content displayed between the two horizontal lines." }
            ],
            [
                { content: "height" },
                { content: "string" },
                { content: '"1px"' },
                { content: "Sets the height of the horizontal lines." }
            ],
            [
                { content: "color" },
                { content: "string" },
                { content: '"var(--ss-d-p)"' },
                { content: "Sets the text color of the content between the lines." }
            ],
            [
                { content: "fontSize" },
                { content: "string" },
                { content: '"1rem"' },
                { content: "Sets the font size of the content between the lines." }
            ],
            [
                { content: "hrColor" },
                { content: "string" },
                { content: '"var(--gray-400)"' },
                { content: "Sets the color of the horizontal lines." }
            ],
            [
                { content: "margin" },
                { content: "string" },
                { content: '"1rem 0"' },
                { content: "Sets the outer margin of the component." }
            ]
        ]
    }
};

export const VrTable = {
    title: {
        name: "Component API",
        fontSize: "0.9rem",
    },
    table: {
        headers: ['Prop', 'Type', 'Default'],
        rows: [
            [
                { content: "height" },
                { content: "string" },
                { content: '"20px"' }
            ],
            [
                { content: "width" },
                { content: "string" },
                { content: '"1px"' }
            ],
            [
                { content: "color" },
                { content: "string" },
                { content: '"var(--ss-border)"' }
            ],
            [
                { content: "margin" },
                { content: "string" },
                { content: '"0px"' }
            ]
        ]
    }
};
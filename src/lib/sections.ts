const core = `/core`;
const modules = `/modules`;
const stores = `/stores`;

const alerts = `${core}/alerts`;

export const routes = {
    overview: '/',
    installation: '/installation',
    
    core: {
        base: `${core}`,
        children: {
            buttons: `${core}/buttons`,
            progress: `${core}/progress`,
            inputs: `${core}/inputs`,
            Menus: `${core}/menus`,

            alerts: {
                modal: `${alerts}/modal`,
                toast: `${alerts}/toast`,
            },

            date: `${core}/date`,
        }
    },

    modules: {
        layout: {
            base: `${modules}/layout`,
            children: {
                overview: `${modules}/layout/overview`,
                getting_started: `${modules}/layout/getting-started`,
                usage: `${modules}/layout/usage`,
            }
        },
        file_picker: {
            base: `${modules}/file-picker`,
            children: {
                getting_started: `${modules}/file-picker/getting-started`,
                usage: `${modules}/file-picker/usage`,
                backend: `${modules}/file-picker/backend-integration`,
            }
        },
        editor: `${modules}/editor`,
    },

    stores: {
        general_stores: `${stores}/general`,
        theme_stores: `${stores}/theme`,
    },
};

export const sectioning = {
    inputs: {
        basic: 'doc-input-basic',
        password: 'doc-input-password',
        file_input: 'doc-file-input',
    },
    menu: {
        dropdown: 'doc-menu-dropdown',
        user: 'doc-menu-user',
    },
    file_picker: {
        backend: {
            loading_media: 'docs-file-picker-backend-integration-loading-media',
            uploading_to_storage: 'docs-file-picker-backend-integration-uploading-to-storage',
            deleting_from_storage: 'docs-file-picker-backend-integration-deleting-from-storage',
            storage_information: 'docs-file-picker-backend-integration-storage-information',
            downloading_from_storage: 'docs-file-picker-backend-integration-downloading-from-storage',
        }
    }
}


export type SectionItem = {
    id?: string;
    path: string;
    label: string;
    icon?: string;
    children?: SectionItem[];
    TOC?: Record<string, string>;
};

export type Section = {
    label: string;
    items: SectionItem[];
};

export const sections = [
    {
        label: 'Getting Started',
        items: [
            {
                path: routes.overview, 
                label: 'Overview', 
                icon: 'fa fa-home'
            },
            { 
                path: routes.installation, 
                label: 'Installation', 
                 icon: 'fa fa-download' 
            },
        ]
    },
    {
        label: 'Core',
        items: [
            {
                id: crypto.randomUUID(),
                path: routes.core.base,
                label: 'Components',
                icon: 'fa fa-cubes',
                children:[
                    { 
                        path: routes.core.children.buttons, 
                        label: 'Buttons', 
                    },
                    { 
                        path: routes.core.children.date, 
                        label: 'Date', 
                    },
                    { 
                        path: routes.core.children.inputs, 
                        label: 'Inputs', 
                    },
                    { 
                        path: routes.core.children.Menus, 
                        label: 'Menus',
                    },
                    { 
                        path: routes.core.children.alerts.modal, 
                        label: 'Modal',
                    },
                    { 
                        path: routes.core.children.progress,
                        label: 'Progress', 
                    },
                    { 
                        path: routes.core.children.alerts.toast, 
                        label: 'Toast',
                    },
                ]
            },
        ]
    },
    {
        label: 'Modules',
        items: [
            { 
                path: routes.modules.editor, 
                label: 'Editor',
                icon: 'fa fa-pencil-square-o' ,
                TOC: {
                    getting_started: 'docs-editor-getting-started',
                },
            },
            { 
                id: crypto.randomUUID(),
                path: routes.modules.file_picker.base, 
                label: 'File Picker',
                icon: 'fa fa-cloud-upload' ,
                children: [
                    {
                        label: 'Getting Started',
                        path: routes.modules.file_picker.children.getting_started,
                    },
                    {
                        label: 'Usage',
                        path: routes.modules.file_picker.children.usage,
                    },
                    {
                        label: 'Backend Integration',
                        path: routes.modules.file_picker.children.backend,
                        TOC: {
                            loading_media: 'docs-file-picker-backend-integration-loading-media',
                            uploading_to_storage: 'docs-file-picker-backend-integration-uploading-to-storage',
                            deleting_from_storage: 'docs-file-picker-backend-integration-deleting-from-storage',
                            storage_information: 'docs-file-picker-backend-integration-storage-information',
                            downloading_from_storage: 'docs-file-picker-backend-integration-downloading-from-storage',
                        }
                    }
                ]
            },
            { 
                id: crypto.randomUUID(),
                path: routes.modules.layout.base, 
                label: 'Layout',
                icon: 'fa fa-rocket' ,
                children: [
                    {      
                        label: 'Overview',
                        path: routes.modules.layout.children.overview,
                    },
                    {      
                        label: 'Getting Started',
                        path: routes.modules.layout.children.getting_started,
                    },
                    {      
                        label: 'Usage',
                        path: routes.modules.layout.children.usage,
                    }

                ]
            },
        ]
    },
    {
        label: 'Stores',
        items: [
            { 
                path: routes.stores.general_stores, 
                label: 'General',
                icon: 'fa fa-store' ,
            },
            { 
                path: routes.stores.theme_stores, 
                label: 'Theme',
                icon: 'fa fa-moon-o' ,
            },
        ]
    },
];
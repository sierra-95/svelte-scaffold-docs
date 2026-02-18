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
    overview: 'doc-overview',
    installation: {
        installation: 'doc-installation',
        font_awesome: 'doc-installation-font-awesome',
    },
    components: {
        buttons:{
            default_button: 'doc-button-default',
            custom_button: 'doc-button-custom',
            props: 'doc-button-props',
        },
        date: 'doc-date-picker',
        inputs: {
            basic_input: 'doc-input-basic',
            password_input: 'doc-input-password',
            search_bar: 'doc-input-search-bar',
            file_input: 'doc-file-input',
        },
        menu: {
            dropdown: 'doc-menu-dropdown',
            user_menu: 'doc-menu-user',
            tabs: 'doc-menu-tabs',
        },
        modal: {
            getting_started: 'doc-modal-getting-started',
            props: 'doc-modal-props',
        },
        progress: {
            circular_progress: 'doc-progress-circular',
            linear_progress: 'doc-progress-linear',
            custom_progress: 'doc-progress-custom',
        },
        toast: {
            getting_started: 'doc-toast-getting-started',
            props: 'doc-toast-props',
        }
    },
    modules: {
        editor: {
            getting_started: 'docs-editor-getting-started',
        },
        file_picker: {
            getting_started: 'docs-file-picker-getting-started',
            usage: 'docs-file-picker-usage',
            backend: {
                GET: 'docs-file-picker-backend-integration-get',
                POST: 'docs-file-picker-backend-integration-post',
                DELETE: 'docs-file-picker-backend-integration-delete',
            }
        },
        layout: {
            overview: 'docs-layout-overview',
            getting_started: 'docs-layout-getting-started',
            usage: {
                header: 'docs-layout-usage-header',
                menu : 'docs-layout-usage-menu',
            }
        }
    },
    stores: {
        general: {
            is_mobile: 'docs-stores-general-is-mobile',
            is_loading: 'docs-stores-general-is-loading',
            is_logged_in: 'docs-stores-general-is-logged-in',
            user_store: 'docs-stores-general-user-store',
        },
        theme: 'docs-stores-theme',
    }
}


export type SectionItem = {
    id?: string;
    path: string;
    label: string;
    icon?: string;
    children?: SectionItem[];
    TOC?: Partial<Record<string, string>>;
};

export type Section = {
    label: string;
    items: SectionItem[];
};

export const sections: Section[] = [
    {
        label: 'Getting Started',
        items: [
            {
                path: routes.overview, 
                label: 'Overview', 
                icon: 'fa fa-home',
                TOC :{
                    overview: sectioning.overview,
                }
            },
            { 
                path: routes.installation, 
                label: 'Installation', 
                icon: 'fa fa-download',
                TOC: {
                    installation: sectioning.installation.installation,
                    font_awesome: sectioning.installation.font_awesome,
                } 
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
                        TOC: {
                            default_button: sectioning.components.buttons.default_button,
                            custom_button: sectioning.components.buttons.custom_button,
                            props: sectioning.components.buttons.props,
                        }
                    },
                    { 
                        path: routes.core.children.date, 
                        label: 'Date', 
                        TOC:{
                            date_picker: sectioning.components.date,
                        }
                    },
                    { 
                        path: routes.core.children.inputs, 
                        label: 'Inputs', 
                        TOC:{
                            basic_input: sectioning.components.inputs.basic_input,
                            password_input: sectioning.components.inputs.password_input,
                            search_bar: sectioning.components.inputs.search_bar,
                            file_input: sectioning.components.inputs.file_input,
                        }
                    },
                    { 
                        path: routes.core.children.Menus, 
                        label: 'Menus',
                        TOC: {
                            dropdown: sectioning.components.menu.dropdown,
                            user_menu: sectioning.components.menu.user_menu,
                            tabs: sectioning.components.menu.tabs,
                        }
                    },
                    { 
                        path: routes.core.children.alerts.modal, 
                        label: 'Modal',
                        TOC: {
                            getting_started: sectioning.components.modal.getting_started,
                            props: sectioning.components.modal.props,
                        }
                    },
                    { 
                        path: routes.core.children.progress,
                        label: 'Progress', 
                        TOC: {
                            circular_progress: sectioning.components.progress.circular_progress,
                            linear_progress: sectioning.components.progress.linear_progress,
                            custom_progress: sectioning.components.progress.custom_progress,
                        }
                    },
                    { 
                        path: routes.core.children.alerts.toast, 
                        label: 'Toast',
                        TOC: {
                            getting_started: sectioning.components.toast.getting_started,
                            props: sectioning.components.toast.props,
                        }
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
                        TOC: {
                            getting_started: sectioning.modules.file_picker.getting_started,
                        }
                    },
                    {
                        label: 'Usage',
                        path: routes.modules.file_picker.children.usage,
                        TOC: {
                            usage: sectioning.modules.file_picker.usage,
                        }
                    },
                    {
                        label: 'Backend Integration',
                        path: routes.modules.file_picker.children.backend,
                        TOC: {
                            GET: sectioning.modules.file_picker.backend.GET,
                            POST: sectioning.modules.file_picker.backend.POST,
                            DELETE: sectioning.modules.file_picker.backend.DELETE,
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
                        TOC: {
                            overview: sectioning.modules.layout.overview,
                        }
                    },
                    {      
                        label: 'Getting Started',
                        path: routes.modules.layout.children.getting_started,
                        TOC: {
                            getting_started: sectioning.modules.layout.getting_started,
                        }
                    },
                    {      
                        label: 'Usage',
                        path: routes.modules.layout.children.usage,
                        TOC: {
                            header: sectioning.modules.layout.usage.header,
                            menu: sectioning.modules.layout.usage.menu,
                        }
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
                TOC: {
                    is_mobile: sectioning.stores.general.is_mobile,
                    is_loading: sectioning.stores.general.is_loading,
                    is_logged_in: sectioning.stores.general.is_logged_in,
                    user_store: sectioning.stores.general.user_store,
                }
            },
            { 
                path: routes.stores.theme_stores, 
                label: 'Theme',
                icon: 'fa fa-moon-o' ,
                TOC: {
                    getting_started: sectioning.stores.theme,
                }
            },
        ]
    },
];
const core = `/core`;
const modules = `/modules`;

//Core
const components = `${core}/components`
const features = `${core}/features`

export const routes = {
    overview: '/',
    installation: '/installation',
    
    core: {
        base: `${components}`,
        components: {
            base: `${core}/components`,
            children: {
                buttons: `${components}/buttons`,
                inputs: `${components}/inputs`,
                menus: `${components}/menus`,
                modal: `${components}/modal`,
                progress: `${components}/progress`,
                table: `${components}/table`,
            }
        },
        features: {
            base: `${features}`,
            children:  {
                global_search: `${features}/global-search`,
                toast_manager: `${features}/toast-manager`,
            }
        },
        random_stuff: `${core}/random-stuff`,
    },

    modules: {
        editor: `${modules}/editor`,
        file_picker: {
            base: `${modules}/file-picker`,
            children: {
                overview: `${modules}/file-picker/overview`,
                getting_started: `${modules}/file-picker/getting-started`,
                backend: `${modules}/file-picker/backend-integration`,
                usage: `${modules}/file-picker/usage`,
            }
        },
        layout: {
            base: `${modules}/layout`,
            children: {
                overview: `${modules}/layout/overview`,
                getting_started: `${modules}/layout/getting-started`,
                features: `${modules}/layout/features`,
                example: `${modules}/layout/example`,
            }
        },
    },
    stores: `/stores`,
    utils: `/utils`,

    system: {
        base: "/system/",
        social:{
            github: "https://github.com/sierra-95",
            instagram: "https://www.instagram.com/michaelmachohi/",
            linkedin: "https://www.linkedin.com/in/michael-machohi" 
        },
        resources:{
            github: "https://github.com/sierra-95/svelte-scaffold-docs",
            portfolio: "https://michaelmachohi.com",
            npm: "https://www.npmjs.com/package/@sierra-95/svelte-scaffold"
        },
        support: {
            issues: "https://github.com/sierra-95/svelte-scaffold-docs/issues",
        }
    }
};

export const sectionIds = {
    overview: 'doc-overview',
    installation: {
        installation: 'doc-installation',
        font_awesome: 'doc-installation-font-awesome',
    },

    components: {
        buttons:{
            default_button: 'doc-button-default',
            default_button_api: 'doc-button-default-api',
            custom_button: 'doc-button-custom',
            custom_button_api: 'doc-button-custom-api',
            hamburger_button: 'doc-button-hamburger',
            theme_button: 'doc-button-theme',
            whatsapp_share: 'doc-button-whatsapp-share',
            other_buttons: 'doc-button-other-buttons',
        },
        inputs: {
            basic_input: 'doc-input-basic',
            password_input: 'doc-input-password',
            password_strength_meter: 'doc-input-password-strength-meter',
            textarea: 'doc-input-textarea',
            date_time_input: 'doc-input-date-time',
            search_bar: 'doc-input-search-bar',
            select: 'doc-input-select',
            file_input: 'doc-file-input',
            component_api: 'doc-input-component-api',
        },
        menu: {
            dropdown: 'doc-menu-dropdown',
            user_menu: 'doc-menu-user',
            tabs: 'doc-menu-tabs',
            hamburger: 'doc-menu-hamburger',
            content_switcher: 'doc-menu-content-switcher',
        },
        modal: {
            getting_started: 'doc-modal-getting-started',
            static_mode: 'doc-modal-static-mode',
            dynamic_mode: 'doc-modal-dynamic-mode',
            component_api: 'doc-modal-component-api',
        },
        progress: {
            circular_progress: 'doc-progress-circular',
            linear_progress: 'doc-progress-linear',
            custom_progress: 'doc-progress-custom',
        },
        table: {
            getting_started: 'doc-table-getting-started',
            component_api: 'doc-table-component-api',
            advanced_example: 'doc-table-advanced-example',
        }
    },

    features: {
        global_search: 'docs-global-search',
        toast_manager: {
            overview: 'docs-toast-manager-overview',
            usage: 'docs-toast-manager-usage',
        },
    },

    random_stuff: {
        avatar: 'doc-random-stuff-avatar',
        carousel: 'doc-random-stuff-carousel',
        checkbox: 'doc-random-stuff-checkbox',
        color_picker: 'doc-random-stuff-color-picker',
        hr: 'doc-random-stuff-hr',
        timezones: 'doc-random-stuff-timezones',
    },

    modules: {
        editor: {
            getting_started: 'docs-editor-getting-started',
            saving_content: 'docs-editor-saving-content',
            inserting_images: 'docs-editor-inserting-images',
        },
        file_picker: {
            overview: 'docs-file-picker-overview',
            getting_started: {
                setting_up: 'docs-file-picker-getting-started-setting-up',
                setting_up_storage: 'docs-file-picker-getting-started-setting-up-storage',
            },
            backend: {
                upload_example: 'docs-file-picker-backend-integration-upload-example',
                downloading: 'docs-file-picker-backend-integration-downloading',
            },
            usage: {
                manage_mode: 'docs-file-picker-usage-manage-mode',
                store_props: 'docs-file-picker-usage-store-props',
            },
        },
        layout: {
            overview: 'docs-layout-overview',
            getting_started: {
                defination: 'docs-layout-getting-started-definition',
                importing: 'docs-layout-getting-started-importing',
            },
            features: {
                flexible_header: 'docs-layout-usage-header',
                header_dropdown: 'docs-layout-usage-header-dropdown',
                menu : 'docs-layout-usage-menu',
                RBAC: 'docs-layout-usage-rbac',
            }
        },
    },
    
    stores_utils: {
        stores: {
            is_mobile: 'docs-stores-is-mobile',
            is_loading: 'docs-stores-is-loading',
            is_logged_in: 'docs-stores-is-logged-in',
            user_store: 'docs-stores-user',
            theme_store: 'docs-stores-theme',
        },
        utils: {
            isValidEmail: 'docs-utils-isValidEmail',
            handleRedirect: 'docs-utils-handle-redirect',
        },
    }
}

export const sections = [
    {
        label: 'Getting Started',
        items: [
            {
                path: routes.overview, 
                label: 'Overview', 
                icon: 'fa fa-home',
                TOC :{
                    Overview: sectionIds.overview,
                }
            },
            { 
                path: routes.installation, 
                label: 'Installation', 
                icon: 'fa fa-download',
                TOC: {
                    getting_started: sectionIds.installation.installation,
                    font_awesome: sectionIds.installation.font_awesome,
                } 
            },
        ]
    },
    {
        label: 'Core',
        items: [
            {
                id: crypto.randomUUID(),
                path: routes.core.components.base,
                label: 'Components',
                icon: 'fa fa-cubes',
                children:[
                    { 
                        path: routes.core.components.children.buttons, 
                        label: 'Buttons', 
                        TOC: {
                            default_button: sectionIds.components.buttons.default_button,
                            default_button_api: sectionIds.components.buttons.default_button_api,
                            custom_button: sectionIds.components.buttons.custom_button,
                            custom_button_api: sectionIds.components.buttons.custom_button_api,
                            hamburger_button: sectionIds.components.buttons.hamburger_button,
                            theme_button: sectionIds.components.buttons.theme_button,
                            Whatsapp_share: sectionIds.components.buttons.whatsapp_share,
                            other_buttons: sectionIds.components.buttons.other_buttons,
                        }
                    },
                    { 
                        path: routes.core.components.children.inputs, 
                        label: 'Inputs', 
                        TOC:{
                            basic_input: sectionIds.components.inputs.basic_input,
                            password_input: sectionIds.components.inputs.password_input,
                            password_strength_meter: sectionIds.components.inputs.password_strength_meter,
                            textarea: sectionIds.components.inputs.textarea,
                            date_time_input: sectionIds.components.inputs.date_time_input,
                            search_bar: sectionIds.components.inputs.search_bar,
                            select: sectionIds.components.inputs.select,
                            file_input: sectionIds.components.inputs.file_input,
                            components_api: sectionIds.components.inputs.component_api,
                        }
                    },
                    { 
                        path: routes.core.components.children.menus, 
                        label: 'Menus',
                        TOC: {
                            dropdown: sectionIds.components.menu.dropdown,
                            user_menu: sectionIds.components.menu.user_menu,
                            tabs: sectionIds.components.menu.tabs,
                            content_switcher: sectionIds.components.menu.content_switcher,
                            hamburger: sectionIds.components.menu.hamburger,
                        }
                    },
                    { 
                        path: routes.core.components.children.modal, 
                        label: 'Modal',
                        TOC: {
                            getting_started: sectionIds.components.modal.getting_started,
                            static_mode: sectionIds.components.modal.static_mode,
                            dynamic_mode: sectionIds.components.modal.dynamic_mode,
                            component_api: sectionIds.components.modal.component_api,
                        }
                    },
                    { 
                        path: routes.core.components.children.progress,
                        label: 'Progress', 
                        TOC: {
                            circular_progress: sectionIds.components.progress.circular_progress,
                            linear_progress: sectionIds.components.progress.linear_progress,
                            custom_progress: sectionIds.components.progress.custom_progress,
                        }
                    },
                    {
                        path: routes.core.components.children.table,
                        label: 'Table',
                        TOC: {
                            getting_started: sectionIds.components.table.getting_started,
                            component_api: sectionIds.components.table.component_api,
                            advanced_example: sectionIds.components.table.advanced_example,
                        }
                    }
                ]
            },
            {
                id: crypto.randomUUID(),
                path: routes.core.features.base,
                label: 'Features',
                icon: 'fa-solid fa-star',
                children:[
                    { 
                        path: routes.core.features.children.global_search, 
                        label: 'Global Search',
                        icon: 'fa-solid fa-magnifying-glass' ,
                        TOC: {
                            global_search: sectionIds.features.global_search,
                        },
                    },
                    {
                        path: routes.core.features.children.toast_manager,
                        label: 'Toast Manager',
                        icon: 'fa-solid fa-bell',
                        TOC: {
                            Overview: sectionIds.features.toast_manager.overview,
                            Usage: sectionIds.features.toast_manager.usage
                        }
                    }
                ]
            }
        ]
    },
    {
        label: '',
        items: [
            {
                path: routes.core.random_stuff, 
                label: 'Random Stuff', 
                icon: 'fa fa-clone',
                TOC :{
                    avatar: sectionIds.random_stuff.avatar,
                    carousel: sectionIds.random_stuff.carousel,
                    checkbox: sectionIds.random_stuff.checkbox,
                    color_picker: sectionIds.random_stuff.color_picker,
                    horizontal_rule: sectionIds.random_stuff.hr,
                    timezones: sectionIds.random_stuff.timezones,
                }
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
                    getting_started: sectionIds.modules.editor.getting_started,
                    saving_content: sectionIds.modules.editor.saving_content,
                    inserting_images: sectionIds.modules.editor.inserting_images,
                },
            },
            { 
                id: crypto.randomUUID(),
                path: routes.modules.file_picker.base, 
                label: 'File Picker',
                icon: 'fa fa-cloud-upload' ,
                children: [
                    {
                        label: 'Overview',
                        path: routes.modules.file_picker.children.overview,
                        TOC: {
                            overview: sectionIds.modules.file_picker.overview,
                        }
                    },
                    {
                        label: 'Getting Started',
                        path: routes.modules.file_picker.children.getting_started,
                        TOC: {
                            setting_up: sectionIds.modules.file_picker.getting_started.setting_up,
                            setting_up_storage: sectionIds.modules.file_picker.getting_started.setting_up_storage,
                        }
                    },
                    {
                        label: 'Backend Integration',
                        path: routes.modules.file_picker.children.backend,
                        TOC: {
                            Upload_example: sectionIds.modules.file_picker.backend.upload_example,
                            Downloading: sectionIds.modules.file_picker.backend.downloading,
                        }
                    },
                    {
                        label: 'Usage',
                        path: routes.modules.file_picker.children.usage,
                        TOC: {
                            Manage_mode: sectionIds.modules.file_picker.usage.manage_mode,
                            Store_props: sectionIds.modules.file_picker.usage.store_props,
                        }
                    },
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
                            overview: sectionIds.modules.layout.overview,
                        }
                    },
                    {      
                        label: 'Getting Started',
                        path: routes.modules.layout.children.getting_started,
                        TOC: {
                            defination: sectionIds.modules.layout.getting_started.defination,
                            importing: sectionIds.modules.layout.getting_started.importing,
                        }
                    },
                    {      
                        label: 'Features',
                        path: routes.modules.layout.children.features,
                        TOC: {
                            Flexible_header: sectionIds.modules.layout.features.flexible_header,
                            Header_dropdown: sectionIds.modules.layout.features.header_dropdown,
                            Tree_menu: sectionIds.modules.layout.features.menu,
                            RBAC: sectionIds.modules.layout.features.RBAC,
                        }
                    }

                ]
            },
        ]
    },
    {
        label: 'Stores & Utils',
        items: [
            { 
                path: routes.stores, 
                label: 'Stores',
                icon: 'fa fa-store' ,
                TOC: {
                    is_mobile: sectionIds.stores_utils.stores.is_mobile,
                    is_loading: sectionIds.stores_utils.stores.is_loading,
                    is_logged_in: sectionIds.stores_utils.stores.is_logged_in,
                    user_store: sectionIds.stores_utils.stores.user_store,
                    theme_store: sectionIds.stores_utils.stores.theme_store,
                }
            },
            { 
                path: routes.utils, 
                label: 'Utils',
                icon: 'fa fa-tools' ,
                TOC: {
                    isValidEmail: sectionIds.stores_utils.utils.isValidEmail,
                    handleRedirect: sectionIds.stores_utils.utils.handleRedirect,
                }
            },
        ]
    },
    {
        label: 'System',
        hidden: true,
        items: [
            { 
                id: crypto.randomUUID(),
                path: routes.system.base + crypto.randomUUID(), 
                label: 'Resources',
                icon: 'fa fa-link' ,
                children:[
                    {      
                        label: 'Github Repository',
                        path: routes.system.resources.github,
                    },
                    {      
                        label: 'My Portfolio',
                        path: routes.system.resources.portfolio,
                    },
                ]
            },
            { 
                id: crypto.randomUUID(),
                path: routes.system.base + crypto.randomUUID(), 
                label: 'Support',
                icon: 'fa-solid fa-question' ,
                children:[
                    {      
                        label: 'Github Issues',
                        path: routes.system.support.issues,
                    },
                ]
            }
        ]
    },
];
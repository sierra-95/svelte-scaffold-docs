const core = `/core`;
const modules = `/modules`;
const stores = `/stores`;

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
                calender: `${components}/calender`,
                carousel: `${components}/carousel`,
                general: `${components}/general`,
                inputs: `${components}/inputs`,
                menus: `${components}/menus`,
                modal: `${components}/alerts/modal`,
                progress: `${components}/progress`,
                toast: `${components}/alerts/toast`,
            }
        },
        features: {
            base: `${features}`,
            children:  {
                global_search: `${features}/global-search`,
            }
        }
    },

    modules: {
        editor: `${modules}/editor`,
        file_picker: {
            base: `${modules}/file-picker`,
            children: {
                getting_started: `${modules}/file-picker/getting-started`,
                usage: `${modules}/file-picker/usage`,
                backend: `${modules}/file-picker/backend-integration`,
            }
        },
        layout: {
            base: `${modules}/layout`,
            children: {
                overview: `${modules}/layout/overview`,
                getting_started: `${modules}/layout/getting-started`,
                usage: `${modules}/layout/usage`,
                example: `${modules}/layout/example`,
            }
        },
    },
    stores: {
        general_stores: `${stores}/general`,
        theme_stores: `${stores}/theme`,
    },
    system: {
        base: "/system/",
        social:{
            github: "https://github.com/sierra-95",
            instagram: "https://www.instagram.com/michaelmachohi/",
            linkedin: "https://www.linkedin.com/in/michael-machohi" 
        },
        resources:{
            github: "https://github.com/sierra-95/svelte-scaffold-docs",
            donate: '/donate',
            portfolio: "https://michaelmachohi.com",
        },
        support: {
            issues: "https://github.com/sierra-95/svelte-scaffold-docs/issues",
            help_center: "/support",
            system_status: "/status"
        },
        legal: {
            terms: "/policies/terms",
            privacy: "/policies/privacy",
            cookies: "/policies/cookies"
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
            custom_button: 'doc-button-custom',
            props: 'doc-button-props',
        },
        calender: {
            date_picker : 'doc-date-picker',
        },
        carousel: {
            default: 'doc-carousel-default',
        },
        general: {
            checkbox: 'doc-other-checkbox',
            hr: 'doc-other-hr',
        },
        inputs: {
            basic_input: 'doc-input-basic',
            password_input: 'doc-input-password',
            search_bar: 'doc-input-search-bar',
            select: 'doc-input-select',
            file_input: 'doc-file-input',
        },
        menu: {
            dropdown: 'doc-menu-dropdown',
            user_menu: 'doc-menu-user',
            tabs: 'doc-menu-tabs',
            hamburger: 'doc-menu-hamburger',
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

    features: {
        global_search: 'docs-global-search',
    },

    modules: {
        editor: {
            getting_started: 'docs-editor-getting-started',
            inserting_images: 'docs-editor-inserting-images',
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
        },
    },
    
    stores: {
        general: {
            is_mobile: 'docs-stores-general-is-mobile',
            is_loading: 'docs-stores-general-is-loading',
            is_logged_in: 'docs-stores-general-is-logged-in',
            user_store: 'docs-stores-general-user-store',
        },
        theme: {
            theme_store: 'docs-stores-theme-theme-store',
            theme_button: 'docs-stores-theme-theme-button',
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
                    introduction: sectionIds.overview,
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
                            custom_button: sectionIds.components.buttons.custom_button,
                            props: sectionIds.components.buttons.props,
                        }
                    },
                    { 
                        path: routes.core.components.children.calender, 
                        label: 'Calender', 
                        TOC:{
                            date_picker: sectionIds.components.calender.date_picker,
                        }
                    },
                    { 
                        path: routes.core.components.children.carousel, 
                        label: 'Carousel', 
                        TOC: {
                            default: sectionIds.components.carousel.default,
                        }
                    },
                    {
                        path: routes.core.components.children.general,
                        label: 'General',
                        TOC: {
                            checkbox: sectionIds.components.general.checkbox,
                            hr: sectionIds.components.general.hr,
                        }
                    },
                    { 
                        path: routes.core.components.children.inputs, 
                        label: 'Inputs', 
                        TOC:{
                            basic_input: sectionIds.components.inputs.basic_input,
                            password_input: sectionIds.components.inputs.password_input,
                            search_bar: sectionIds.components.inputs.search_bar,
                            select: sectionIds.components.inputs.select,
                            file_input: sectionIds.components.inputs.file_input,
                        }
                    },
                    { 
                        path: routes.core.components.children.menus, 
                        label: 'Menus',
                        TOC: {
                            dropdown: sectionIds.components.menu.dropdown,
                            user_menu: sectionIds.components.menu.user_menu,
                            tabs: sectionIds.components.menu.tabs,
                            hamburger: sectionIds.components.menu.hamburger,
                        }
                    },
                    { 
                        path: routes.core.components.children.modal, 
                        label: 'Modal',
                        TOC: {
                            getting_started: sectionIds.components.modal.getting_started,
                            props: sectionIds.components.modal.props,
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
                        path: routes.core.components.children.toast, 
                        label: 'Toast',
                        TOC: {
                            getting_started: sectionIds.components.toast.getting_started,
                            props: sectionIds.components.toast.props,
                        }
                    },
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
                ]
            }
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
                        label: 'Getting Started',
                        path: routes.modules.file_picker.children.getting_started,
                        TOC: {
                            getting_started: sectionIds.modules.file_picker.getting_started,
                        }
                    },
                    {
                        label: 'Usage',
                        path: routes.modules.file_picker.children.usage,
                        TOC: {
                            usage: sectionIds.modules.file_picker.usage,
                        }
                    },
                    {
                        label: 'Backend Integration',
                        path: routes.modules.file_picker.children.backend,
                        TOC: {
                            GET: sectionIds.modules.file_picker.backend.GET,
                            POST: sectionIds.modules.file_picker.backend.POST,
                            DELETE: sectionIds.modules.file_picker.backend.DELETE,
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
                            overview: sectionIds.modules.layout.overview,
                        }
                    },
                    {      
                        label: 'Getting Started',
                        path: routes.modules.layout.children.getting_started,
                        TOC: {
                            getting_started: sectionIds.modules.layout.getting_started,
                        }
                    },
                    {      
                        label: 'Usage',
                        path: routes.modules.layout.children.usage,
                        TOC: {
                            header: sectionIds.modules.layout.usage.header,
                            menu: sectionIds.modules.layout.usage.menu,
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
                    is_mobile: sectionIds.stores.general.is_mobile,
                    is_loading: sectionIds.stores.general.is_loading,
                    is_logged_in: sectionIds.stores.general.is_logged_in,
                    user_store: sectionIds.stores.general.user_store,
                }
            },
            { 
                path: routes.stores.theme_stores, 
                label: 'Theme',
                icon: 'fa fa-moon-o' ,
                TOC: {
                    theme_store: sectionIds.stores.theme.theme_store,
                    theme_button: sectionIds.stores.theme.theme_button,
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
                        label: 'Donate to us',
                        path: routes.system.resources.donate,
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
                    {      
                        label: 'Help Center',
                        path: routes.system.support.help_center,
                    },
                    {      
                        label: 'System Status',
                        path: routes.system.support.system_status,
                    },
                ]
            },
            { 
                id: crypto.randomUUID(),
                path: routes.system.base + crypto.randomUUID(), 
                label: 'Legal',
                icon: 'fa-solid fa-gavel' ,
                children:[
                    {      
                        label: 'Terms of Use',
                        path: routes.system.legal.terms,
                    },
                    {      
                        label: 'Privacy Policy',
                        path: routes.system.legal.privacy,
                    },
                    {      
                        label: 'Cookie Preference',
                        path: routes.system.legal.cookies,
                    },
                ]
            },
        ]
    },
];
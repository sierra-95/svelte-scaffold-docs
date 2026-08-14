import type {basicPage} from '@sierra-95/svelte-scaffold';

const components = '/core/components';
const features = '/core/features';

const file_picker = '/modules/file-picker';
const layout = '/modules/layout';

export const routes = {

  overview: {
    path: '/',
  } as basicPage,

  installation: {
    path: '/installation',
    ids: {
      installing: 'installing',
      scaffold_icons: 'scaffold-icons',
    }
  } as basicPage,

  scaffold_internal : {
    path : '/scaffold-internal',
    ids: {
      sections_file : 'sections_file',
      routes_file : 'routes_file',
      global_css : 'global-css',
    },
  } as basicPage,

  core: {

    // COMPONENTS
    components: {
      base: components,
      children: {

        buttons: {
          path : components + '/buttons',
          ids: {
            basic_button: 'basic-button',
            custom_button: 'custom-button',
            hamburger_button: 'hamburger-button',
            theme_button: 'theme-button',
            whatsapp_button: 'whatsapp-button',
            other_buttons: 'other-buttons',
            basic_button_api: 'basic-button-api',
            custom_button_api: 'custom-button-api',
          }
        } as basicPage,

        inputs: {
          path : components + '/inputs',
          ids: {
            basic_input: 'basic-input',
            password_input: 'password-input',
            password_strength_meter: 'password-strength-meter',
            textarea_input: 'textarea-input',
            date_time_input: 'date-time-input',
            search_bar_input: 'search-bar-input',
            select_input: 'select-input',
            file_input: 'file-input',
            inputs_api: 'inputs-api',
          }
        } as basicPage,

        menus: {
          path : components + '/menus',
          ids: {
            dropdown_menu: 'dropdown-menu',
            user_menu: 'user-menu',
            tabs_menu: 'tabs-menu',
            content_switcher: 'content-switcher',
            hamburger_menu: 'hamburger-menu',
          }
        } as basicPage,
        
        modal: {
          path : components + '/modal',
          ids: {
            getting_started: 'getting-started',
            static_mode: 'static-mode',
            dynamic_mode: 'dynamic-mode',
            modal_api: 'modal-api',
          }
        } as basicPage,
        
        progress: {
          path : components + '/progress',
          ids: {
            circular_progress: 'circular-progress',
            linear_progress: 'linear-progress',
            custom_progress: 'custom-progress',
          }
        } as basicPage,

        table: {
          path : components + '/table',
          ids: {
            getting_started: 'getting-started',
            advanced_example: 'advanced-example',
            table_api: 'table-api',
          }
        } as basicPage,
      },
    },

    // FEATURES
    features: {
      base: features,
      children: {
        toast_manager: {
          path : features + '/toast-manager',
          ids: {
            overview: 'overview',
            usage: 'usage',
          }
        } as basicPage,
      },
    },

    // UTILITIES
    utilities: {
      path: '/core/utilities',
      ids: {
        avatar: 'avatar',
        carousel: 'carousel',
        checkbox: 'checkbox',
        color_picker: 'color-picker',
        hr: 'hr',
        timezones: 'timezones',
      },
    } as basicPage,
  },

  modules: {

    // EDITOR
    editor: {
      path: '/modules/editor',
      ids: {
        getting_started: 'getting-started',
        saving_content: 'saving-content',
        inserting_images: 'inserting-images',
        supported_styles: 'supported-styles',
      }
    } as basicPage,

    // FILE PICKER
    file_picker: {
      base: file_picker,
      children: {
        getting_started: {
          path: file_picker + '/getting-started',
          ids: {
            getting_started : 'getting-started',
            storage : 'storage',
          }
        } as basicPage,
        
        backend: {
          path: file_picker + '/backend-integration',
          ids: {
            upload_example: 'upload-example',
            downloading_example: 'downloading-example',
          }
        } as basicPage,

        usage: {
          path: file_picker + '/usage',
          ids: {
            manage_mode: 'manage-mode',
            store_props: 'store-props',
          }
        } as basicPage,
      },
    },

    // LAYOUT
    layout: {
      base: layout,
      children: {
        getting_started: {
          path : layout + '/getting-started',
          ids: {
            defination: 'definition',
            importing: 'importing',
          }
        } as basicPage,

        features: {
          base : layout + '/features',
          children:  {
            structure: {
              path : layout + '/features/structure',
              ids: {
                header_options: 'header-options',
                tree_menu: 'tree-menu',
              }
            } as basicPage,
            global: {
              path : layout + '/features/global',
              ids: {
                theme: 'theme',
                toc: 'toc',
                global_search: 'global-search',
                navigator: 'navigator',
                rbac: 'rbac',
              }
            } as basicPage,
          }
        },
      },
    },
  },

  // STORES
  stores: {
    path: '/stores',
    ids: {
      device_width: 'device-width',
      isLoading: 'is-loading',
      isLoggedIn: 'is-logged-in',
      user_store: 'user-store',
      theme_store: 'theme-store',
    }
  } as basicPage,

  // UTILS
  utils: {
    path: '/utils',
    ids: {
      isValidEmail: 'is-valid-email',
      handleRedirect: 'handle-redirect',
    }
  } as basicPage,
};
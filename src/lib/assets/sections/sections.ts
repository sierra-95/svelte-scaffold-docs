import { routes } from './routes.js';
import type {Section} from '@sierra-95/svelte-scaffold';

const comp = routes.core.components;
const feat = routes.core.features;
const fpk = routes.modules.file_picker;
const lay = routes.modules.layout;

export const sections: Section[] = [
	{
		label: 'Getting Started',
		nodes: [
			{
				label: 'Overview',
				path: routes.overview.path,
				icon: 'fa-solid fa-magnifying-glass',
				role: 'user',
			},
			{
				label: 'Installation',
				path: routes.installation.path,
				icon: 'fa-solid fa-angles-down',
			},
			{
				label: 'Scaffold Internal',
				icon: 'fa-solid fa-cogs',
				path: routes.scaffold_internal.path,
			},
		],
	},
	{
		label: 'Core',
		nodes: [
			{
				label: 'Components',
				path: comp.base,
				icon: 'fa-solid fa-puzzle-piece',
				children: [
					{
						label: 'Buttons',
						path: comp.children.buttons.path,
						icon: 'fa-solid fa-toggle-off',
					},
					{
						label: 'Inputs',
						path: comp.children.inputs.path,
						icon: 'fa-regular fa-keyboard',
					},
					{
						label: 'Menus',
						path: comp.children.menus.path,
						icon: 'fa-solid fa-bars',
					},
					{
						label: 'Modal',
						path: comp.children.modal.path,
						icon: 'fa-solid fa-window-restore',
					},
					{
						label: 'Progress',
						path: comp.children.progress.path,
						icon: 'fa-solid fa-spinner',
					},
					{
						label: 'Table',
						path: comp.children.table.path,
						icon: 'fa-solid fa-table',
					},
				],
			},
			{
				label: 'Features',
				path: feat.base,
				icon: 'fa-solid fa-wand-magic-sparkles',
				children: [
					{
						label: 'Toast Manager',
						path: feat.children.toast_manager.path,
						icon: 'fa-solid fa-bell',
					},
				],
			},
			{
				label: 'Utilities',
				path: routes.core.utilities.path,
				icon: 'fa-solid fa-toolbox',
			},
		],
	},
	{
		label: 'Modules',
		nodes: [
			{
				label: 'Editor',
				path: routes.modules.editor.path,
				icon: 'fa-regular fa-pen-to-square',
			},
			{
				label: 'File Picker',
				path: fpk.base,
				icon: 'fa-regular fa-cloud',
				children: [
					{
						label: 'Getting Started',
						path: fpk.children.getting_started.path,
						icon: 'fa-solid fa-terminal',
					},
					{
						label: 'Backend Integration',
						path: fpk.children.backend.path,
						icon: 'fa-brands fa-node-js',
					},
					{
						label: 'Usage',
						path: fpk.children.usage.path,
						icon: 'fa-solid fa-code',
					},
				],
			},
			{
				label: 'Layout',
				path: lay.base,
				icon: 'fa-regular fa-copyright',
				children: [
					{
						label: 'Getting Started',
						path: lay.children.getting_started.path,
						icon: 'fa-solid fa-terminal',
					},
					{
						label: 'Features',
						path: lay.children.features.base,
						icon: 'fa-solid fa-wand-magic-sparkles',
						children: [
							{
								label: 'Structure',
								icon: 'fa-solid fa-chart-diagram',
								path: lay.children.features.children.structure.path,
							},
							{
								label: 'Global',
								icon: 'fa-solid fa-route',
								path: lay.children.features.children.global.path,
							},
						],
					},
				],
			},
		],
	},
	{
		label: 'Stores + Utils',
		nodes: [
			{
				label: 'Stores',
				path: routes.stores.path,
				icon: 'fa fa-store',
			},
			{
				label: 'Utils',
				path: routes.utils.path,
				icon: 'fa fa-grip',
			},
		],
	},
];
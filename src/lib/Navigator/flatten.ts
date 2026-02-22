import type {Section} from '@sierra-95/svelte-scaffold'
type FlatPage = {
    path: string;
    label: string;
    trail: string[];
};

export function flattenSections(sections) {
    const pages: FlatPage[] = [];

    for (const section of sections) {
        for (const item of section.items) {

            // Simple page (no children)
            if (!item.children) {
                pages.push({
                    path: item.path,
                    label: item.label,
                    trail: [section.label, item.label]
                });
            }

            // Item with children
            if (item.children) {
                for (const child of item.children) {
                    pages.push({
                        path: child.path,
                        label: child.label,
                        trail: [section.label, item.label, child.label]
                    });
                }
            }
        }
    }

    return pages;
}
import { sections } from '$lib';

export type SearchResult = {
  label: string;
  path: string;
  sectionId?: string;
  keywords: string;
};

export function buildSearchIndex() {
    const results: SearchResult[] = [];

    sections.forEach(section => {
        section.items.forEach(item => {
            // Level 1
            results.push({
                label: item.label,
                path: item.path,
                keywords: item.label.toLowerCase(),
            });

            // Level 2
            item.children?.forEach(child => {
                results.push({
                label: `${item.label} → ${child.label}`,
                path: child.path,
                keywords: `${item.label} ${child.label}`.toLowerCase(),
                });

                // Level 3 (TOC)
                if (child.TOC) {
                Object.entries(child.TOC).forEach(([key, id]) => {
                    results.push({
                    label: `${child.label} → ${key.replaceAll('_',' ')}`,
                    path: child.path,
                    sectionId: id,
                    keywords: `${child.label} ${key}`.toLowerCase(),
                    });
                });
                }
            });

            // Level 3 directly on item
            if (item.TOC) {
                Object.entries(item.TOC).forEach(([key, id]) => {
                results.push({
                    label: `${item.label} → ${key.replaceAll('_',' ')}`,
                    path: item.path,
                    sectionId: id,
                    keywords: `${item.label} ${key}`.toLowerCase(),
                });
                });
            }
        });
    });
    return results;
}

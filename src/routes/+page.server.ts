import {error} from "@sveltejs/kit";

export async function load() {
    const paths = import.meta.glob('/src/datas/home.md', {eager: true});

    for (const path in paths) {
        const file = paths[path];

        if (file && typeof file === 'object' && "metadata" in file) {
            const meta = file.metadata;
            return {
                meta: meta,
                content: file.default.render()
            }
        }
    }

    throw error(404, 'Not Found');
}

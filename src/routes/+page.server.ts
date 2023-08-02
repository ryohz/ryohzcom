import {error} from "@sveltejs/kit";
import { head } from "../datas/head";

export async function load() {
    const paths = import.meta.glob('/src/datas/home.md', {eager: true});

    for (const path in paths) {
        const file = paths[path];

        if (file && typeof file === 'object' && "metadata" in file) {
            const page_meta = file.metadata;

            return {
                head: head,
                meta: page_meta,
                content: file.default?.render(),
            }
        }
    }

    throw error(404, 'Not Found');
}

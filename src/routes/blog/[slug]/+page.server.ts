import {blog_datas} from "../../../contents/datas";
import type {BlogData} from "../../../contents/datas";
import {error} from '@sveltejs/kit';

/** @type {import('./$type').PageServerLoad} */
export async function load({params}) {
    const id = params.slug;

    let is_exist = false;
    const datas: BlogData[] = blog_datas;
    for (const blog_data of datas) {
        if (blog_data.id === id) {
            is_exist = true;
        }
    }

    if (is_exist) {
        /* @vite-ignore */
        try {
            const data = await import(`../../../contents/posts/${id}.ts`);
            return {
                data: data.data,
                err: undefined
            }
        } catch (err) {
            return {
                data: undefined,
                err: err
            }
        }
    }
    throw error(404, 'Not found');
}


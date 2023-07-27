import { blog_datas } from "../../contents/datas";

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        blog_datas: blog_datas,
    }
}


import {blog_datas} from "../../../contents/datas";
import type {BlogData} from "../../../contents/datas";
// import {error} from '@sveltejs/kit';
// import exampleMarkdown from '../../../posts/hastad_broadcast_attack.md';

/** @type {import('./$type').PageServerLoad} */
export async function load({params}) {
    // const id = params.slug;
    //
    // let is_exist = false;
    // const datas: BlogData[] = blog_datas;
    // for (const blog_data of datas) {
    //     if (blog_data.id === id) {
    //         is_exist = true;
    //     }
    // }
    //
    // if (is_exist) {
    //     /* @vite-ignore */
    //     try {
    //         const data = await import(`../../../contents/posts/${id}.ts`);
    //         return {
    //             data: data.data,
    //             err: undefined
    //         }
    //     } catch (err) {
    //         return {
    //             data: undefined,
    //             err: err
    //         }
    //     }
    // }
    // throw error(404, 'Not found');


    //     const post = await import("../hastad_broadcast_attack.md");
    //     const title = post.metadata;
    //     console.log(title);
    
    const id = params.slug;
    const article = await import(`../../../posts/${id}.md`);
    const html = article.default.render().html;
    return {
        html: html
    }
}


// import {error} from '@sveltejs/kit'
//
// export async function load({params}) {
//     try {
//         const post = await import(`../../../posts/${params.slug}.md`)
//         return {
//             content: post.default,
//             meta: post.metadata
//         }
//     } catch (e) {
//         throw error(404, `Could not find ${params.slug}`)
//     }
// }
//



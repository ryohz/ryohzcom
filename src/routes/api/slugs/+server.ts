import {json} from "@sveltejs/kit";

export async function GET() {
    let slugs: string[] = []

    const paths = import.meta.glob('/src/posts/*.md', {eager: true});
    for (const path in paths) {
        const slug = path.split('/').at(-1)?.replace('.md', '');
        if (typeof slug === 'string') {
            slugs.push(slug);
        }
    }

    return json(slugs);
}

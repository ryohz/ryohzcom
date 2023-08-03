import type {Post} from '$lib/types';
import {error} from '@sveltejs/kit';

export async function load({params, fetch}) {
    const response = await fetch("/api/slugs");
    const slugs: string[] = await response.json();
    let slug = "";

    for (const index in slugs) {
        slug = slugs[index];
        if (slug === params.slug) {
            const post = await import(`../../../posts/${slug}.md`);
            if (post.metadata.published) {
                return {
                    content: post.default,
                    metadata: post.metadata,
                }
            }
        }
    }

    throw error(404, 'Not Found');
}

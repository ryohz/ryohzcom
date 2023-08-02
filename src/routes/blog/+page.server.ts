import type {Post} from '$lib/types'
import {head} from '../../datas/head'

export async function load({fetch}) {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()
    return {head: head, posts: posts};
}


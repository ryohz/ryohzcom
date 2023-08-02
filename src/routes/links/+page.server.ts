import {social_links} from "../../datas/links";
import {head} from "../../datas/head";

export async function load() {
    return {
        social_links: social_links,
        head: head,
    }
}

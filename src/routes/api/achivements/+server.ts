import achivements from "../../../datas/portfolio/achievements";
import {json} from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return json(achivements);
}

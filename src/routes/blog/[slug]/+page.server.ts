/** @type {import('./$type').PageServerLoad} */
export async function load({params}) {
    try {
        const data = await import('../../../contents/posts/hastad_broadcast_attack');
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


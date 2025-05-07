import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({locals}) => {
    const user = await locals.currentUser()
    if(!user) {
        return new Response('Unauthorized', {status: 401})
    }
    console.log(`user.id: ${user.id}`)
    const data = {
        title: 'Challenge 1',
        description: 'Description 1'
    }
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const POST: APIRoute = async ({locals, request}) => {
    const user = await locals.currentUser()
    if(!user) {
        return new Response('Unauthorized', {status: 401})
    }
    console.log(`user.id: ${user.id}`)
    return new Response(JSON.stringify({ok: true}), {
        status: 201
    })
}
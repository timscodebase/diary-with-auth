import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals, url }) => {
	console.log('Locals:', locals);
  // redirect user if not logged in
  if (!locals.user) {
    throw redirect(302, '/')
  }

	try {
		const postRes = await fetch(`${url.origin}/api/posts.json`)
		const posts = await postRes.json()

		const totalRes = await fetch(`${url.origin}/api/posts/count`)
		const total = await totalRes.json()

		return { posts, total }
	} catch (error) {
		console.log(error)
	}
}
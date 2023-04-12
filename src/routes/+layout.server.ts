import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const csr = true

export const load: LayoutServerLoad = async ({ locals, url }) => {
	try {
		return {
			path: url.pathname,
			user: locals.user,
		}
	}
	catch(err) {
		throw error(500, err)
	}
}

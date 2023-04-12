import { error } from '@sveltejs/kit'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
	try {
		const ReadMeFile = await import('../../README.md')
		const ReadMe = ReadMeFile.default
		
		return {
			ReadMe,
		}
	}
	catch(err) {
		throw error(500, err)
	}
}

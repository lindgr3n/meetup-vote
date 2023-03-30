import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async function (event) {
	const emojis = ['👍', '🙌', '🚀'];
	return { emojis };
};

export const actions: Actions = {
	default: async (event) => {
		return {};
	}
};

import { error, fail, redirect } from '@sveltejs/kit';
import { xata } from '../../../../../../../../../Users/lindgr3n/development/private/svelte/meetup/my-app/src/lib/server/xataClient';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async function (event) {
	const emojis = ['👍', '🙌', '🚀'];
	const votes = await xata.db.votes.summarize({
		columns: ['vote'],
		summaries: {
			total_votes: { count: 'vote' }
		}
	});

	return { emojis, votes: votes.summaries };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const emoji = data.get('emoji')?.toString();
		console.log(emoji);

		await xata.db.votes.create({
			vote: emoji
		});

		return {};
	}
};

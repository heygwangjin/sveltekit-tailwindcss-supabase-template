import { redirect } from '@sveltejs/kit';

export async function load({ url, locals: { getSession } }) {
	const session = await getSession();

	return { url: url.origin };
}

export const actions = {
	logout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		}
	}
};

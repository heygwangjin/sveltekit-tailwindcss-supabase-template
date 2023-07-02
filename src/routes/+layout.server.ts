// to handle the session on the server-side
export async function load({ locals: { getSession } }) {
	return {
		session: await getSession()
	};
}

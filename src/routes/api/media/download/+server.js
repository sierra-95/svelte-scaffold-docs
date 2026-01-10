import {
	BACKEND_URL,
	CLOUDFLARE_R2_BUCKET,
} from '$env/static/private';

export async function POST({ request }) {
	try {
		const incomingForm = await request.formData();

		const id = incomingForm.get('id');
		const userId = incomingForm.get('userid');

		if (!userId || !id) {
			return new Response(
				JSON.stringify('Invalid request: Missing user ID or media ID'),
				{ status: 400 }
			);
		}
		const downloadUrl = `${BACKEND_URL}media/download`;

		const response = await fetch(downloadUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id,
				bucket: CLOUDFLARE_R2_BUCKET,
				user_id: userId
			})
		});

		if (!response.ok) {
			const message = await response.text();
			return new Response(JSON.stringify(message), {
				status: response.status
			});
		} else {
			return new Response(response.body, {
				status: 200,
				headers: response.headers
			});
		}
	} catch (err) {
		return new Response(
			JSON.stringify('Internal server error'),
			{ status: 500 }
		);
	}
}

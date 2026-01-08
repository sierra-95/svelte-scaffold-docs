import {
	BACKEND_URL,
	CLOUDFLARE_R2_BUCKET,
	CLOUDFLARE_R2_PUBLIC_URL
} from '$env/static/private';

export async function POST({ request }) {
	try {
		const incomingForm = await request.formData();

		const r2_key = incomingForm.get('r2_key');
		const userId = incomingForm.get('userid');
		const files = incomingForm.getAll('files');

		if (!r2_key) {
			return new Response(
				JSON.stringify('r2_key is required'),
				{ status: 400 }
			);
		}

		if (!userId) {
			return new Response(
				JSON.stringify('userid is required'),
				{ status: 400 }
			);
		}

		if (!files || files.length === 0) {
			return new Response(
				JSON.stringify('No files provided'),
				{ status: 400 }
			);
		}

		const backendForm = new FormData();

		backendForm.append('bucket', CLOUDFLARE_R2_BUCKET);
		backendForm.append('bucket_url', CLOUDFLARE_R2_PUBLIC_URL);
		backendForm.append('r2_key', r2_key);
		backendForm.append('user_id', userId);

		for (const file of files) {
			backendForm.append('files', file);
		}

		const uploadUrl = `${BACKEND_URL}media/upload`;

		const response = await fetch(uploadUrl, {
			method: 'POST',
			body: backendForm
		});

		if (!response.ok) {
			const message = await response.text();
			return new Response(JSON.stringify(message), {
				status: response.status
			});
		} else {
			const data = await response.json();
			return new Response(JSON.stringify(data), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	} catch (err) {
		return new Response(
			JSON.stringify('Internal server error'),
			{ status: 500 }
		);
	}
}

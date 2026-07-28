import {
	BACKEND_URL,
	BUCKET,
	WORKER_URL
} from '$env/static/private';

export async function POST({ request }) {
	try {
		const { ids, user_id } = await request.json();

		if (!ids || !Array.isArray(ids) || ids.length === 0) {
			return new Response(
				JSON.stringify('ids array is required'),
				{ status: 400 }
			);
		}
		if (!user_id) {
			return new Response(JSON.stringify('Missing user_id'), { status: 400 });
		}

		const response = await fetch(`${BACKEND_URL}media/download`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				ids,
				user_id
			})
		});

		if (!response.ok) {
			const message = await response.text();
			return new Response(JSON.stringify(message), {
				status: response.status
			});
		}
		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});

	} catch (err) {
		console.error('Download proxy error:', err);

		return new Response(
			JSON.stringify('Internal server error'),
			{ status: 500 }
		);
	}
}

export async function GET({ url }) {
	try {

		const r2_key = url.searchParams.get('r2_key');

		if (!r2_key) {
			return new Response(
				JSON.stringify('r2_key is required'),
				{ status: 400 }
			);
		}

		const response = await fetch(`${WORKER_URL}media/download`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ r2_key, bucket: BUCKET })
		});

		if (!response.ok) {
			const message = await response.text();
			return new Response(message, {
				status: response.status
			});
		}
		return new Response(response.body, {
			status: 200,
			headers: {
				'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
				'Content-Disposition': response.headers.get('Content-Disposition') || ''
			}
		});

	} catch (err) {
		console.error('Download proxy error:', err);

		return new Response('Internal server error', {
			status: 500
		});
	}
}
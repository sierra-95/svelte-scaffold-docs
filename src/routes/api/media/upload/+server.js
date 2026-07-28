import { BACKEND_URL, BUCKET, WORKER_URL } from '$env/static/private';

export async function POST({ request }) {
	try {
		const incomingForm = await request.formData();
		const files = incomingForm.getAll('files');
		const user_id = incomingForm.get('user_id');

		if (!files || files.length === 0) {
			return new Response(JSON.stringify('No files provided'), { status: 400 });
		}

		if (!user_id) {
			return new Response(JSON.stringify('Missing user_id'), { status: 400 });
		}

		// ------------------------------------
		// 1. WORKER UPLOAD TO R2
		// ------------------------------------
		const workerForm = new FormData();

		for (const file of files) {
			workerForm.append('files', file);
		}

		workerForm.append('bucket', BUCKET);
		workerForm.append('user_id', user_id.toString());

		const workerRes = await fetch(`${WORKER_URL}media/upload`, {
			method: 'POST',
			body: workerForm
		});

		const uploadResults = await workerRes.json();

		if (!workerRes.ok) {
			console.error('Worker upload failed:', workerRes);
			return new Response(JSON.stringify(uploadResults), {
				status: workerRes.status
			});
		}
		// ------------------------------------
		// 2. FASTAPI BACKEND - SAVE METADATA
		// ------------------------------------
		const dbRes = await fetch(`${BACKEND_URL}media/upload`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id,
				uploadResults
			})
		});

		const dbData = await dbRes.text();

		if (!dbRes.ok) {
			console.error('Backend metadata save failed:', dbRes);
			return new Response(JSON.stringify(dbData), {
				status: dbRes.status
			});
		}

		// ------------------------------------
		// SUCCESS
		// ------------------------------------
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});

	} catch (err) {
		return new Response(
			JSON.stringify(`Internal server error ${err}`),
			{ status: 500 }
		);
	}
}
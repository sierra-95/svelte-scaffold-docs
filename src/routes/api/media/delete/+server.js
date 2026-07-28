import { BACKEND_URL, BUCKET, WORKER_URL } from '$env/static/private';

export async function DELETE({ request }) {
	try {
		const { itemsToDelete, user_id } = await request.json();

		if (!itemsToDelete || !Array.isArray(itemsToDelete) || itemsToDelete.length === 0) {
			return new Response(
				JSON.stringify({ message: 'itemsToDelete array is required' }),
				{ status: 400 }
			);
		}
        if(!user_id){
            return new Response(
                JSON.stringify({ message: 'user_id is required' }),
                { status: 400 }
            );
        };

		// ------------------------------------
		// 1. WORKER DELETE FROM R2
		// ------------------------------------
		const r2Keys = itemsToDelete.map((i) => i.r2_key);

		const workerRes = await fetch(`${WORKER_URL}media/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				r2_key: r2Keys,
				bucket: BUCKET
			})
		});

		const workerData = await workerRes.json();

		if (!workerRes.ok) {
			return new Response(JSON.stringify(workerData), {
				status: workerRes.status
			});
		}

		// ------------------------------------
		// 2. FASTAPI BACKEND - DELETE METADATA
		// ------------------------------------
		const ids = itemsToDelete.map((i) => i.id);

		const dbRes = await fetch(`${BACKEND_URL}media/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                user_id,
                ids
            })
		});

		if (!dbRes.ok) {
            const message = await dbRes.text();
			return new Response(JSON.stringify({ message }), {
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

	} catch (error) {
		console.error('Error deleting media:', error);

		return new Response(
			JSON.stringify({
				message: 'Internal server error',
				error: String(error)
			}),
			{ status: 500 }
		);
	}
}
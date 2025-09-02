import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const ONS_BASE_URL = 'https://www.ons.gov.uk/visualisations/censusmapsmasterconfig';

export const GET: RequestHandler = async ({ url }) => {
	const path = url.searchParams.get('path');
	
	if (!path) {
		throw error(400, 'Path parameter is required');
	}

	// Validate path to prevent abuse
	if (!path.endsWith('.json') && !path.endsWith('.csv')) {
		throw error(400, 'Only JSON and CSV files are allowed');
	}

	try {
		const response = await fetch(`${ONS_BASE_URL}/${path}`);
		
		if (!response.ok) {
			throw error(response.status, `Failed to fetch from ONS: ${response.statusText}`);
		}

		const data = await response.text();
		
		return new Response(data, {
			headers: {
				'Content-Type': response.headers.get('Content-Type') || 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
			}
		});
	} catch (err) {
		console.error('ONS proxy error:', err);
		throw error(500, 'Failed to fetch data from ONS');
	}
};
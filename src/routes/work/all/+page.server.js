import { scanWorks } from '$lib/server/works.js';

export const prerender = true;

export const load = () => scanWorks();

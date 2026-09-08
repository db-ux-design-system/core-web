import { defineConfig } from 'vite';

export default defineConfig({
	publicDir: '.',
	server: {
		headers: {
			'Cache-Control': 'no-store'
		}
	}
});

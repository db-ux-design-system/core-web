import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
	base: `/react-showcase/`,
	plugins: [react()],
	build: {
		outDir: '../../build-showcases/react-showcase',
		emptyOutDir: true
	},
	define: {
		process
	}
});

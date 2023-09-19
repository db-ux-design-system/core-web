import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
	base: `/react-showcase`,
	plugins: [react()],
	build: {
		outDir: '../../build-showcases/react-showcase',
		emptyOutDir: true
	}
});

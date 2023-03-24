import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
	base: `${process.env.BASE_URL ?? ''}/${process.env.VITE_NAME}-showcase`,
	plugins: [react()],
	build: {
		outDir: `./dist-${process.env.VITE_NAME}`
	}
});

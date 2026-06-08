import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
			formats: ['es']
		},
		outDir: 'dist',
		emptyOutDir: false,
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				/^@db-ux\/core-components/,
				/^@db-ux\/core-foundations/
			],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js'
			}
		}
	}
});

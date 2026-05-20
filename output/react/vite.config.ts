import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es']
		},
		outDir: 'dist',
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


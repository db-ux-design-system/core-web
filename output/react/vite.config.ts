import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	build: {
		emptyOutDir: false,
		outDir: 'dist',
		lib: {
			entry: 'src/index.ts',
			formats: ['es']
		},
		rollupOptions: {
			// External packages that consumers must provide themselves
			external: [
				'react',
				'react/jsx-runtime',
				'react-dom',
				/@db-ux\/core-components/,
				/@db-ux\/core-foundations/
			],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js'
			}
		}
	}
});

import react from '@vitejs/plugin-react';
import { globSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Collect all source entry points to preserve the module structure 1:1
const IGNORE_PATTERN =
	/\.(spec|example|showcase(?:-only)?|arg\.types)\.(ts|tsx)$/;
const entries = Object.fromEntries(
	(globSync('src/**/*.{ts,tsx}') as string[])
		.filter((file) => !IGNORE_PATTERN.test(file))
		.map((file) => [
			// Strip "src/" prefix and file extension → becomes the output path
			file.replace(/^src\//, '').replace(/\.[^/.]+$/, ''),
			resolve(__dirname, file)
		])
);

export default defineConfig({
	plugins: [react()],
	build: {
		// Do not emit a separate CSS file – styles are owned by @db-ux/core-components
		cssCodeSplit: false,
		// Keep declaration files produced by tsc intact; Vite only emits JS here
		emptyOutDir: false,
		lib: {
			entry: entries,
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
				// Preserve the original directory structure instead of bundling
				// everything into a single file.  This reproduces the layout that
				// tsc previously generated (dist/components/button/index.js, …).
				preserveModules: true,
				preserveModulesRoot: 'src',
				// Always use the .js extension so Node ESM resolution is happy
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				// Keep import paths as relative "./" references
				generatedCode: {
					constBindings: true
				}
			}
		}
	}
});

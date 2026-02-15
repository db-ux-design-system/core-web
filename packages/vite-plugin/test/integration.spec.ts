import { execSync } from 'child_process';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Integration Tests', () => {
	describe('React App', () => {
		beforeAll(() => {
			const reactAppPath = resolve(__dirname, 'fixtures/react-app');
			execSync('npm run build', { cwd: reactAppPath, stdio: 'inherit' });
		});

		it('should generate CSS snapshot', () => {
			const distPath = resolve(
				__dirname,
				'fixtures/react-app/dist/assets'
			);
			const files = readdirSync(distPath);
			const cssFile = files.find((f) => f.endsWith('.css'));

			expect(cssFile).toBeDefined();

			const css = readFileSync(resolve(distPath, cssFile!), 'utf-8');

			// Verify essential imports are present
			expect(css).toContain('db-button');
			expect(css).toContain('db-input');
			expect(css).toContain('--db-neutral');
			expect(css).toContain('regular');

			// Snapshot the CSS
			expect(css).toMatchSnapshot();
		});
	});

	describe('Vue App', () => {
		beforeAll(() => {
			const vueAppPath = resolve(__dirname, 'fixtures/vue-app');
			execSync('npm run build', { cwd: vueAppPath, stdio: 'inherit' });
		});

		it('should generate CSS snapshot', () => {
			const distPath = resolve(__dirname, 'fixtures/vue-app/dist/assets');
			const files = readdirSync(distPath);
			const cssFile = files.find((f) => f.endsWith('.css'));

			expect(cssFile).toBeDefined();

			const css = readFileSync(resolve(distPath, cssFile!), 'utf-8');

			// Verify essential imports are present
			expect(css).toContain('db-button');
			expect(css).toContain('db-input');
			expect(css).toContain('--db-neutral');
			expect(css).toContain('regular');

			// Snapshot the CSS
			expect(css).toMatchSnapshot();
		});
	});
});

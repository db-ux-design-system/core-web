import { execSync } from 'child_process';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { beforeAll, describe, expect, it } from 'vitest';

/**
 * Normalize CSS for consistent snapshots across environments
 */
function normalizeCSS(css: string): string {
	// Remove source map comments that may vary
	css = css.replace(/\/\*# sourceMappingURL=.*?\*\//g, '');
	// Normalize line endings (Windows CRLF to Unix LF)
	css = css.replace(/\r\n/g, '\n');
	// Normalize path separators in URLs (Windows backslash to forward slash)
	css = css.replace(/url\(['"]?([^'"\)]+)['"]?\)/g, (match, path) => {
		const normalizedPath = path.replace(/\\\\/g, '/');
		return `url(${normalizedPath})`;
	});
	// Trim whitespace
	css = css.trim();
	return css;
}

describe('Integration Tests', () => {
	describe('React App', () => {
		beforeAll(() => {
			const reactAppPath = resolve(__dirname, 'fixtures/react-app');
			execSync('npm install', {
				cwd: reactAppPath,
				stdio: 'inherit'
			});
			execSync('npm run build', { cwd: reactAppPath, stdio: 'inherit' });
		}, 60000);

		it('should generate CSS snapshot', () => {
			const distPath = resolve(
				__dirname,
				'fixtures/react-app/dist/assets'
			);
			const files = readdirSync(distPath);
			const cssFile = files.find((f) => f.endsWith('.css'));

			expect(cssFile).toBeDefined();

			const css = normalizeCSS(
				readFileSync(resolve(distPath, cssFile!), 'utf-8')
			);

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
			execSync('npm install', {
				cwd: vueAppPath,
				stdio: 'inherit'
			});
			execSync('npm run build', {
				cwd: vueAppPath,
				stdio: 'inherit'
			});
		}, 60000);

		it('should generate CSS snapshot', () => {
			const distPath = resolve(__dirname, 'fixtures/vue-app/dist/assets');
			const files = readdirSync(distPath);
			const cssFile = files.find((f) => f.endsWith('.css'));

			expect(cssFile).toBeDefined();

			const css = normalizeCSS(
				readFileSync(resolve(distPath, cssFile!), 'utf-8')
			);

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

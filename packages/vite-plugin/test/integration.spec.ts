import { execSync } from 'child_process';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Integration Tests', () => {
	const apps = ['react', 'vue'];

	for (const app of apps) {
		describe(app, () => {
			const appPath = resolve(__dirname, `fixtures/${app}-app`);

			beforeAll(() => {
				execSync('npm install', {
					cwd: appPath,
					stdio: 'inherit'
				});
				execSync('npm run build', {
					cwd: appPath,
					stdio: 'inherit'
				});
			}, 60000);

			it('should generate CSS snapshot', () => {
				const distPath = resolve(appPath, 'dist/assets');
				const files = readdirSync(distPath);
				const cssFile = files.find((f) => f.endsWith('.css'));

				expect(cssFile).toBeDefined();

				const css = readFileSync(resolve(distPath, cssFile!), 'utf-8');

				// Verify essential imports are present
				expect(css).toContain('db-button');
				expect(css).toContain('db-input');
				expect(css).toContain('--db-neutral');
				expect(css).toContain('regular');
				expect(css).toContain('cyan');
				expect(css).not.toContain('db-card');
				expect(css).not.toContain('db-notification');
				expect(css).not.toContain('burgundy');

				if (app === 'react') {
					expect(css).toContain('p-fix-md');
				}
			});
		});
	}
});

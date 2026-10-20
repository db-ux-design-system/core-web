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
				// npm ci, not npm install: install re-resolves the tree against the
				// registry as soon as the committed lockfile no longer matches the
				// file: dependencies, which happens with every release that bumps the
				// workspace version. That resolution and the audit are registry round
				// trips with no upper bound - measured between 7 seconds and 5 minutes
				// for the same fixture, which turned the hook budget into a coin flip.
				// ci installs exactly what the lockfile records, --no-audit drops the
				// remaining round trip.
				execSync('npm ci --prefer-offline --no-audit --no-fund', {
					cwd: appPath,
					stdio: 'inherit'
				});
				execSync('npm run build', {
					cwd: appPath,
					stdio: 'inherit'
				});
				// Generous, because a cold npm cache still has to download every
				// tarball. The point is not to be fast, it is to fail on a broken
				// fixture instead of on registry latency.
			}, 300_000);

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

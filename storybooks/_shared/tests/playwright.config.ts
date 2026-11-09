/**
 * Tests of the generated Storybook docs pages (overview pages, Getting Started,
 * Foundations) and of the "Show code" snippets, against the built Storybooks.
 *
 * Build the Storybooks first (`pnpm run build-storybooks`). Then:
 *
 *   pnpm run test:storybooks
 *
 * The Storybooks are built with `BASE_URL` as path prefix. Locally that is
 * empty and `build-storybooks/` is served as is. In CI the builds are copied
 * to `build-storybooks-serve${BASE_URL}` first (see 02-e2e-storybooks.yml).
 */
import { defineConfig, devices } from '@playwright/test';

const port = 6110;
const base = process.env['BASE_URL'] ?? '';
const directory = base ? 'build-storybooks-serve' : 'build-storybooks';

export default defineConfig({
	testDir: '.',
	testMatch: '*.spec.ts',
	outputDir: '../../../test-results/storybooks',
	timeout: 120_000,
	fullyParallel: true,
	forbidOnly: Boolean(process.env['CI']),
	retries: process.env['CI'] ? 1 : 0,
	reporter: process.env['CI'] ? [['github'], ['list']] : 'list',
	use: {
		baseURL: `http://localhost:${port}`,
		trace: 'retain-on-failure'
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
	webServer: {
		// Like the showcases (`http-server`), without caching.
		command: `pnpm exec http-server ${directory} -p ${port} -s -c-1`,
		cwd: '../../..',
		url: `http://localhost:${port}${base}/composition-storybook/index.html`,
		reuseExistingServer: !process.env['CI']
	}
});

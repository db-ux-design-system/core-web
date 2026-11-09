/**
 * The "Show code" snippets of the overview pages must be code a consumer can
 * copy. The test opens every overview, expands every snippet and checks it:
 *
 * - React, Angular, Vue: written to files and compiled against the framework
 *   packages (tsc, ngc with strictTemplates, vue-tsc)
 * - Web Components, HTML: they load what they need (registration, stylesheet)
 *
 * The files are written to `storybooks/<name>/.snippet-check/` (git-ignored),
 * because the framework packages resolve from the Storybook's node_modules.
 * React and Vue resolve to the built `output/<framework>/dist/`
 * (`pnpm run build-outputs`).
 */
import { expect, test, type Page } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import {
	existsSync,
	mkdirSync,
	readFileSync,
	rmSync,
	writeFileSync
} from 'node:fs';
import { join } from 'node:path';
import { BUILD_DIR, openDocs, ROOT, type StorybookName } from './storybooks.ts';

const STORYBOOKS = join(ROOT, 'storybooks');

type Check = {
	storybook: StorybookName;
	extension?: 'tsx' | 'ts' | 'vue';
	/** Compiles the snippet files in `dir`; throws with the compiler output. */
	compile?: (dir: string) => void;
	/** Checks for snippets that cannot be compiled. */
	expectations?: (snippet: string) => void;
};

const run = (command: string, args: string[], cwd: string) => {
	try {
		// `node_modules/.bin/<tool>` is a shell script; on Windows only its
		// `.cmd` shim can be started, and only through the shell.
		const isWindows = process.platform === 'win32';
		execFileSync(isWindows ? `${command}.cmd` : command, args, {
			cwd,
			encoding: 'utf8',
			stdio: 'pipe',
			shell: isWindows
		});
	} catch (error) {
		const { stdout = '', stderr = '' } = error as {
			stdout?: string;
			stderr?: string;
		};
		throw new Error(`${command} failed:\n${stdout}${stderr}`, {
			cause: error
		});
	}
};

const writeJson = (file: string, value: unknown) => {
	writeFileSync(file, JSON.stringify(value, null, '\t'));
};

const CHECKS: Check[] = [
	{
		storybook: 'react-storybook',
		extension: 'tsx',
		compile(dir) {
			writeJson(join(dir, 'tsconfig.json'), {
				compilerOptions: {
					strict: true,
					jsx: 'react-jsx',
					module: 'esnext',
					moduleResolution: 'bundler',
					target: 'es2022',
					skipLibCheck: true,
					noEmit: true
				},
				include: ['*.tsx']
			});
			run(
				join(STORYBOOKS, 'react-storybook/node_modules/.bin/tsc'),
				['-p', dir],
				dir
			);
		}
	},
	{
		storybook: 'angular-storybook',
		extension: 'ts',
		compile(dir) {
			writeJson(join(dir, 'tsconfig.json'), {
				extends: '../tsconfig.app.json',
				compilerOptions: {
					strict: true,
					skipLibCheck: true,
					outDir: './out',
					// The Angular package is built to build-outputs/ only, not into
					// output/angular; compile against its source.
					paths: {
						'@db-ux/ngx-core-components': [
							'../../../output/angular/src/index.ts'
						]
					}
				},
				angularCompilerOptions: { strictTemplates: true },
				include: ['*.ts'],
				files: []
			});
			run(
				join(STORYBOOKS, 'angular-storybook/node_modules/.bin/ngc'),
				['-p', join(dir, 'tsconfig.json')],
				dir
			);
		}
	},
	{
		storybook: 'vue-storybook',
		extension: 'vue',
		compile(dir) {
			writeJson(join(dir, 'tsconfig.json'), {
				compilerOptions: {
					strict: true,
					module: 'esnext',
					moduleResolution: 'bundler',
					target: 'es2022',
					jsx: 'preserve',
					skipLibCheck: true,
					noEmit: true
				},
				include: ['*.vue']
			});
			run(
				join(STORYBOOKS, 'vue-storybook/node_modules/.bin/vue-tsc'),
				['-p', join(dir, 'tsconfig.json')],
				dir
			);
		}
	},
	{
		storybook: 'stencil-storybook',
		expectations(snippet) {
			expect(snippet).toContain(
				"import { defineCustomElements } from '@db-ux/wc-core-components'"
			);
			expect(snippet).toMatch(/<db-[a-z-]+/);
		}
	},
	{
		storybook: 'html-storybook',
		expectations(snippet) {
			expect(snippet).toContain(
				'<link rel="stylesheet" href="index.css" />'
			);
			expect(snippet).toMatch(/class="[^"]*\bdb-/);
		}
	}
];

/** Expands every "Show code" of the page and returns the snippets. */
const collectSnippets = async (page: Page): Promise<string[]> => {
	// The toggle is a button below each preview ("Show code" / "Hide code").
	const toggles = page.locator('.docblock-code-toggle');
	// Every preview gets its toggle once it has rendered; on a busy machine
	// the last previews of a long page come later than `networkidle`.
	const previews = await page.locator('.docs-story').count();
	await expect(toggles).toHaveCount(previews, { timeout: 30_000 });
	const count = await toggles.count();
	const code = page.locator('.sbdocs-preview pre');
	const before = await code.count();
	// A click can get lost while a preview re-renders, so click every toggle
	// that still reads "Show code" until none is left.
	const closed = page.locator('.docblock-code-toggle[aria-expanded="false"]');
	for (let clicks = 0; (await closed.count()) > 0; clicks++) {
		expect(clicks, '"Show code" clicks').toBeLessThan(count * 3);
		// Wait for the state of this button before the next click, otherwise a
		// slow update gets the same button clicked closed again.
		const toggle = await closed.first().elementHandle();
		await toggle?.click({ timeout: 5000 }).catch(() => undefined);
		await toggle
			?.waitForElementState('stable')
			.then(async () =>
				page.waitForFunction(
					(element) =>
						!element.isConnected ||
						element.getAttribute('aria-expanded') === 'true',
					toggle,
					{ timeout: 5000 }
				)
			)
			.catch(() => undefined);
	}
	await expect(code).toHaveCount(before + count, { timeout: 30_000 });
	// The HTML Storybook captures the markup after the preview rendered and
	// shows a placeholder until then; wait until every snippet has it.
	await expect
		.poll(
			async () => {
				const all = await code.allInnerTexts();
				return all.filter((text) =>
					text.includes('HTML output not available')
				).length;
			},
			{ timeout: 15_000 }
		)
		.toBe(0);
	const texts = await code.allInnerTexts();
	return texts.slice(before);
};

const overviewIds = (storybook: StorybookName): string[] => {
	const { entries } = JSON.parse(
		readFileSync(join(BUILD_DIR, storybook, 'index.json'), 'utf8')
	) as { entries: Record<string, { id: string; type: string }> };
	return Object.values(entries)
		.filter(
			(entry) =>
				entry.type === 'docs' && entry.id.endsWith('-overview--docs')
		)
		.map((entry) => entry.id);
};

/** Browser tabs that collect the snippets of a Storybook at the same time. */
const PARALLEL = 4;

for (const check of CHECKS) {
	test(`${check.storybook} › "Show code" snippets are valid`, async ({
		context
	}) => {
		// 40 pages one after the other took more than 5 minutes on CI; they
		// are collected in PARALLEL tabs, then compiled in one compiler run.
		test.setTimeout(600_000);
		const ids = overviewIds(check.storybook);
		expect(ids.length, 'overview pages').toBeGreaterThan(0);

		const dir = join(STORYBOOKS, check.storybook, '.snippet-check');
		rmSync(dir, { recursive: true, force: true });
		mkdirSync(dir, { recursive: true });

		let files = 0;
		const queue = [...ids];
		const checkPage = async (page: Page, id: string) => {
			const errors = await openDocs(page, check.storybook, id);
			const snippets = await collectSnippets(page);
			expect(errors, `${id}: uncaught errors`).toEqual([]);
			// Components without a plain HTML version (`html: false`) show a
			// note instead of examples, so their HTML page has no snippets.
			const isNoHtml =
				(await page
					.locator('.sbdocs-content p', {
						hasText:
							'needs JavaScript and is not available as plain HTML'
					})
					.count()) > 0;
			if (isNoHtml) {
				return;
			}

			expect(snippets.length, `${id}: snippets`).toBeGreaterThan(0);
			for (const [index, snippet] of snippets.entries()) {
				expect(
					snippet,
					`${id} #${index}: rendered output`
				).not.toContain('HTML output not available');
				// Storybook's names of the action spies must not leak into the snippet.
				expect(snippet, `${id} #${index}`).not.toMatch(
					/function [A-Za-z]{1,3}\(\)\s*\{\s*\}/
				);
				expect(snippet, `${id} #${index}`).not.toContain(
					'[object Object]'
				);
				check.expectations?.(snippet);
				if (!check.extension) {
					continue;
				}
				const name = `${id.replace(/--docs$/, '').replaceAll(/[^a-z0-9]+/g, '_')}_${index}.${check.extension}`;
				writeFileSync(join(dir, name), snippet);
				files++;
			}
		};

		const worker = async () => {
			const page = await context.newPage();
			for (let id = queue.shift(); id; id = queue.shift()) {
				await checkPage(page, id);
			}

			await page.close();
		};

		await Promise.all(Array.from({ length: PARALLEL }, worker));

		if (check.compile) {
			expect(files).toBeGreaterThan(0);
			check.compile(dir);
		}
		if (!process.env['KEEP_SNIPPETS'] && existsSync(dir)) {
			rmSync(dir, { recursive: true, force: true });
		}
	});
}

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
		execFileSync(command, args, { cwd, encoding: 'utf8', stdio: 'pipe' });
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
	const count = await toggles.count();
	const code = page.locator('.sbdocs-preview pre');
	const before = await code.count();
	for (let i = 0; i < count; i++) {
		await toggles.nth(i).click();
	}
	await expect(code).toHaveCount(before + count);
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

for (const check of CHECKS) {
	test(`${check.storybook} › "Show code" snippets are valid`, async ({
		page
	}) => {
		test.setTimeout(300_000);
		const ids = overviewIds(check.storybook);
		expect(ids.length, 'overview pages').toBeGreaterThan(0);

		const dir = join(STORYBOOKS, check.storybook, '.snippet-check');
		rmSync(dir, { recursive: true, force: true });
		mkdirSync(dir, { recursive: true });

		let files = 0;
		for (const id of ids) {
			await openDocs(page, check.storybook, id);
			const snippets = await collectSnippets(page);
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
		}

		if (check.compile) {
			expect(files).toBeGreaterThan(0);
			check.compile(dir);
		}
		if (!process.env['KEEP_SNIPPETS'] && existsSync(dir)) {
			rmSync(dir, { recursive: true, force: true });
		}
	});
}

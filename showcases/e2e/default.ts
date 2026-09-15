import { AxeBuilder } from '@axe-core/playwright';
import {
	expect,
	type FullProject,
	type Locator,
	type Page,
	test
} from '@playwright/test';
import type { Checker } from 'accessibility-checker-engine';
import { type Issue } from 'accessibility-checker-engine/v4/api/IRule';
import { createRequire } from 'node:module';
import { type PageAssertionsToHaveScreenshotOptions } from 'playwright/types/test';
import { lvl1 } from './fixtures/variants.ts';
import { setScrollViewport } from './fixtures/viewport.ts';

const density = 'regular';

export type SkipType = {
	angular?: boolean;
	stencil?: boolean;
	project?: (project: FullProject) => boolean;
};

export type DefaultTestType = {
	path: string;
	fixedHeight?: number | ((project: FullProject) => number | undefined);
	skip?: SkipType;
};

export type DefaultSnapshotTestType = {
	preScreenShot?: (page: Page, project: FullProject) => Promise<void>;
	ratio?: string;
} & DefaultTestType;

export type AxeCoreTestType = {
	axeDisableRules?: string[];
	skipAxe?: boolean;
	preAxe?: (page: Page) => Promise<void>;
	color?: string;
	density?: 'functional' | 'regular' | 'expressive';
} & DefaultTestType;

export type A11yCheckerTestType = {
	aCheckerDisableRules?: string[];
	skipChecker?: boolean;
	preChecker?: (page: Page) => Promise<void>;
} & DefaultTestType;

export type InteractionTestType = {
	/**
	 Test title shown in the report.
	 */
	title: string;
	/**
	 Optional example name to target a single example on the showcase page
	 (matches the `page=` query the showcase uses to filter examples).
	 The value is lower-cased and spaces are replaced with `+`, mirroring
	 `LinkWrapperShowcase.getPage()`.
	 */
	example?: string;
	/**
	 The interaction to run. `content` is the `#main-content` locator, already
	 scoped to the rendered example, so tests do not have to repeat the scope.
	 */
	run: (args: {
		page: Page;
		content: Locator;
		project: FullProject;
	}) => Promise<void>;
} & DefaultTestType;

export const isStencil = (showcase?: string): boolean =>
	Boolean(showcase?.startsWith('stencil'));
export const isAngular = (showcase?: string): boolean =>
	Boolean(showcase?.startsWith('angular'));
export const isVue = (showcase: string): boolean => showcase.startsWith('vue');

export const hasWebComponentSyntax = (showcase?: string): boolean =>
	isAngular(showcase) || isStencil(showcase);

export const waitForDBShell = async (page: Page) => {
	const dbShell = page.locator('.db-shell:not([data-test-id])');
	// We wait till db-shell fully loaded
	await dbShell.evaluate((element) => {
		element.style.transition = 'none';
	});
	await expect(dbShell).not.toHaveAttribute('data-fonts-loaded', 'false');
	await expect(dbShell).toHaveCSS('opacity', '1');
};

/**
 Normalizes an example name into the `page=` query value the showcase uses to
 filter to a single example. Mirrors `LinkWrapperShowcase.getPage()`:
 lower-cased with spaces replaced by `+`.
 */
export const getExampleParameter = (example: string): string =>
	example.replaceAll(' ', '+').toLowerCase();

const gotoPage = async (
	page: Page,
	path: string,
	color: string,
	fixedHeight?: number,
	otherDensity?: 'functional' | 'regular' | 'expressive',
	example?: string
) => {
	const pageParameter = example
		? `&page=${getExampleParameter(example)}`
		: '';
	await page.goto(
		`./#/${path}?density=${otherDensity ?? density}&color=${color}${pageParameter}`,
		{
			waitUntil: 'domcontentloaded'
		}
	);
	// eslint-disable-next-line unicorn/isolated-functions -- document is available in browser context
	await page.evaluate(async () => document.fonts.ready);

	if (!example) {
		await waitForDBShell(page);
		await setScrollViewport(page, fixedHeight)();
	}
};

const shouldSkip = (project: FullProject, skip?: SkipType): boolean => {
	if (skip) {
		if (skip.project?.(project)) {
			return true;
		}

		const { showcase } = process.env;
		if (skip.angular && isAngular('angular')) {
			return true;
		}

		if (skip.stencil && isStencil(showcase)) {
			return true;
		}
	}

	return false;
};

export const getDefaultScreenshotTest = ({
	path,
	fixedHeight,
	preScreenShot,
	skip,
	ratio
}: DefaultSnapshotTestType) => {
	test('should match screenshot', async ({ page }, { project }) => {
		const diffPixel = process.env.diff;
		const maxDiffPixelRatio = process.env.ratio ?? ratio;
		const isWebkit =
			project.name === 'webkit' || project.name === 'mobile_safari';

		if (shouldSkip(project, skip)) {
			test.skip();
		}

		const config: PageAssertionsToHaveScreenshotOptions = {};

		if (maxDiffPixelRatio ?? diffPixel) {
			if (maxDiffPixelRatio) {
				config.maxDiffPixelRatio = Number(maxDiffPixelRatio);
			}

			if (diffPixel) {
				config.maxDiffPixels = Number(diffPixel);
			}
		} else if (isWebkit) {
			config.maxDiffPixelRatio = 0.0123;
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight);

		const headerDesktop = page.locator('.db-control-panel-desktop').first();
		const headerMobile = page.locator('.db-control-panel-mobile').first();

		config.mask = [headerDesktop, headerMobile];

		if (preScreenShot) {
			await preScreenShot(page, project);
		}

		await expect(page).toHaveScreenshot(config);
	});
};

const shouldSkipA11yTest = (project: FullProject): boolean =>
	project.name === 'firefox' ||
	project.name === 'webkit' ||
	project.name.startsWith('mobile');

export const runAxeCoreTest = ({
	path,
	fixedHeight,
	axeDisableRules,
	skipAxe,
	preAxe,
	color = lvl1,
	density = 'regular',
	skip
}: AxeCoreTestType) => {
	test(`should not have any A11y issues for density ${density} and color ${color}`, async ({
		page
	}, { project }) => {
		const isLevelOne = color.endsWith('-1');
		// We don't need to check color contrast for every project (just for chrome)
		if (
			skipAxe ||
			shouldSkip(skip) ||
			(!isLevelOne && shouldSkipA11yTest(project))
		) {
			test.skip();
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, color, fixedHeight, density);

		// This is a workaround for axe for browsers using forcedColors
		// see https://github.com/dequelabs/axe-core-npm/issues/1067
		/* eslint-disable unicorn/isolated-functions -- document is available in browser context */
		await page.evaluate(($project) => {
			if ($project.use.contextOptions?.forcedColors !== 'active') {
				return;
			}

			const style = document.createElement('style');
			document.head.append(style);
			const textColor =
				$project.use.colorScheme === 'dark' ? '#fff' : '#000';
			style.textContent = `* {-webkit-text-stroke-color:${textColor}!important;-webkit-text-fill-color:${textColor}!important;}`;
		}, project);
		/* eslint-enable unicorn/isolated-functions */

		if (preAxe) {
			await preAxe(page);
		}

		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('#main-content')
			.disableRules(axeDisableRules ?? [])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

export const runA11yCheckerTest = ({
	path,
	fixedHeight,
	aCheckerDisableRules,
	preChecker,
	skipChecker,
	skip
}: A11yCheckerTestType) => {
	test('test with accessibility checker', async ({ page }, { project }) => {
		if (skipChecker || shouldSkip(skip) || shouldSkipA11yTest(project)) {
			// Checking complete DOM in Firefox and Webkit takes very long, we skip this test
			// we don't need to check for mobile device - it just changes the viewport
			test.skip();
		}

		test.slow(); // Easy way to triple the default timeout

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight);

		if (preChecker) {
			await preChecker(page);
		}

		let failures: any[] = [];
		try {
			// Inject the accessibility-checker engine from local node_modules
			const require = createRequire(import.meta.url);
			const enginePath = require.resolve('accessibility-checker-engine');
			await page.addScriptTag({ path: enginePath });

			/* eslint-disable unicorn/isolated-functions -- document is available in browser context */
			const results: Issue[] = await page.evaluate(async () => {
				const { ace } = globalThis as any;
				if (!ace?.Checker) {
					return [];
				}

				const checker: Checker = new ace.Checker();
				const report = await checker.check(document, [
					'IBM_Accessibility'
				]);
				return report.results ?? [];
			});
			/* eslint-enable unicorn/isolated-functions */

			failures = results.filter(
				(result: Issue) =>
					result.value.includes('VIOLATION') &&
					result.value.includes('FAIL') &&
					!aCheckerDisableRules?.includes(result.ruleId)
			);
		} catch (error) {
			console.error(error);
			failures.push(error);
		}

		expect(failures).toEqual([]);
	});
};

export const runAriaSnapshotTest = ({
	path,
	fixedHeight,
	preScreenShot,
	skip
}: DefaultSnapshotTestType) => {
	test('should have same aria-snapshot', async ({ page }, {
		project,
		title
	}) => {
		if (shouldSkip(skip)) {
			// There is an issue with Webkit and Stencil for new playwright version
			test.skip();
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight, density);

		if (preScreenShot) {
			await preScreenShot(page, project);
		}

		await page.waitForTimeout(1000); // We wait a little bit until everything loaded

		let snapshot = await page
			.locator('#main-content')
			.first()
			.ariaSnapshot();

		// Remove `/url` in snapshot because they differ in every showcase
		const lines = snapshot.split('\n');
		const includesUrl = '/url:';
		snapshot = lines
			.map((line) => {
				if (line.includes(includesUrl)) {
					return undefined;
				}

				if (line.includes('- link')) {
					line = line.replace(':', '');
				}

				if (line.includes(' [invalid]')) {
					// Some frameworks add additional [invalid]
					line = line.replace(' [invalid]', '');
				}

				return line;
			})
			.filter(Boolean)
			.join('\n');

		expect(snapshot).toMatchSnapshot(`${title}.yaml`);
	});
};

/**
 Runs a cross-framework interaction test against a showcase example.

 Replaces the component-mount interaction tests that previously lived in
 `packages/components/src/components/**\/*.spec.tsx` and only ran against the
 React and Vue outputs. By driving the running showcase app instead of a
 mounted component, the same assertions run against every framework showcase
 (react, vue, angular, stencil, next, nuxt).

 The `run` callback receives the `page` plus a `content` locator already
 scoped to `#main-content`, so tests interact with the rendered example the
 * same way a user would and assert on observable DOM instead of JS callbacks.
 */
export const runInteractionTest = ({
	title,
	path,
	example,
	fixedHeight,
	skip,
	run
}: InteractionTestType) => {
	test(title, async ({ page }, { project }) => {
		if (shouldSkip(project, skip)) {
			test.skip();
		}

		if (typeof fixedHeight === 'function') {
			fixedHeight = fixedHeight(project);
		}

		await gotoPage(page, path, lvl1, fixedHeight, density, example);

		// Scope to the requested example's container. Each LinkWrapperShowcase
		// tags its content with `data-example="<normalized name>"`, so the
		// locator stays unambiguous even on Stencil, which keeps non-matching
		// examples in the DOM (hidden) instead of removing them like React/Vue.
		const root = page.locator('.fullscreen-container').first();
		const content = example
			? root
					.locator(`[data-example="${getExampleParameter(example)}"]`)
					.first()
			: root;

		await run({ page, content, project });
	});
};

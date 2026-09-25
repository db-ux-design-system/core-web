import { AxeBuilder } from '@axe-core/playwright';
import { expect, type FullProject, type Page, test } from '@playwright/test';
import { createRequire } from 'node:module';

import { lvl1 } from './fixtures/variants';
import { setScrollViewport } from './fixtures/viewport';

import type { Checker } from 'accessibility-checker-engine';
import { type Issue } from 'accessibility-checker-engine/v4/api/IRule';
import { type PageAssertionsToHaveScreenshotOptions } from 'playwright/types/test';

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
	/**
	 * CSS selector(s) excluded from the scan (axe `.exclude()`). Use to skip a
	 * node whose finding is a tooling false positive, while keeping the rule
	 * active for the rest of the page.
	 */
	axeExclude?: string;
	/**
	 * Drops a single known false-positive finding while keeping the element in
	 * the scan for every other rule. Unlike `axeExclude` (which removes the node
	 * and its descendants from ALL rules), this only filters out the given
	 * `ruleId` violation on nodes matching `selector` - so a genuine, unrelated
	 * defect on the same element (missing accessible name, invalid ARIA, ...) is
	 * still reported.
	 */
	axeIgnoreFinding?: { ruleId: string; selector: string };
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

const gotoPage = async (
	page: Page,
	path: string,
	color: string,
	fixedHeight?: number,
	otherDensity?: 'functional' | 'regular' | 'expressive'
) => {
	await page.goto(
		`./#/${path}?density=${otherDensity ?? density}&color=${color}`,
		{
			waitUntil: 'domcontentloaded'
		}
	);
	// eslint-disable-next-line unicorn/isolated-functions -- document is available in browser context
	await page.evaluate(async () => document.fonts.ready);

	await waitForDBShell(page);
	await setScrollViewport(page, fixedHeight)();
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
	axeExclude,
	axeIgnoreFinding,
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
			if ($project.use.contextOptions?.forcedColors === 'active') {
				const style = document.createElement('style');
				document.head.append(style);
				const textColor =
					$project.use.colorScheme === 'dark' ? '#fff' : '#000';
				style.textContent = `* {-webkit-text-stroke-color:${textColor}!important;-webkit-text-fill-color:${textColor}!important;}`;
			}
		}, project);
		/* eslint-enable unicorn/isolated-functions */

		if (preAxe) {
			await preAxe(page);
		}

		let axeBuilder = new AxeBuilder({ page })
			.include('#main-content')
			.disableRules(axeDisableRules ?? []);
		if (axeExclude) {
			axeBuilder = axeBuilder.exclude(axeExclude);
		}
		const accessibilityScanResults = await axeBuilder.analyze();

		let { violations } = accessibilityScanResults;

		if (axeIgnoreFinding) {
			// Drop only the known false-positive finding: for the given rule,
			// remove nodes whose element matches `selector` (resolved against the
			// live DOM via the node's own target path), then drop the violation
			// entirely if no offending node remains. Every other rule - and any
			// other node of the same rule - still fails the assertion, so a real
			// unrelated defect on the same element is not masked.
			violations = await filterIgnoredFinding(
				page,
				violations,
				axeIgnoreFinding
			);
		}

		expect(violations).toEqual([]);
	});
};

// Whether the element identified by an axe node target selector matches
// `selector`. Resolves the node's own CSS path against the live DOM.
const isNodeMatchingSelector = async (
	page: Page,
	node: NodeResult,
	selector: string
): Promise<boolean> => {
	const target = node.target[0];

	if (typeof target !== 'string') {
		return false;
	}

	return page
		.locator(target)
		.first()
		.evaluate((element, sel) => element.matches(sel), selector)
		.catch(() => false);
};

// Drops the known false-positive `ruleId` finding on nodes matching `selector`,
// keeping every other rule and node intact (see AxeCoreTestType.axeIgnoreFinding).
const filterIgnoredFinding = async (
	page: Page,
	violations: Result[],
	{ ruleId, selector }: { ruleId: string; selector: string }
): Promise<Result[]> => {
	const filtered = await Promise.all(
		violations.map(async (violation) => {
			if (violation.id !== ruleId) {
				return violation;
			}

			const keptNodes = await Promise.all(
				violation.nodes.map(async (node) =>
					(await isNodeMatchingSelector(page, node, selector))
						? undefined
						: node
				)
			);

			return {
				...violation,
				nodes: keptNodes.filter(Boolean) as NodeResult[]
			};
		})
	);

	return filtered.filter((violation) => violation.nodes.length > 0);
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

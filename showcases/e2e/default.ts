import { expect, type Page, test } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { close, getCompliance } from 'accessibility-checker';
import { type ICheckerError } from 'accessibility-checker/lib/api/IChecker';
import { type FullProject } from 'playwright/types';
import { type IBaselineResult } from 'accessibility-checker/lib/common/engine/IReport';
import { lvl1 } from './fixtures/variants';
import { setScrollViewport } from './fixtures/viewport';

const density = 'regular';

export type SkipType = {
	angular?: boolean;
};

export type DefaultTestType = {
	path: string;
	fixedHeight?: number;
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

export const isStencil = (showcase?: string): boolean => Boolean(showcase?.startsWith('stencil'));
export const isAngular = (showcase?: string): boolean => Boolean(showcase?.startsWith('angular'));
export const isVue = (showcase: string): boolean => showcase.startsWith('vue');

export const hasWebComponentSyntax = (showcase?: string): boolean => {
	return isAngular(showcase) || isStencil(showcase);
};

export const waitForDBPage = async (page: Page) => {
	const dbPage = page.locator('.db-page');
	// We wait till db-page fully loaded
	await dbPage.evaluate((element) => {
		element.style.transition = 'none';
	});
	await expect(dbPage).not.toHaveAttribute('data-fonts-loaded', 'false');
	await expect(dbPage).toHaveCSS('opacity', '1');
	await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');
};

const gotoPage = async (page: Page, path: string, color: string, fixedHeight?: number, otherDensity?: 'functional' | 'regular' | 'expressive') => {
	await page.goto(`./#/${path}?density=${otherDensity ?? density}&color=${color}`, {
		waitUntil: 'domcontentloaded'
	});

	await waitForDBPage(page);
	await setScrollViewport(page, fixedHeight)();
};

const isCheckerError = (object: any): object is ICheckerError => 'details' in object;

const shouldSkip = (skip?: SkipType): boolean => {
	if (skip) {
		const { showcase } = process.env;
		if (skip.angular && showcase?.startsWith('angular')) {
			return true;
		}
	}

	return false;
};

export const getDefaultScreenshotTest = ({ path, fixedHeight, preScreenShot, skip, ratio }: DefaultSnapshotTestType) => {
	test(`should match screenshot`, async ({ page }, { project }) => {
		const { showcase } = process.env;
		const diffPixel = process.env.diff;
		const maxDiffPixelRatio = process.env.ratio ?? ratio;
		const stencil = isStencil(showcase);
		const isWebkit = project.name === 'webkit' || project.name === 'mobile_safari';

		if ((stencil && isWebkit) || shouldSkip(skip)) {
			// There is an issue with Webkit and Stencil for new playwright version
			test.skip();
		}

		const config: any = {};

		if (maxDiffPixelRatio ?? diffPixel) {
			if (maxDiffPixelRatio) {
				config.maxDiffPixelRatio = Number(maxDiffPixelRatio);
			}

			if (diffPixel) {
				config.maxDiffPixels = Number(diffPixel);
			}
		} else if (isWebkit) {
			config.maxDiffPixelRatio = 0.033;
		} else if (isAngular(showcase)) {
			config.maxDiffPixels = 1000;
		} else {
			config.maxDiffPixels = 120;
		}

		await gotoPage(page, path, lvl1, fixedHeight);

		const header = page.locator('header').first();

		config.mask = [header];

		if (preScreenShot) {
			await preScreenShot(page, project);
		}

		await expect(page).toHaveScreenshot(config);
	});
};

const shouldSkipA11yTest = (project: FullProject): boolean =>
	project.name === 'firefox' || project.name === 'webkit' || project.name.startsWith('mobile');

export const runAxeCoreTest = ({ path, fixedHeight, axeDisableRules, skipAxe, preAxe, color = lvl1, density = 'regular', skip }: AxeCoreTestType) => {
	test(`should not have any A11y issues for density ${density} and color ${color}`, async ({ page }, { project }) => {
		const isLevelOne = color.endsWith('-1');
		// We don't need to check color contrast for every project (just for chrome)
		if (skipAxe || shouldSkip(skip) || (!isLevelOne && shouldSkipA11yTest(project))) {
			test.skip();
		}

		await gotoPage(page, path, color, fixedHeight, density);

		// This is a workaround for axe for browsers using forcedColors
		// see https://github.com/dequelabs/axe-core-npm/issues/1067
		await page.evaluate(($project) => {
			if ($project.use.contextOptions?.forcedColors === 'active') {
				const style = document.createElement('style');
				document.head.append(style);
				const textColor = $project.use.colorScheme === 'dark' ? '#fff' : '#000';
				style.textContent = `* {-webkit-text-stroke-color:${textColor}!important;-webkit-text-fill-color:${textColor}!important;}`;
			}
		}, project);

		if (preAxe) {
			await preAxe(page);
		}

		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			.include('main')
			.disableRules(axeDisableRules ?? [])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

export const runA11yCheckerTest = ({ path, fixedHeight, aCheckerDisableRules, preChecker, skipChecker, skip }: A11yCheckerTestType) => {
	test('test with accessibility checker', async ({ page }, { project }) => {
		if (skipChecker || shouldSkip(skip) || shouldSkipA11yTest(project)) {
			// Checking complete DOM in Firefox and Webkit takes very long, we skip this test
			// we don't need to check for mobile device - it just changes the viewport
			test.skip();
		}

		test.slow(); // Easy way to triple the default timeout

		await gotoPage(page, path, lvl1, fixedHeight);

		if (preChecker) {
			await preChecker(page);
		}

		let failures: any[] = [];
		try {
			// Makes a call against https://cdn.jsdelivr.net/npm/accessibility-checker-engine
			const { report } = await getCompliance(page, path);

			if (isCheckerError(report)) {
				failures = report.details;
			} else {
				failures = report.results.filter(
					({ level, ruleId }: IBaselineResult) => level.toString() === 'violation' && !aCheckerDisableRules?.includes(ruleId)
				);
			}
		} catch (error) {
			console.error(error);
			failures.push(error);
		} finally {
			await close();
		}

		expect(failures).toEqual([]);
	});
};

export const runAriaSnapshotTest = ({ path, fixedHeight, preScreenShot, skip }: DefaultSnapshotTestType) => {
	test(`should have same aria-snapshot`, async ({ page }, { project, title }) => {
		if (shouldSkip(skip)) {
			// There is an issue with Webkit and Stencil for new playwright version
			test.skip();
		}

		await gotoPage(page, path, lvl1, fixedHeight, density);

		if (preScreenShot) {
			await preScreenShot(page, project);
		}

		await page.waitForTimeout(1000); // We wait a little bit until everything loaded

		let snapshot = await page.locator('main').ariaSnapshot();

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

				return line;
			})
			.filter(Boolean)
			.join('\n');

		expect(snapshot).toMatchSnapshot(`${title}.yaml`);
	});
};

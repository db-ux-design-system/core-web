import { expect, type Page, test } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
import { close, getCompliance } from 'accessibility-checker';
import { type ICheckerError } from 'accessibility-checker/lib/api/IChecker';
import { type FullProject } from 'playwright/types/test';
import { COLORS, lvl1 } from './fixtures/variants';
import { setScrollViewport } from './fixtures/viewport';

const density = 'regular';

export type DefaultTestType = {
	path: string;
	fixedHeight?: number;
};

export type DefaultSnapshotTestType = {
	preScreenShot?: (page: Page, project: FullProject) => Promise<void>;
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

export const isStencil = (showcase: string): boolean =>
	showcase.startsWith('stencil');

export const hasWebComponentSyntax = (showcase: string): boolean => {
	const isAngular = showcase.startsWith('angular');
	return isAngular || isStencil(showcase);
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

	await waitForDBPage(page);
	await setScrollViewport(page, fixedHeight)();
};

const isCheckerError = (object: any): object is ICheckerError =>
	'details' in object;

export const getDefaultScreenshotTest = ({
	path,
	fixedHeight,
	preScreenShot
}: DefaultSnapshotTestType) => {
	test(`should match screenshot`, async ({ page }, { project }) => {
		const showcase = process.env.showcase;
		const diffPixel = process.env.diff;
		const maxDiffPixelRatio = process.env.ratio;
		const isAngular = showcase.startsWith('angular');
		const stencil = isStencil(showcase);
		const isWebkit = project.name === 'webkit';

		if (stencil && isWebkit) {
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
		} else if (isAngular) {
			config.maxDiffPixels = 1000;
		} else {
			config.maxDiffPixels = 120;
		}

		await gotoPage(page, path, lvl1, fixedHeight);

		const header = await page.locator('header').first();

		config.mask = [header];

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
	density = 'regular'
}: AxeCoreTestType) => {
	test(`should not have any A11y issues for density ${density} and color ${color}`, async ({
		page
	}, { project }) => {
		const isLevelOne = color.endsWith('-1');
		// We don't need to check color contrast for every project (just for chrome)
		if (skipAxe ?? (!isLevelOne && shouldSkipA11yTest(project))) {
			test.skip();
		}

		await gotoPage(page, path, color, fixedHeight, density);

		// This is a workaround for axe for browsers using forcedColors
		// see https://github.com/dequelabs/axe-core-npm/issues/1067
		await page.evaluate(($project) => {
			if ($project.use.contextOptions?.forcedColors === 'active') {
				const style = document.createElement('style');
				document.head.append(style);
				const textColor =
					$project.use.colorScheme === 'dark' ? '#fff' : '#000';
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

export const runA11yCheckerTest = ({
	path,
	fixedHeight,
	aCheckerDisableRules,
	preChecker,
	skipChecker
}: A11yCheckerTestType) => {
	test('test with accessibility checker', async ({ page }, { project }) => {
		if (skipChecker ?? shouldSkipA11yTest(project)) {
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
				failures = report.results
					.filter((res) => res.level === 'violation')
					.filter(
						(res) => !aCheckerDisableRules?.includes(res.ruleId)
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

export const runAriaSnapshotTest = ({
	path,
	fixedHeight,
	preScreenShot
}: DefaultSnapshotTestType) => {
	test(`should have same aria-snapshot`, async ({ page }, {
		project,
		title
	}) => {
		await gotoPage(page, path, lvl1, fixedHeight, density);

		if (preScreenShot) {
			await preScreenShot(page, project);
		}

		await page.waitForTimeout(1000); // We wait a little bit until everything loaded

		const snapshot = await page.locator('main').ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${title}.yaml`);
	});
};

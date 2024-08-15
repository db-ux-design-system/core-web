import { expect, type Page, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { close, getCompliance } from 'accessibility-checker';
import { type ICheckerError } from 'accessibility-checker/lib/api/IChecker';
import { COLORS } from './fixtures/variants';
import { setScrollViewport } from './fixtures/viewport';

const density = 'regular';

export type DefaultTestType = {
	path: string;
	fixedHeight?: number;
};

export type DefaultSnapshotTestType = {
	preScreenShot?: (page: Page) => Promise<void>;
} & DefaultTestType;

export type DefaultA11yTestType = {
	axeDisableRules?: string[];
	aCheckerDisableRules?: string[];
	skipA11y?: boolean;
	preA11y?: (page: Page) => Promise<void>;
} & DefaultTestType;

export const waitForDBPage = async (page: Page) => {
	const dbPage = page.locator('.db-page');
	// We wait till db-page fully loaded
	await dbPage.evaluate((element) => {
		element.style.transition = 'none';
	});
	await expect(dbPage).toHaveAttribute('data-fonts-loaded', 'true');
	await expect(dbPage).toHaveCSS('opacity', '1');
	await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');
};

const gotoPage = async (
	page: Page,
	path: string,
	color: string,
	fixedHeight?: number
) => {
	await page.goto(`./#/${path}?density=${density}&color=${color}`, {
		waitUntil: 'domcontentloaded'
	});

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
	test(`should match screenshot`, async ({ page }, testInfo) => {
		const isWebkit =
			testInfo.project.name === 'webkit' ||
			testInfo.project.name === 'mobile_safari';
		const showcase = process.env.showcase;
		const diffPixel = process.env.diff;
		const maxDiffPixelRatio = process.env.ratio;
		const isAngular = showcase.startsWith('angular');

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
		} else if (isWebkit) {
			config.maxDiffPixels = 120;
		} else {
			config.maxDiffPixels = 1;
		}

		await gotoPage(page, path, 'neutral-bg-basic-level-1', fixedHeight);

		const header = await page.locator('header').first();

		config.mask = [header];

		if (preScreenShot) {
			await preScreenShot(page);
		}

		await expect(page).toHaveScreenshot(config);
	});
};

export const getA11yTest = ({
	path,
	fixedHeight,
	axeDisableRules,
	skipA11y,
	preA11y,
	aCheckerDisableRules
}: DefaultA11yTestType) => {
	for (const color of COLORS) {
		test(`should not have any A11y issues for color ${color}`, async ({
			page
		}, { project }) => {
			if (skipA11y) {
				test.skip();
			}

			await gotoPage(page, path, color, fixedHeight);

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

			if (preA11y) {
				await preA11y(page);
			}

			const accessibilityScanResults = await new AxeBuilder({
				page
			})
				.include('main')
				.disableRules(axeDisableRules ?? [])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	}

	test('test with accessibility checker', async ({ page }, { project }) => {
		await gotoPage(page, path, 'neutral-bg-basic-level-1', fixedHeight);
		let failures: any[] = [];
		try {
			if (project.name === 'firefox') {
				// Checking complete DOM in Firefox takes very long, we skip this test for Firefox
				test.skip();
			}

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
		} finally {
			await close();
		}

		expect(failures).toEqual([]);
	});
};

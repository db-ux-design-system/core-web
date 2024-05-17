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
	axeDisableRules?: string[];
	aCheckerDisableRules?: string[];
	skipA11y?: boolean;
	preScreenShot?: (page: Page) => Promise<void>;
	preA11y?: (page: Page) => Promise<void>;
};

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
	axeDisableRules,
	skipA11y,
	preScreenShot,
	preA11y,
	aCheckerDisableRules
}: DefaultTestType) => {
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

		await gotoPage(page, path, 'neutral-bg-lvl-1', fixedHeight);

		const header = await page.locator('header').first();

		config.mask = [header];

		if (preScreenShot) {
			await preScreenShot(page);
		}

		await expect(page).toHaveScreenshot(
			[density, `neutral-bg-lvl-1.png`],
			config
		);
	});

	for (const color of COLORS) {
		test(`should not have any A11y issues for color ${color}`, async ({
			page
		}) => {
			if (skipA11y) {
				test.skip();
			}

			await gotoPage(page, path, color, fixedHeight);

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

	test('test with accessibility checker', async ({ page }) => {
		await gotoPage(page, path, 'neutral-bg-lvl-1', fixedHeight);
		const content = await page.content();
		let failures: any[] = [];
		try {
			const { report } = await getCompliance(content, path);

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

import { expect, test } from '@playwright/test';

// The icon box takes its baseline from the font rendering the ligature, so it
// can sit elsewhere while the icon font is still loading. `contain: layout` on
// %icon decouples it; this test fails if that declaration is removed.

const ICON_FONTS = '**/assets/icons/fonts/**';

// `.baseline-marker` is a content-less inline-block, so its bottom edge is the
// text baseline regardless of font metrics - a stable zero point.
const measureRows = () =>
	[...document.querySelectorAll('.row')].map((row) => {
		const marker = row
			.querySelector('.baseline-marker')
			.getBoundingClientRect();
		const icon = row
			.querySelector('[data-icon], [data-icon-trailing]')
			.getBoundingClientRect();

		return {
			id: row.id,
			rowHeight: Number(row.getBoundingClientRect().height.toFixed(2)),
			baselineToIcon: Number((icon.top - marker.bottom).toFixed(2))
		};
	});

test.describe('Icon baseline', () => {
	test('should not move while the icon font is loading', async ({ page }) => {
		let releaseFont;
		const fontGate = new Promise((resolve) => {
			releaseFont = resolve;
		});
		let heldBack = 0;

		// Delay, never abort: an aborted request falls straight through to the
		// metrically identical fallback and hides the problem.
		await page.route(ICON_FONTS, async (route) => {
			heldBack++;
			await fontGate;
			await route.continue();
		});

		await page.goto(`dev/icon-baseline.html`, {
			waitUntil: 'domcontentloaded'
		});
		await page.waitForTimeout(1000);
		const whileLoading = await page.evaluate(measureRows);

		// Guard against a silent pass: without a held-back request the two
		// measurements would be taken in the same state and always match.
		expect(
			heldBack,
			'no icon font request was intercepted, so the test cannot detect a shift'
		).toBeGreaterThan(0);
		expect(whileLoading.length).toBeGreaterThan(0);

		releaseFont();
		await page.evaluate(async () => document.fonts.ready);
		await page.waitForTimeout(500);
		const afterLoading = await page.evaluate(measureRows);

		expect(afterLoading).toEqual(whileLoading);
	});
});

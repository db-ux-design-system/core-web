import { expect, test } from '@playwright/test';

/*
 Regression guard for the icon baseline (issue #5558).

 Icons are rendered as a pseudo-element whose content is a ligature name. The
 baseline of that box follows the metrics of whatever font currently renders
 the ligature, so while the icon font is still loading the box - and every
 inline-level container that inherits its baseline from it - can sit at a
 different position than it will once the font arrives. Webkit is affected
 because it uses a system font during the block period of `font-display:
 block` instead of the declared `icon-font-fallback`, which is metrically
 identical.

 `contain: layout` on the icon placeholder makes the box count as having no
 baseline for `vertical-align`, so it is synthesized from the fixed-size
 border box and stops depending on the font. This test fails if that
 declaration is removed.

 Deliberately a geometry assertion, not a screenshot: no snapshots to
 maintain and no platform-dependent font rendering. Note that aborting the
 request instead of delaying it would NOT reproduce the problem, because a
 failed load falls straight through to the metrically identical fallback.
*/

const ICON_FONTS = '**/assets/icons/fonts/**';

/**
 Distance from the row's text baseline to the top of the icon box, plus the
 row height. `.baseline-marker` is a content-less inline-block, so its bottom
 edge is the text baseline regardless of font metrics.
 */
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

		// Delay, never abort: an aborted request would fall back immediately.
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

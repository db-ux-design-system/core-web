import { expect, test } from '@playwright/test';
import { waitForDBShell } from '../default.ts';

const path = '04/tabs';

test.describe('DBTabs', () => {
	test('should only scroll the tab list on the inline axis', async ({
		page
	}) => {
		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		// The ancestor part of the selector also matches a vertical tabs instance
		// nested inside a horizontal one, so filter by the tab list's own
		// orientation instead of the owning instance's.
		const tabLists = page.locator(
			'.db-tabs:not([data-orientation="vertical"]) [role="tablist"]:not([aria-orientation="vertical"])'
		);
		await expect(tabLists.first()).toBeVisible();

		const count = await tabLists.count();
		expect(count).toBeGreaterThan(0);

		for (let index = 0; index < count; index++) {
			const tabList = tabLists.nth(index);

			// Must stay hidden, otherwise fractional zoom rounds the overflow 1px past the client box and shows a stray vertical scrollbar, see #7760.
			await expect(tabList).toHaveCSS('overflow-y', 'hidden');
			// Overflowing tabs still have to scroll horizontally.
			await expect(tabList).toHaveCSS('overflow-x', 'auto');
		}
	});

	test('should not clamp the overflow of vertical tab lists', async ({
		page
	}) => {
		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		const verticalTabLists = page.locator(
			'.db-tabs[data-orientation="vertical"] [role="tablist"]'
		);
		await expect(verticalTabLists.first()).toBeVisible();

		const count = await verticalTabLists.count();
		expect(count).toBeGreaterThan(0);

		for (let index = 0; index < count; index++) {
			const tabList = verticalTabLists.nth(index);

			// A vertical list must not become a scroll container: its indicator sits
			// outside the padding box and would be clipped. Guards the explicit
			// overflow reset that keeps the horizontal clamp from leaking into a
			// vertical instance nested inside a horizontal one.
			await expect(tabList).toHaveCSS('overflow-y', 'visible');
			await expect(tabList).toHaveCSS('overflow-x', 'visible');
		}
	});
});

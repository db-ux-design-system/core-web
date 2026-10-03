import { expect, test } from '@playwright/test';
import { waitForDBShell } from '../default.ts';

const path = '04/tabs';

test.describe('DBTabs', () => {
	test('should only scroll the tab list on the inline axis', async ({
		page
	}) => {
		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		const tabLists = page.locator(
			'.db-tabs:not([data-orientation="vertical"]) [role="tablist"]'
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
});

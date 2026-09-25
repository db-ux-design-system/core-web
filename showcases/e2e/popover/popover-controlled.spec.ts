import { expect, test } from '@playwright/test';
import { waitForDBShell } from '../default.ts';

const path = '01/popover';

test.describe('DBPopover', () => {
	test('should open and close via the open property', async ({ page }) => {
		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		const trigger = page.getByRole('button', { name: 'Toggle popover' });
		const content = page.locator('#popover-controlled article');

		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
		await expect(content).toBeHidden();

		// Hover must not open a controlled popover, the open property owns the state
		await trigger.hover();
		await expect(content).toBeHidden();

		// A regression of the controlled handler can block the main thread in
		// Angular, so this may time out instead of failing with a diff.
		await trigger.click();
		await expect(content).toBeVisible();
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');

		await trigger.click();
		await expect(content).toBeHidden();
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});
});

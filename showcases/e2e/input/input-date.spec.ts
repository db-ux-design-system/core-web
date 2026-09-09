import { expect, test } from '@playwright/test';
import { waitForDBShell } from '../default';

const path = '03/input';

/**
 * Regression test for https://github.com/db-ux-design-system/core-web/issues/7748
 *
 * `mm/dd/yyyy` is the segment order of the en-US browser locale the showcases run
 * in. Typing `02/29/2028` passes the year through `0020` (a leap year, so the
 * browser reports the complete date `0020-02-29`) and then through `0202` (no
 * such date). That second step is the interesting one: the element reports an
 * empty value while the editor still holds the entry, and any write of that
 * empty value back into the element clears the native editor.
 */
const DATE_TO_TYPE = '02292028';

test.describe('DBInput date', () => {
	test('keeps a partially typed date that the browser cannot parse', async ({
		page
	}, { project }) => {
		// Only Chromium is driven here: keyboard handling of the native date
		// editor differs per engine, while the regression does not.
		if (project.name !== 'chromium') {
			test.skip();
		}

		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		const dateInput = page.locator('input[type="date"]').first();
		await expect(dateInput).toBeVisible();

		await dateInput.pressSequentially(DATE_TO_TYPE);

		await expect(dateInput).toHaveValue('2028-02-29');
	});
});

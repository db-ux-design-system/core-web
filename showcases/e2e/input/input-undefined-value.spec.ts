import { expect, type Locator, type Page, test } from '@playwright/test';
import { isStencil, waitForDBShell } from '../default';

/**
 * Regression test for
 * https://github.com/db-ux-design-system/core-web/issues/6147
 *
 * Consumers clear a controlled field by resetting its bound `value`. That has
 * to reach the element: before the fix, `state._value` was only mirrored from
 * `props.value` when it was not `undefined`, so the element kept the last value
 * it had and the reset silently did nothing.
 *
 * This also guards the narrow gap introduced for
 * https://github.com/db-ux-design-system/core-web/issues/7748, where Angular
 * renders from `state._value` and keeps it while `validity.badInput` is set.
 * That gap has to stay shut for a plain clearing write.
 *
 * All framework showcases carry the fixture (see `input.tsx`, `Inputs.vue`,
 * `inputs.component.*`). Angular and Vue reset by binding `value` to
 * `undefined`; React binds `props.value` alone, so `value={undefined}` would
 * make the element uncontrolled -- the React fixture therefore resets to `''`,
 * which is how a controlled React input is cleared. The stencil showcase has no
 * form page, like the other form tests.
 */
const getInput = (page: Page): Locator =>
	page.getByLabel('Undefined reset', { exact: true });

test.describe('DBInput undefined value', () => {
	test.beforeEach(async ({ page }) => {
		if (isStencil(process.env.showcase)) {
			test.skip();
		}

		await page.goto('./', { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		const tab = page.getByTestId('tab-inputs');
		await expect(tab).toBeVisible();
		await tab.click({ force: true });
	});

	test('clears the element when the bound value is reset', async ({
		page
	}) => {
		const input = getInput(page);
		await expect(input).toHaveValue('reset-me');

		await page.getByTestId('unset-value-button').click({ force: true });

		await expect(input).toHaveValue('');
	});

	test('clears a value the user typed when the bound value is reset', async ({
		page
	}) => {
		const input = getInput(page);
		await expect(input).toHaveValue('reset-me');

		await input.fill('typed by the user');
		await expect(input).toHaveValue('typed by the user');

		await page.getByTestId('unset-value-button').click({ force: true });

		await expect(input).toHaveValue('');
	});
});

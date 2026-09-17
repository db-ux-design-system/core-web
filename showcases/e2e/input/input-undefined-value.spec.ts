import { expect, type Locator, type Page, test } from '@playwright/test';
import { isAngular, isVue, waitForDBShell } from '../default';

/**
 * Regression test for
 * https://github.com/db-ux-design-system/core-web/issues/6147
 *
 * Consumers reset a field by binding `value` to `undefined`. That has to reach
 * the element: before the fix, `state._value` was only mirrored from
 * `props.value` when it was not `undefined`, so the element kept the last value
 * it had and the reset silently did nothing.
 *
 * This also guards the narrow gap introduced for
 * https://github.com/db-ux-design-system/core-web/issues/7748, where Angular
 * renders from `state._value` and keeps it while `validity.badInput` is set.
 * That gap has to stay shut for a plain `undefined` write.
 *
 * Angular and Vue only. React binds `props.value` alone (see
 * `scripts/post-build/react.ts`), so `value={undefined}` renders no `value`
 * prop at all and React deliberately stops controlling the element instead of
 * clearing it -- resetting a React input means passing `''`. The stencil
 * showcase has no form page, like the other form tests.
 */
const getInput = (page: Page): Locator =>
	page.getByLabel('Undefined reset', { exact: true });

test.describe('DBInput undefined value', () => {
	test.beforeEach(async ({ page }) => {
		const { showcase } = process.env;
		if (!isAngular(showcase) && !isVue(showcase ?? '')) {
			test.skip();
		}

		await page.goto('./', { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);

		const tab = page.getByTestId('tab-inputs');
		await expect(tab).toBeVisible();
		await tab.click({ force: true });
	});

	test('clears the element when value becomes undefined', async ({
		page
	}) => {
		const input = getInput(page);
		await expect(input).toHaveValue('reset-me');

		await page.getByTestId('unset-value-button').click({ force: true });

		await expect(input).toHaveValue('');
	});

	test('clears a value the user typed when value becomes undefined', async ({
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

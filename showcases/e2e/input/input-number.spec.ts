import { expect, type Locator, type Page, test } from '@playwright/test';
import { isAngular, waitForDBShell } from '../default';

/**
 * Regression test for
 * https://github.com/db-ux-design-system/core-web/issues/6092
 *
 * A number input reports the *sanitized* value, not the raw text: while the
 * field holds `1.` the browser reports `1`. Writing that report back into the
 * element drops the separator the user just typed -- the reported symptom was
 * the digit disappearing and the caret jumping to the front.
 *
 * `handleFrameworkEventAngular` therefore skips the model update for every
 * intermediate entry. Deleting into a decimal is the load-bearing case: without
 * that guard the separator is restored on every keystroke and the field can no
 * longer be cleared at all.
 *
 * Angular only, because the write-back path (`handleFrameworkEventAngular`) is
 * Angular only. React and Vue bind `props.value` directly and their renderers
 * skip a property write when the element already holds the value.
 */
const getNumberInput = (page: Page): Locator =>
	page.locator('input[type="number"]').first();

const clear = async (page: Page, input: Locator): Promise<void> => {
	await input.click();
	await page.keyboard.press('ControlOrMeta+a');
	await page.keyboard.press('Backspace');
	await expect(input).toHaveValue('');
};

test.describe('DBInput number', () => {
	test.beforeEach(async ({ page }) => {
		const { showcase } = process.env;
		if (!isAngular(showcase)) {
			test.skip();
		}

		await page.goto('./', { waitUntil: 'domcontentloaded' });
		await waitForDBShell(page);
	});

	test('accepts a decimal separator without dropping the digits before it', async ({
		page
	}) => {
		const input = getNumberInput(page);
		await expect(input).toBeVisible();
		await clear(page, input);

		await page.keyboard.press('1');
		await expect(input).toHaveValue('1');

		// The element reports `1` for the raw text `1.`, so the value must not
		// change here -- but it must not lose the `1` either.
		await page.keyboard.press('.');
		await expect(input).toHaveValue('1');

		await page.keyboard.press('5');
		await expect(input).toHaveValue('1.5');
	});

	test('accepts an exponent without clearing the field', async ({ page }) => {
		const input = getNumberInput(page);
		await clear(page, input);

		await page.keyboard.press('1');
		await page.keyboard.press('e');
		// `1e` is unparsable, so the element reports an empty value while the
		// editor keeps the entry. Nothing may write that empty value back.
		await expect(input).toHaveJSProperty('validity.badInput', true);

		await page.keyboard.press('5');
		await expect(input).toHaveValue('1e5');
	});

	test('can be cleared with Backspace across the decimal separator', async ({
		page
	}) => {
		const input = getNumberInput(page);
		await clear(page, input);

		await page.keyboard.press('1');
		await page.keyboard.press('.');
		await page.keyboard.press('5');
		await expect(input).toHaveValue('1.5');

		// `1.5` -> `1.` (reported as `1`) -> `1` (still reported as `1`) -> ``.
		// If the intermediate report were written back, the separator would be
		// restored on every keystroke and the field would never empty out.
		await page.keyboard.press('Backspace');
		await expect(input).toHaveValue('1');

		await page.keyboard.press('Backspace');
		await expect(input).toHaveValue('1');

		await page.keyboard.press('Backspace');
		await expect(input).toHaveValue('');
	});
});

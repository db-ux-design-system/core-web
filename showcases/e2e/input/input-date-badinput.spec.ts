import { expect, test } from '@playwright/test';
import { isAngular, waitForDBPage } from '../default';

const path = '03/input';

/**
 * Regression test for: date input resets on invalid partial entry.
 *
 * When typing a date manually (e.g. 29.02.2028), intermediate states that the
 * browser cannot yet parse (like 29.02.0202) must NOT clear the native date
 * editor. The field should remain badInput until the user completes or abandons
 * the entry.
 *
 * Root cause was `handleFrameworkEventAngular` writing an empty string back to
 * the element's value property during the unparsable phase, which destroys the
 * native date editor segments. Only Angular was affected because React and Vue
 * do not write back to the DOM.
 */
test.describe('DBInput date - badInput preservation', () => {
	test('typing an intermediate invalid date does not reset the field', async ({
		page
	}) => {
		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBPage(page);

		const input = page.locator('.db-input input[type=date]').first();
		await expect(input).toBeVisible();
		await input.focus();

		// Type a date that passes through an unparsable intermediate state.
		// In en-US locale the segment order is mm/dd/yyyy, so we type
		// 02 / 29 / 0202 — Feb 29 of year 202 does not exist.
		const keys = ['0', '2', '2', '9', '0', '2', '0', '2'];
		for (const key of keys) {
			await page.keyboard.type(key);
		}

		// After the final '2' (year = 0202) the field is unparsable.
		// The crucial assertion: badInput must be true (the entry survived).
		// If the bug is present, writeValue cleared the editor and badInput
		// would be false with an empty value.
		const state = await input.evaluate((element: HTMLInputElement) => ({
			value: element.value,
			badInput: element.validity.badInput
		}));

		expect(state.badInput).toBe(true);
		// The DOM value is '' while badInput is true (browser semantics for
		// unparsable date entries), but the native editor still shows the
		// segments. If the bug were present, badInput would be false because
		// writing '' resets the editor to its placeholder state.
	});

	test('completing an intermediate date commits the valid value', async ({
		page
	}) => {
		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBPage(page);

		const input = page.locator('.db-input input[type=date]').first();
		await expect(input).toBeVisible();
		await input.focus();

		// Type 02/29/2028 (a valid leap-year date) in one go
		await page.keyboard.type('02292028');

		const state = await input.evaluate((element: HTMLInputElement) => ({
			value: element.value,
			badInput: element.validity.badInput
		}));

		expect(state.badInput).toBe(false);
		expect(state.value).toBe('2028-02-29');
	});

	// Angular-specific: verify the model signal receives an empty value while
	// the entry is unparsable, preventing stale form submissions.
	// NOTE: requires Angular debug globals (ng.getComponent), only available in
	// dev builds. The test skips gracefully in production builds.
	test('Angular model receives empty value during badInput', async ({
		page
	}) => {
		const showcase = process.env.showcase ?? '';
		if (!isAngular(showcase)) {
			test.skip();
		}

		await page.goto(`./#/${path}`, { waitUntil: 'domcontentloaded' });
		await waitForDBPage(page);

		const input = page.locator('.db-input input[type=date]').first();
		await expect(input).toBeVisible();

		// Check if ng debug globals are available (dev build only)
		const hasNgDebug = await input.evaluate((element: HTMLInputElement) => {
			const host = element.closest('db-input, .db-input');

			return Boolean((globalThis as any).ng?.getComponent?.(host));
		});
		if (!hasNgDebug) {
			test.skip();
		}

		// First enter a valid date so the model is populated
		await input.focus();
		await page.keyboard.type('02292028');
		await page.waitForTimeout(100);

		const validModel = await input.evaluate((element: HTMLInputElement) => {
			const host = element.closest('db-input, .db-input');

			const cmp = (globalThis as any).ng?.getComponent?.(host);
			return cmp?.value?.();
		});
		expect(validModel).toBe('2028-02-29');

		// Now clear the year segment to create a badInput state
		await page.keyboard.press('Backspace');
		await page.waitForTimeout(100);

		const afterClear = await input.evaluate((element: HTMLInputElement) => {
			const host = element.closest('db-input, .db-input');

			const cmp = (globalThis as any).ng?.getComponent?.(host);
			return {
				badInput: element.validity.badInput,
				model: cmp?.value?.()
			};
		});

		expect(afterClear.badInput).toBe(true);
		// The model must NOT retain '2028-02-29' (the stale value).
		// It should be nullish (undefined) so validators see it as empty.
		expect(afterClear.model).toBeUndefined();
	});
});

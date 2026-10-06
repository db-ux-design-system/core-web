import { expect, test } from '@playwright/test';
import { getControlByRole, runInteractionTest } from '../default.ts';

const path = '03/switch';

test.describe('DBSwitch', () => {
	runInteractionTest({
		title: 'should toggle on ENTER key press',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// DBSwitch's root is a wrapping <div>, the actual <input> is
			// nested inside a <label>. Depending on the framework the
			// data-testid lands on the wrapper (Vue) or on the input itself
			// (React/Angular/Stencil), so resolve the control across both.
			const input = getControlByRole(
				page,
				content.getByTestId('switch'),
				'switch'
			);
			await expect(input).not.toBeChecked();

			await input.focus();
			await page.keyboard.press('Enter');
			await expect(input).toBeChecked();

			await page.keyboard.press('Enter');
			await expect(input).not.toBeChecked();
		}
	});

	runInteractionTest({
		title: 'should toggle on SPACE key press',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			const input = getControlByRole(
				page,
				content.getByTestId('switch'),
				'switch'
			);
			await expect(input).not.toBeChecked();

			await input.focus();
			await page.keyboard.press('Space');
			await expect(input).toBeChecked();
		}
	});
});

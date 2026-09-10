import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '03/switch';

test.describe('DBSwitch', () => {
	runInteractionTest({
		title: 'should toggle on ENTER key press',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// DBSwitch's root is a wrapping <div>, the actual <input> is
			// nested inside a <label>. In Vue, data-testid lands on that
			// root div (single-root attrs fallthrough), not on the input -
			// scope through the testid, then reach the input by role.
			const input = content.getByTestId('switch').getByRole('switch');
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
			const input = content.getByTestId('switch').getByRole('switch');
			await expect(input).not.toBeChecked();

			await input.focus();
			await page.keyboard.press('Space');
			await expect(input).toBeChecked();
		}
	});
});

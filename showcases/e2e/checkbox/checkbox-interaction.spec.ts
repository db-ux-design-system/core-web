import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '03/checkbox';

test.describe('DBCheckbox', () => {
	runInteractionTest({
		title: 'should handle change',
		path,
		example: 'Interaction',
		async run({ content }) {
			// DBCheckbox's root is a wrapping <div>, the actual <input> is
			// nested inside a <label>. In Vue, data-testid lands on that
			// root div (single-root attrs fallthrough), not on the input -
			// scope through the testid, then reach the input by role.
			const checkbox = content
				.getByTestId('checkbox')
				.getByRole('checkbox');
			await expect(checkbox).not.toBeChecked();
			await checkbox.check();
			await expect(checkbox).toBeChecked();
			await checkbox.uncheck();
			await expect(checkbox).not.toBeChecked();
		}
	});
});

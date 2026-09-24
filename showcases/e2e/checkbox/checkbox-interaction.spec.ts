import { expect, test } from '@playwright/test';
import { getControlByRole, runInteractionTest } from '../default.ts';

const path = '03/checkbox';

test.describe('DBCheckbox', () => {
	runInteractionTest({
		title: 'should handle change',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// DBCheckbox's root is a wrapping <div>, the actual <input> is
			// nested inside a <label>. Depending on the framework the
			// data-testid lands on the wrapper (Vue) or on the input itself
			// (React/Angular/Stencil), so resolve the control across both.
			const checkbox = getControlByRole(
				page,
				content.getByTestId('checkbox'),
				'checkbox'
			);
			await expect(checkbox).not.toBeChecked();
			await checkbox.check();
			await expect(checkbox).toBeChecked();
			await checkbox.uncheck();
			await expect(checkbox).not.toBeChecked();
		}
	});
});

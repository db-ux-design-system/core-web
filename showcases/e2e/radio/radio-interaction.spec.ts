import { expect, test } from '@playwright/test';
import { getControlByRole, runInteractionTest } from '../default.ts';

const path = '03/radio';

test.describe('DBRadio', () => {
	runInteractionTest({
		title: 'should handle change',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// DBRadio's root is the wrapping <label>, the actual <input> is
			// nested inside it. Depending on the framework the data-testid
			// lands on the wrapper (Vue) or on the input itself
			// (React/Angular/Stencil), so resolve the control across both.
			const radio1 = getControlByRole(
				page,
				content.getByTestId('radio1'),
				'radio'
			);
			const radio2 = getControlByRole(
				page,
				content.getByTestId('radio2'),
				'radio'
			);

			await radio1.check();
			await expect(radio1).toBeChecked();

			await radio2.check();
			await expect(radio2).toBeChecked();
			// Selecting the second radio deselects the first (shared name).
			await expect(radio1).not.toBeChecked();
		}
	});
});

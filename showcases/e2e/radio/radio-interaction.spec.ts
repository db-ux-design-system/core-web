import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '03/radio';

test.describe('DBRadio', () => {
	runInteractionTest({
		title: 'should handle change',
		path,
		example: 'Interaction',
		async run({ content }) {
			// DBRadio's root is the wrapping <label>, the actual <input> is
			// nested inside it. In Vue, data-testid lands on that root
			// label (single-root attrs fallthrough), not on the input -
			// scope through the testid, then reach the input by role.
			const radio1 = content.getByTestId('radio1').getByRole('radio');
			const radio2 = content.getByTestId('radio2').getByRole('radio');

			await radio1.check();
			await expect(radio1).toBeChecked();

			await radio2.check();
			await expect(radio2).toBeChecked();
			// Selecting the second radio deselects the first (shared name).
			await expect(radio1).not.toBeChecked();
		}
	});
});

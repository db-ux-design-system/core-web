import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '03/textarea';

test.describe('DBTextarea', () => {
	runInteractionTest({
		title: 'should change on input',
		path,
		example: 'Interaction',
		async run({ content }) {
			// DBTextarea's root is a wrapping <div>, the actual <textarea> is
			// a sibling of the <label> inside it. In Vue, data-testid lands
			// on that root div (single-root attrs fallthrough), not on the
			// textarea - scope through the testid, then reach it by role.
			const textarea = content
				.getByTestId('textarea')
				.getByRole('textbox');
			await textarea.fill('test');
			await expect(content.getByTestId('textarea-result')).toHaveText(
				'test'
			);
		}
	});
});

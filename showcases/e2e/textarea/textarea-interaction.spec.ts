import { expect, test } from '@playwright/test';
import { getControlByRole, runInteractionTest } from '../default.ts';

const path = '03/textarea';

test.describe('DBTextarea', () => {
	runInteractionTest({
		title: 'should change on input',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// DBTextarea's root is a wrapping <div>, the actual <textarea> is
			// a sibling of the <label> inside it. Depending on the framework
			// the data-testid lands on the wrapper (Vue) or on the textarea
			// itself (React/Angular/Stencil), so resolve the control across
			// both.
			const textarea = getControlByRole(
				page,
				content.getByTestId('textarea'),
				'textbox'
			);
			await textarea.fill('test');
			await expect(content.getByTestId('textarea-result')).toHaveText(
				'test'
			);
		}
	});
});

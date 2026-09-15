import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '03/select';

test.describe('DBSelect', () => {
	runInteractionTest({
		title: 'should change on select',
		path,
		example: 'Interaction',
		async run({ content }) {
			// DBSelect's root is a wrapping <div>, the actual <select> is a
			// sibling of the <label> inside it. In Vue, data-testid lands on
			// that root div (single-root attrs fallthrough), not on the
			// select - scope through the testid, then reach it by role.
			await content
				.getByTestId('select-change')
				.getByRole('combobox')
				.selectOption({ label: 'Test1' });
			await expect(content.getByTestId('select-result')).toHaveText(
				'test1'
			);
		}
	});

	runInteractionTest({
		title: 'should keep the selection while validating on input',
		path,
		example: 'Interaction',
		async run({ content }) {
			const select = content
				.getByTestId('select-required')
				.getByRole('combobox');

			// Validating on `input` flips internal state as soon as the value
			// became valid. The re-render that follows re-applies the `value`
			// prop - which is still the previous one, because the browser
			// dispatches `change` after `input`. The selection must survive
			// that render.
			// https://github.com/db-ux-design-system/core-web/issues/7554
			const valueAfterInput = await select.evaluate(
				async (element: HTMLSelectElement) => {
					element.value = 'test2';
					element.dispatchEvent(
						new Event('input', { bubbles: true })
					);
					await Promise.resolve();
					return element.value;
				}
			);

			expect(valueAfterInput).toBe('test2');
		}
	});
});

import { expect, test } from '@playwright/test';
import { getControlByRole, runInteractionTest } from '../default.ts';

const path = '03/select';

test.describe('DBSelect', () => {
	runInteractionTest({
		title: 'should change on select',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// DBSelect's root is a wrapping <div>, the actual <select> is a
			// sibling of the <label> inside it. Depending on the framework the
			// data-testid lands on the wrapper (Vue) or on the select itself
			// (React/Angular/Stencil), so resolve the control across both.
			await getControlByRole(
				page,
				content.getByTestId('select-change'),
				'combobox'
			).selectOption({ label: 'Test1' });
			await expect(content.getByTestId('select-result')).toHaveText(
				'test1'
			);
		}
	});

	runInteractionTest({
		title: 'should keep the selection while validating on input',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			const select = getControlByRole(
				page,
				content.getByTestId('select-required'),
				'combobox'
			);

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

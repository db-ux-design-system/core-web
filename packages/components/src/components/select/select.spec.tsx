import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBSelect } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBSelect id="test" label="Label" message="Description" value="test1">
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
		<option value="test3">Test3</option>
		<option value="test4">Test4</option>
		<option value="test5">Test5</option>
	</DBSelect>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};
const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-select')
			.exclude('test-placeholder')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test('should change on select', async ({ page, mount }) => {
		let test: string = '';
		const comp: any = (
			<DBSelect
				label="Label"
				onInput={() => {
					test = 'test1';
				}}>
				<option data-testid="option1" value="test1">
					Test1
				</option>
				<option value="test2">Test2</option>
				<option value="test3">Test3</option>
				<option value="test4">Test4</option>
				<option value="test5">Test5</option>
			</DBSelect>
		);
		const component = await mount(comp);
		const select = component.getByRole('combobox');
		const selected = await select.selectOption({ label: 'Test1' });
		expect(selected).toContain(test);
	});

	test('should keep the selection while validating on input', async ({
		mount
	}) => {
		const requiredComp: any = (
			<DBSelect
				label="Label"
				required
				value=""
				placeholder="Choose an option">
				<option value="test1">Test1</option>
				<option value="test2">Test2</option>
			</DBSelect>
		);
		const component = await mount(requiredComp);
		const select = component.getByRole('combobox');

		/* Validating on `input` flips internal state (`_descByIds`) as soon as
		 * the value became valid. The re-render that follows re-applies the
		 * `value` prop - which is still the previous one, because a browser
		 * dispatches `change` after `input`, so the consumer cannot have
		 * propagated the new value yet. The selection must survive that render.
		 * https://github.com/db-ux-design-system/core-web/issues/7554 */
		const valueAfterInput = await select.evaluate(
			async (element: HTMLSelectElement) => {
				element.value = 'test2';
				element.dispatchEvent(new Event('input', { bubbles: true }));
				await Promise.resolve();
				return element.value;
			}
		);

		expect(valueAfterInput).toBe('test2');
	});
};

test.describe('DBSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

// The harness is a React-only regression fixture, vue must not resolve it.
// VUE: /*
import ControlledSelectHarness from './test-fixtures/controlled-select.fixture';
// VUE: */

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

	test('should keep the selection while validating between input and change', async ({
		mount
	}, testInfo) => {
		test.skip(
			!testInfo.config.rootDir.includes('/output/react/'),
			'React-specific controlled component regression test'
		);

		const component = await mount(<ControlledSelectHarness />);
		const scenario = component.getByTestId('scenario-required-default');
		const select = scenario.getByRole('combobox');

		/* A browser dispatches `input` and `change` for a select in separate
		 * tasks. `handleInput` validates, and React re-applies the controlled
		 * `value` on every commit of a `select` - so an internal state change in
		 * that window would discard the selection before the consumer ever sees
		 * it. `selectOption` cannot cover this because it dispatches both events
		 * in the same task, i.e. before the re-render lands.
		 * https://github.com/db-ux-design-system/core-web/issues/7554 */
		await select.evaluate(async (element: any) => {
			element.value = 'first';
			element.dispatchEvent(new Event('input', { bubbles: true }));
			await new Promise((resolve) => {
				requestAnimationFrame(() => resolve(null));
			});
			element.dispatchEvent(new Event('change', { bubbles: true }));
		});

		await expect(select).toHaveValue('first');
		await expect(scenario.getByTestId('controlled-value')).toHaveText(
			'first'
		);
	});
};

test.describe('DBSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});

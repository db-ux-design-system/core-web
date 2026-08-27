import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

// VUE: /*
import SelectControlled from './examples/controlled.example';
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

	test('should update controlled values with required and empty option variants', async ({
		mount
	}, testInfo) => {
		test.skip(
			!testInfo.config.rootDir.includes('/output/react/'),
			'React-specific controlled component regression test'
		);

		const scenarios = [
			{ label: 'Required', readout: 'Required', emptyOptionHidden: true },
			{
				label: 'With empty option',
				readout: 'With empty option',
				emptyOptionHidden: false
			},
			{
				label: 'Optional',
				readout: 'Optional',
				emptyOptionHidden: false
			},
			{ label: 'Floating', readout: 'Floating', emptyOptionHidden: true }
		];

		const component = await mount(<SelectControlled />);

		for (const { label, readout, emptyOptionHidden } of scenarios) {
			const select = component.getByRole('combobox', { name: label });
			const emptyOption = select.locator('option[value=""]');

			await expect(select).toHaveValue('');
			await expect(emptyOption).toHaveJSProperty(
				'hidden',
				emptyOptionHidden
			);
			await expect(component.getByText(`${readout}: none`)).toBeVisible();

			for (const value of ['Option 1', 'Option 2']) {
				await select.selectOption(value);
				await expect(select).toHaveValue(value);
				await expect(select.locator('option:checked')).toHaveText(
					value
				);
				await expect(
					component.getByText(`${readout}: ${value}`)
				).toBeVisible();
				expect(await select.ariaSnapshot()).toContain(
					`option "${value}" [selected]`
				);
			}
		}
	});
};

test.describe('DBSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});

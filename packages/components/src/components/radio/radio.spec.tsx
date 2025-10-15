import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBRadio } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DBRadio label="Test"></DBRadio>;

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
		// Some wired issue with react and playwright ariaSnapshot in this case
		const playwrightReactIssueFix = snapshot.replace(': "on"', '');
		expect(playwrightReactIssueFix).toMatchSnapshot(
			`${testInfo.testId}.yaml`
		);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-radio')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should handle change`, async ({ mount, page }) => {
		let test = '';
		const actionComp: any = (
			<div>
				<DBRadio
					data-testid="test"
					onChange={() => {
						test = 'test';
					}}
					name="test"
					label="Test"
				/>
				<DBRadio
					data-testid="test2"
					onChange={() => {
						test = 'test2';
					}}
					name="test"
					label="Test2"
				/>
			</div>
		);
		const component = await mount(actionComp);
		await component.getByTestId('test').check();
		expect(test).toEqual('test');
		await component.getByTestId('test2').check();
		expect(test).toEqual('test2');
		const radio1Unchecked = await component.getByTestId('test').isChecked();
		expect(!radio1Unchecked).toBeTruthy();
	});
};

test.describe('DBRadio', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});

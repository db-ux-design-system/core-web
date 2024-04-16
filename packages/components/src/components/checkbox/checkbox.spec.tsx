import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCheckbox } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DBCheckbox label="Test" />;

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
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-checkbox')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should handle change`, async ({ mount, page }) => {
		let test = '';
		const actionComp: any = (
			<DBCheckbox
				onChange={() => {
					if (test === 'test') {
						test = 'test2';
					} else {
						test = 'test';
					}
				}}
				label="Test"
			/>
		);
		const component = await mount(actionComp);
		await component
			// VUE: .getByRole('checkbox')
			.check();
		expect(test).toEqual('test');
		await component
			// VUE: .getByRole('checkbox')
			.uncheck();
		expect(test).toEqual('test2');
	});
};

test.describe('DBCheckbox', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testAction();
});

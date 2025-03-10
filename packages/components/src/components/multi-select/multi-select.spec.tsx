import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBMultiSelect } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBMultiSelect
		options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
		label="Test"
		placeholder="Placeholder"></DBMultiSelect>
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
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-multi-select')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test('click on single item', async ({ mount }) => {
		const component = await mount(comp);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await summary.click();
		const input = component.locator('input').first();
		await input.click({ force: true });
		await expect(summary).toContainText('Option 1');
	});
};

test.describe('DBMultiSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testAction();
	testA11y();
});

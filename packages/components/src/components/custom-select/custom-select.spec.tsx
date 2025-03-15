import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCustomSelect } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBCustomSelect
		options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
		label="Test"
		placeholder="Placeholder"></DBCustomSelect>
);

const multiple: any = (
	<DBCustomSelect
		options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
		label="Test"
		multiple={true}
		placeholder="Placeholder"></DBCustomSelect>
);

const multipleSearchSelect: any = (
	<DBCustomSelect
		options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
		label="Test"
		multiple={true}
		showSearch={true}
		showSelectAll={true}
		placeholder="Placeholder"></DBCustomSelect>
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
			.include('.db-custom-select')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test('click on single item', async ({ mount }) => {
		const component = await mount(comp);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await summary.click({ force: true });
		const input = component.locator('input').first();
		await input.dispatchEvent('click');
		await expect(summary).toContainText('Option 1');
		await summary.click();
		const inputs = await component.locator('input').all();
		await inputs[1].dispatchEvent('click');
		await expect(summary).toContainText('Option 2');
		const buttons = await component.locator('button').all();
		const clearButton = buttons[1];
		await expect(clearButton).toBeVisible();
		await clearButton.dispatchEvent('click');
		await expect(summary).not.toContainText('Option 2');
	});

	test('click on multiple item', async ({ mount }) => {
		const component = await mount(multiple);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await summary.click({ force: true });
		const inputs = await component.locator('input').all();
		for (const input of inputs) {
			await input.dispatchEvent('click');
		}
		await expect(summary).toContainText('Option 1, Option 2');
		await summary.click();
		const input = await component.locator('input').first();
		await input.dispatchEvent('click');
		await expect(summary).toContainText('Option 2');
		const buttons = await component.locator('button').all();
		const clearButton = buttons[1];
		await expect(clearButton).toBeVisible();
		await clearButton.dispatchEvent('click');
		await expect(summary).not.toContainText('Option 2');
	});

	test('test search', async ({ mount }) => {
		const component = await mount(multipleSearchSelect);
		const summary = component.locator('summary');
		await summary.click({ force: true });
		const inputs = await component.locator('input').all();
		expect(inputs.length).toBe(4);
		await inputs[0].fill('test');
		await expect(inputs[1]).not.toBeVisible();
		await expect(inputs[2]).not.toBeVisible();
		await expect(inputs[3]).not.toBeVisible();
	});

	test('test select all', async ({ mount }) => {
		const component = await mount(multipleSearchSelect);
		const summary = component.locator('summary');
		await summary.click({ force: true });
		const inputs = await component.locator('input').all();
		expect(inputs.length).toBe(4);
		await inputs[1].dispatchEvent('click');
		await expect(summary).toContainText('Option 1, Option 2');
	});
};

test.describe('DBCustomSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testAction();
	testA11y();
});

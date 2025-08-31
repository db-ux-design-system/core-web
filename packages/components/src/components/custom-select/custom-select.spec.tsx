import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBCustomSelect } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBCustomSelect
		options={[
			{ value: 'Option 1' },
			{ value: 'Option 2' },
			{ value: 'Option 3' },
			{ value: 'Option 4' },
			{ value: 'Option 5' }
		]}
		label="Test"
		placeholder="Placeholder"></DBCustomSelect>
);

const multiple: any = (
	<DBCustomSelect
		options={[
			{ value: 'Option 1' },
			{ value: 'Option 2' },
			{ value: 'Option 3' },
			{ value: 'Option 4' },
			{ value: 'Option 5' }
		]}
		label="Test"
		multiple={true}
		placeholder="Placeholder"></DBCustomSelect>
);

const multipleSearchSelect: any = (
	<DBCustomSelect
		options={[
			{ value: 'Option 1' },
			{ value: 'Option 2' },
			{ value: 'Option 3' },
			{ value: 'Option 4' },
			{ value: 'Option 5' }
		]}
		label="Test"
		multiple={true}
		showSearch={true}
		showSelectAll={true}
		placeholder="Placeholder"></DBCustomSelect>
);

const selectAllSelect: any = (
	<DBCustomSelect
		options={[
			{ value: 'Option 1' },
			{ value: 'Option 2' },
			{ value: 'Option 3' },
			{ value: 'Option 4' },
			{ value: 'Option 5' }
		]}
		label="Test"
		multiple={true}
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
	test('click on single item', async ({ page, mount }) => {
		const component = await mount(comp);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		await page.keyboard.press('Space');
		await expect(summary).toContainText('Option 1');
	});

	test('click on multiple item', async ({ page, mount }) => {
		const component = await mount(multiple);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		await page.keyboard.press('Space');
		await page.keyboard.press('Escape');
		await expect(summary).toContainText('Option 1');
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
		await expect(inputs[4]).not.toBeVisible();
		await expect(inputs[5]).not.toBeVisible();
		await expect(inputs[6]).not.toBeVisible();
	});

	test('test select all', async ({ page, mount }) => {
		const component = await mount(selectAllSelect);
		const summary = component.locator('summary');
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		await page.keyboard.press('Space');
		await page.keyboard.press('Escape');
		await expect(summary).toContainText(
			'Option 1, Option 2, Option 3, Option 4, Option 5'
		);
	});
};

test.describe('DBCustomSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testAction();
	testA11y();
});

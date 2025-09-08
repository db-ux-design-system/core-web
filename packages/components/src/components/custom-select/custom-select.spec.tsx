import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

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

const selectAllSelect: any = (
	<DBCustomSelect
		options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
		label="Test"
		multiple={true}
		showSelectAll={true}
		placeholder="Placeholder"></DBCustomSelect>
);

const optionGroupsComp: any = (
	<DBCustomSelect
		options={[
			{ label: 'Option group 1', isGroupTitle: true },
			{ value: 'G1:Option 1' },
			{ value: 'G1:Option 2' },
			{ label: 'Option group 2', isGroupTitle: true },
			{ value: 'G2:Option 1' },
			{ value: 'G2:Option 2' }
		]}
		label="Test Option Groups"
		placeholder="Placeholder"
	/>
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
	test('option groups should be accessible', async ({ page, mount }) => {
		await mount(optionGroupsComp);
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
	});

	test('test select all', async ({ page, mount }) => {
		const component = await mount(selectAllSelect);
		const summary = component.locator('summary');
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		await page.keyboard.press('Space');
		await page.keyboard.press('Escape');
		await expect(summary).toContainText('Option 1, Option 2');
	});

	test('select single item with Enter key', async ({ page, mount }) => {
		const component = await mount(comp);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		await page.keyboard.press('Enter');
		await expect(summary).toContainText('Option 1');
		// For single select, dropdown should be closed after Enter
		await expect(component.locator('details')).not.toHaveAttribute('open');
	});

	test('select multiple item with Enter key', async ({ page, mount }) => {
		const component = await mount(multiple);
		const summary = component.locator('summary');
		await expect(summary).not.toContainText('Option 1');
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		await page.keyboard.press('Enter');
		// For multiple select, dropdown should remain open after Enter
		await expect(component.locator('details')).toHaveAttribute('open');
		await page.keyboard.press('Escape');
		await expect(summary).toContainText('Option 1');
	});

	test('option groups keyboard navigation: should navigate between option groups correctly', async ({ page, mount }) => {
		const component = await mount(optionGroupsComp);
		
		// Open the dropdown and focus first option
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		
		// Should be focused on G1:Option 1
		const focused1 = await page.evaluate(() => (document.activeElement as HTMLInputElement)?.value);
		expect(focused1).toBe('G1:Option 1');
		
		// Navigate to G1:Option 2
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused2 = await page.evaluate(() => (document.activeElement as HTMLInputElement)?.value);
		expect(focused2).toBe('G1:Option 2');
		
		// CRITICAL TEST: Navigate from G1:Option 2 to G2:Option 1
		// This should skip the "Option group 2" title and focus on G2:Option 1
		// This is the core issue that was fixed in #4920
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused3 = await page.evaluate(() => (document.activeElement as HTMLInputElement)?.value);
		expect(focused3).toBe('G2:Option 1'); // This was previously broken
		
		// Continue to G2:Option 2
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused4 = await page.evaluate(() => (document.activeElement as HTMLInputElement)?.value);
		expect(focused4).toBe('G2:Option 2');
		
		// Test reverse navigation
		await page.keyboard.press('ArrowUp');
		await page.waitForTimeout(100);
		const focused5 = await page.evaluate(() => (document.activeElement as HTMLInputElement)?.value);
		expect(focused5).toBe('G2:Option 1');
		
		await page.keyboard.press('ArrowUp');
		await page.waitForTimeout(100);
		const focused6 = await page.evaluate(() => (document.activeElement as HTMLInputElement)?.value);
		expect(focused6).toBe('G1:Option 2');
	});
};

test.describe('DBCustomSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testAction();
	testA11y();
});

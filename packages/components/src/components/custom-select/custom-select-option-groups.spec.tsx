import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBCustomSelect } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

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

const optionGroupsMultiple: any = (
	<DBCustomSelect
		options={[
			{ label: 'Option group 1', isGroupTitle: true },
			{ value: 'G1:Option 1' },
			{ value: 'G1:Option 2' },
			{ label: 'Option group 2', isGroupTitle: true },
			{ value: 'G2:Option 1' },
			{ value: 'G2:Option 2' }
		]}
		label="Test Option Groups Multiple"
		placeholder="Placeholder"
		multiple={true}
	/>
);

test.describe('DBCustomSelect - Option Groups Keyboard Navigation', () => {
	test.beforeEach(async ({ page }) => {
		await page.setViewportSize(DEFAULT_VIEWPORT);
	});

	test('single select: should navigate through all options including those in second group', async ({ page, mount }) => {
		const component = await mount(optionGroupsComp);
		const summary = component.locator('summary');
		
		// Open the dropdown and focus first option
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		
		// Should be focused on G1:Option 1
		const focused1 = await page.evaluate(() => document.activeElement?.value);
		expect(focused1).toBe('G1:Option 1');
		
		// Navigate to G1:Option 2
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused2 = await page.evaluate(() => document.activeElement?.value);
		expect(focused2).toBe('G1:Option 2');
		
		// THIS IS THE CRITICAL TEST: Navigate from G1:Option 2 to G2:Option 1
		// This should skip the "Option group 2" title and focus on G2:Option 1
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused3 = await page.evaluate(() => document.activeElement?.value);
		expect(focused3).toBe('G2:Option 1'); // This is where the bug occurs!
		
		// Continue to G2:Option 2
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused4 = await page.evaluate(() => document.activeElement?.value);
		expect(focused4).toBe('G2:Option 2');
		
		// Test reverse navigation
		await page.keyboard.press('ArrowUp');
		await page.waitForTimeout(100);
		const focused5 = await page.evaluate(() => document.activeElement?.value);
		expect(focused5).toBe('G2:Option 1');
		
		await page.keyboard.press('ArrowUp');
		await page.waitForTimeout(100);
		const focused6 = await page.evaluate(() => document.activeElement?.value);
		expect(focused6).toBe('G1:Option 2');
	});

	test('multiple select: should navigate through all options including those in second group', async ({ page, mount }) => {
		const component = await mount(optionGroupsMultiple);
		
		// Open the dropdown and focus first option
		await page.keyboard.press('Tab');
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(1000); // wait for focus to apply
		
		// Should be focused on G1:Option 1
		const focused1 = await page.evaluate(() => document.activeElement?.value);
		expect(focused1).toBe('G1:Option 1');
		
		// Navigate to G1:Option 2
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused2 = await page.evaluate(() => document.activeElement?.value);
		expect(focused2).toBe('G1:Option 2');
		
		// THIS IS THE CRITICAL TEST: Navigate from G1:Option 2 to G2:Option 1
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused3 = await page.evaluate(() => document.activeElement?.value);
		expect(focused3).toBe('G2:Option 1'); // This should work in multiple mode
		
		// Continue to G2:Option 2
		await page.keyboard.press('ArrowDown');
		await page.waitForTimeout(100);
		const focused4 = await page.evaluate(() => document.activeElement?.value);
		expect(focused4).toBe('G2:Option 2');
	});

	test('should be accessible', async ({ mount }) => {
		const component = await mount(optionGroupsComp);
		const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
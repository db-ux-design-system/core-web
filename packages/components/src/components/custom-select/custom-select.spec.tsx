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

const tagSelectWithCustomRemoveTexts: any = (
	<DBCustomSelect
		options={[
			{ value: 'Red', label: 'Red Color' },
			{ value: 'Blue', label: 'Blue Color' },
			{ value: 'Green', label: 'Green Color' }
		]}
		label="Colors"
		multiple={true}
		selectedType="tag"
		removeTagsTexts={[
			'Remove Red Color',
			'Remove Blue Color', 
			'Remove Green Color'
		]}
		values={['Blue', 'Green']}
		placeholder="Select colors"></DBCustomSelect>
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

	test('custom removeTagsTexts should correspond to correct options', async ({ mount }) => {
		const component = await mount(tagSelectWithCustomRemoveTexts);
		
		// Should have tags for Blue and Green (selected values)
		const tags = component.locator('.db-tag');
		await expect(tags).toHaveCount(2);
		
		// Get the remove buttons and their tooltip text
		const removeButtons = component.locator('.db-tag .db-tab-remove-button');
		await expect(removeButtons).toHaveCount(2);
		
		// The first selected option is 'Blue' (index 1 in options array)
		// Should have 'Remove Blue Color' tooltip
		const firstRemoveButton = removeButtons.first();
		const firstTooltip = firstRemoveButton.locator('.db-tooltip');
		await expect(firstTooltip).toContainText('Remove Blue Color');
		
		// The second selected option is 'Green' (index 2 in options array) 
		// Should have 'Remove Green Color' tooltip
		const secondRemoveButton = removeButtons.last();
		const secondTooltip = secondRemoveButton.locator('.db-tooltip');
		await expect(secondTooltip).toContainText('Remove Green Color');
	});
};

test.describe('DBCustomSelect', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testAction();
	testA11y();
});

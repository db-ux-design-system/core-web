import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBSwitch } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp = <DBSwitch>Test</DBSwitch>;

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

test.describe('DBSwitch', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});

test.describe('DBSwitch', () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-switch')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('should toggle on ENTER key press', async ({ mount, page }) => {
		const component = await mount(<DBSwitch>Test Switch</DBSwitch>);
		const input = component.locator('input[type="checkbox"][role="switch"]');

		// Initially unchecked
		await expect(input).not.toBeChecked();

		// Focus the input
		await input.focus();

		// Press ENTER key
		await page.keyboard.press('Enter');

		// Should be checked after ENTER key press
		await expect(input).toBeChecked();

		// Press ENTER key again
		await page.keyboard.press('Enter');

		// Should be unchecked after second ENTER key press
		await expect(input).not.toBeChecked();
	});

	test('should toggle on SPACE key press', async ({ mount, page }) => {
		const component = await mount(<DBSwitch>Test Switch</DBSwitch>);
		const input = component.locator('input[type="checkbox"]');

		// Initially unchecked
		await expect(input).not.toBeChecked();

		// Focus the input
		await input.focus();

		// Press SPACE key (default checkbox behavior)
		await page.keyboard.press('Space');

		// Should be checked after SPACE key press
		await expect(input).toBeChecked();
	});
});

import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCard } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const defaultComp = <DBCard>Test</DBCard>;

const testDefaultCard = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(defaultComp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(defaultComp);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBCard', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testDefaultCard();
});

test.describe('DBCard', () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(defaultComp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-card')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

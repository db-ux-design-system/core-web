import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBAccordion } from './index';

const comp = <DBAccordion>Test</DBAccordion>;

const testComponent = () => {
	test('DBAccordion should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('DBAccordion should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBAccordion component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });
	testComponent();
});

test.describe('DBAccordion component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });
	testComponent();
});

test.describe('DBAccordion component A11y', () => {
	test('DBAccordion should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-accordion')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

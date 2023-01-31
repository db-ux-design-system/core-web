import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBBrand } from './index';

test.describe('DBBrand component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	test.fixme('DBBrand should contain text', async ({ mount }) => {
		const component = await mount(<DBBrand>Test</DBBrand>);
		await expect(component).toContainText('Test');
	});

	test.fixme('DBBrand should match screenshot', async ({ mount }) => {
		const component = await mount(<DBBrand>Test</DBBrand>);
		await expect(component).toHaveScreenshot();
	});
});

test.describe('DBBrand component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	test.fixme('DBBrand should contain text', async ({ mount }) => {
		const component = await mount(<DBBrand>Test</DBBrand>);
		await expect(component).toContainText('Test');
	});

	test.fixme('DBBrand should match screenshot', async ({ mount }) => {
		const component = await mount(<DBBrand>Test</DBBrand>);
		await expect(component).toHaveScreenshot();
	});
});

test.describe('DBBrand component A11y', () => {
	test.fixme(
		'DBBrand should not have any automatically detectable accessibility issues',
		async ({ page, mount }) => {
			await mount(<DBBrand>Test</DBBrand>);
			const accessibilityScanResults = await new AxeBuilder({ page })
				.include('.db-brand')
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		}
	);
});

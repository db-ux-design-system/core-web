import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBCodeDocs } from './index';

const comp = <DBCodeDocs codeSnippets={['Test 1', 'Test 2']}>Test</DBCodeDocs>;

const testComponent = () => {
	test('DBCodeDocs should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test ');
	});

	test('DBCodeDocs should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBCodeDocs component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });
	testComponent();
});

test.describe('DBCodeDocs component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });
	testComponent();
});

test.describe('DBCodeDocs component A11y', () => {
	test('DBCodeDocs should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-code-docs')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

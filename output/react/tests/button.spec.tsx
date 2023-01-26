import { test, expect } from '@playwright/experimental-ct-react';
// import AxeBuilder from '@axe-core/playwright';

import DBButton from '../src/components/button/button';

test.describe('Button block desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	test('Button should contain text', async ({ mount }) => {
		const component = await mount(<DBButton text="Test" />);
		await expect(component).toContainText('Test');
	});

	test('Button should match screenshot', async ({ mount }) => {
		const component = await mount(<DBButton text="Test" />);
		await expect(component).toHaveScreenshot();
	});

	test('Button should only have icon', async ({ mount }) => {
		const component = await mount(
			<DBButton icon="account" onlyIcon={true} />
		);
		await expect(component).toHaveScreenshot();
	});
});

test.describe('Button block mobile', () => {
	// IPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	test('Button should contain text', async ({ mount }) => {
		const component = await mount(<DBButton text="Test" />);
		await expect(component).toContainText('Test');
	});

	test('Button should match screenshot', async ({ mount }) => {
		const component = await mount(<DBButton text="Test" />);
		await expect(component).toHaveScreenshot();
	});
});

// test.describe('A11y button component', () => {
// 	test('button should not have any automatically detectable accessibility issues', async ({
// 		page,
// 		mount
// 	}) => {
// 		await mount(<DBButton text="Test" />);
// 		const accessibilityScanResults = await new AxeBuilder({
// 			page
// 		})
// 			.include('.db-button')
// 			.analyze();

// 		expect(accessibilityScanResults.violations).toEqual([]);
// 	});

// 	test('icon only', async ({ page, mount }) => {
// 		await mount(<DBButton icon="account" text="asdf" onlyIcon={true} />);
// 		const accessibilityScanResults = await new AxeBuilder({
// 			page
// 		})
// 			.include('.db-button')
// 			.analyze();

// 		expect(accessibilityScanResults.violations).toEqual([]);
// 	});
// });

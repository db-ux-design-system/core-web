import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBBrand } from './index';

// 🚧 Vite will hash the filename of db_logo.svg
const logo = 'assets/db_logo-7ad07993.svg';
const comp = (
	<DBBrand
		imgSrc={logo}
		imgAlt="The Deutsche Bahn logo"
		imgHeight={50}
		imgWidth={35}
		anchorChildren={true}
		anchorRef="/"
		anchorTitle="I am hover text"
		anchorRelation="alternate">
		Test
	</DBBrand>
);
const testBrand = () => {
	test('DBBrand should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('DBBrand should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBBrand component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });

	testBrand();
});

test.describe('DBBrand component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });

	testBrand();
});

test.describe('DBBrand component A11y', () => {
	test('DBBrand should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			// TODO: Check whether a default background color in DBBrand makes sense
			.disableRules('color-contrast')
			.include('.db-brand')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

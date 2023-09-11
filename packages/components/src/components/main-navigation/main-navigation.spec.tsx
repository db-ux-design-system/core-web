import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBMainNavigation } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBNavigationItem } from '../navigation-item';

const comp = (
	<DBMainNavigation>
		<DBNavigationItem>
			<a href="#">Test1</a>
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Test2</a>
		</DBNavigationItem>
		<DBNavigationItem>
			<a href="#">Test3</a>
		</DBNavigationItem>
	</DBMainNavigation>
);

const testComponent = () => {
	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBMainNavigation', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});

test.describe('DBMainNavigation component A11y', () => {
	test('DBMainNavigation should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-main-navigation')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

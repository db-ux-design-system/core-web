import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBNavigationItemGroup } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBNavigationItem } from '../navigation-item';

const comp: any = (
	<menu>
		<DBNavigationItemGroup text="More">
			<DBNavigationItem>
				<a href="#">Test1</a>
			</DBNavigationItem>
			<DBNavigationItem>
				<a href="#">Test2</a>
			</DBNavigationItem>
			<DBNavigationItem>
				<a href="#">Test3</a>
			</DBNavigationItem>
		</DBNavigationItemGroup>
	</menu>
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
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-navigation-item-group')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBNavigationItemGroup', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});

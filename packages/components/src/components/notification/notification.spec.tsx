import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBNotification } from './index';
import {
	DEFAULT_VIEWPORT,
	TESTING_VIEWPORTS,
	SEMANTICS
	// @ts-ignore - vue can only find it with .ts as file ending
} from '../../shared/constants.ts';

const comp = <DBNotification>Test</DBNotification>;

const testComponent = () => {
	test(`should contain text`, async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test(`should match screenshot`, async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testVariants = () => {
	for (const semantic of SEMANTICS) {
		test(`should match screenshot for semantic ${semantic}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBNotification semantic={semantic}>Test</DBNotification>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBNotification', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});
test.describe('DBNotification', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testVariants();
});

test.describe('DBNotification', () => {
	test('should not have any accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-notification')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

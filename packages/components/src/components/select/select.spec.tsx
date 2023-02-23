import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBSelect } from './index';
import { TESTING_VIEWPORTS } from '../../shared/constants';

const comp = (
	<DBSelect>
		<option>Test</option>
	</DBSelect>
);

const testComponent = (viewport) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test(`should match screenshot for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testVariants = (viewport) => {
	for (const variant of VARIANTS) {
		test(`should match screenshot for variant ${variant} and device ${viewport.name}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBSelect variant={variant}>
					<option>Test</option>
				</DBSelect>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBSelect component', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		testVariants(viewport);
	});
});

test.describe('DBSelect component A11y', () => {
	test('DBSelect should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-select')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

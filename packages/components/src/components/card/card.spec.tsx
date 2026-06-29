import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBCard } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const defaultComp: any = <DBCard>Test</DBCard>;

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

const testCardVariants = () => {
	for (const behavior of ['default', 'interactive']) {
		test(`should match screenshot for behavior ${behavior}`, async ({
			mount
		}) => {
			const variantComp: any = (
				<div>
					<DBCard behavior={behavior}>Test</DBCard>
				</div>
			);
			const component = await mount(variantComp);
			await expect(component).toHaveScreenshot();
		});
	}
};
const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(defaultComp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(defaultComp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-card')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBCard', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testDefaultCard();
	testCardVariants();
	testA11y();
});

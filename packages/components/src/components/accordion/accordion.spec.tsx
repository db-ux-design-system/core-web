import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBAccordion } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBAccordionItem } from '../accordion-item';

const comp = (
	<DBAccordion>
		<DBAccordionItem title="Test" content="Content 1" />
		<DBAccordionItem title="Test 2" content="Content 2" />
		<DBAccordionItem title="Test 3" content="Content 3" />
	</DBAccordion>
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

test.describe('DBAccordion', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});

test.describe('DBAccordion', () => {
	test('should not have any A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-accordion')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

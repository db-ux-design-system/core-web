---
to: src/components/<%= name %>/<%= name %>.spec.tsx
---
import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DB<%= h.changeCase.pascal(name) %> } from "./index";
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp = <DB<%= h.changeCase.pascal(name) %>>Test</DB<%= h.changeCase.pascal(name) %>>;

const testComponent = () =>{
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
}

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	test('should not have any A11y issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-<%= name %>')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

});

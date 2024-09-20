import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { hasWebComponentSyntax, waitForDBPage } from '../default';

const testFormComponents = async (
	page: Page,
	testId: string,
	role: 'textbox' | 'combobox' | 'checkbox'
) => {
	await page.goto('./');
	const tab = page.getByTestId(testId);
	await tab.click({ force: true });
	const definition = await page
		.getByTestId('data-list')
		.getByRole('definition')
		.all();

	const components = await page.getByTestId('tabs').getByRole(role).all();
	for (const component of components) {
		const index = components.indexOf(component);
		switch (role) {
			case 'textbox': {
				await component.clear();
				await component.fill(`${role}-${index}`);

				break;
			}

			case 'combobox': {
				await component.selectOption({ value: `${role}-${index}` });

				break;
			}

			case 'checkbox': {
				await component.click({ force: true });

				break;
			}
			// No default
		}
	}

	// Move focus out of last component to reflect changes
	await tab.click({ force: true });

	for (const def of definition) {
		const index = definition.indexOf(def);
		const text = await def.textContent();
		if (role === 'checkbox') {
			expect(text).toEqual('false');
		} else {
			expect(text).toEqual(`${role}-${index}`);
		}
	}
};

test.describe('Home', () => {
	test('has title', async ({ page }) => {
		await page.goto('./');
		await expect(page).toHaveTitle('Showcase');
	});

	test('should not have any A11y issues', async ({ page }) => {
		// Angular wraps custom components in own tags this will cause a lot of issues with axe-core
		if (hasWebComponentSyntax(process.env.showcase)) {
			test.skip();
		}

		await page.goto('./', {
			waitUntil: 'domcontentloaded'
		});

		await waitForDBPage(page);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
			// TODO: There might be an issue our implementation of which elements get which roles
			.disableRules(['color-contrast', 'aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('test inputs', async ({ page }) => {
		await testFormComponents(page, 'tab-inputs', 'textbox');
	});

	test('test textareas', async ({ page }) => {
		await testFormComponents(page, 'tab-textareas', 'textbox');
	});

	test('test selects', async ({ page }) => {
		await testFormComponents(page, 'tab-selects', 'combobox');
	});

	test('test checkboxes', async ({ page }) => {
		await testFormComponents(page, 'tab-checkboxes', 'checkbox');
	});
});

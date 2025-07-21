import { AxeBuilder } from '@axe-core/playwright';
import { expect, type Page, test } from '@playwright/test';
import { hasWebComponentSyntax, isStencil, waitForDBPage } from '../default';

const testFormComponents = async (
	page: Page,
	testId: string,
	role: 'textbox' | 'combobox' | 'checkbox' | 'radio' | 'group'
) => {
	await page.goto('./');
	const tab = page.getByTestId(testId);
	await expect(tab).toBeVisible();
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

			case 'radio':
			case 'checkbox': {
				await component.click({ force: true });

				break;
			}

			case 'group': {
				if (index !== 0) {
					await component.click({ force: true });
					await page.waitForTimeout(2000); // Wait for focus to hit first element
					await page.keyboard.press('Space');
					await page.keyboard.press('Escape');
					await page.waitForTimeout(500);
				}

				break;
			}
		}
	}

	// Move focus out of last component to reflect changes
	await tab.click({ force: true });

	for (const def of definition) {
		const index = definition.indexOf(def);
		const text = await def.textContent();
		if (role === 'checkbox') {
			expect(text).toEqual('false');
		} else if (role === 'group') {
			expect(text).toEqual(`combobox-0`);
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
			// TODO: There might be an issue our implementation of which elements get which roles
			.disableRules(['aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	const stencil = isStencil(process.env.showcase);

	test('test inputs', async ({ page }) => {
		if (stencil) {
			test.skip();
		}

		await testFormComponents(page, 'tab-inputs', 'textbox');
	});

	test('test textareas', async ({ page }) => {
		if (stencil) {
			test.skip();
		}

		await testFormComponents(page, 'tab-textareas', 'textbox');
	});

	test('test selects', async ({ page }) => {
		if (stencil) {
			test.skip();
		}

		await testFormComponents(page, 'tab-selects', 'combobox');
	});

	test('test checkboxes', async ({ page }) => {
		if (stencil) {
			test.skip();
		}

		await testFormComponents(page, 'tab-checkboxes', 'checkbox');
	});

	test('test radios', async ({ page }) => {
		if (stencil) {
			test.skip();
		}

		await testFormComponents(page, 'tab-radios', 'radio');
	});

	test('test custom-selects', async ({ page }, { project }) => {
		// TODO: We need to investigate on this one how to enable it for WebKit again
		const isWebkit =
			project.name === 'webkit' || project.name === 'mobile_safari';
		if (stencil || isWebkit) {
			test.skip();
		}

		await testFormComponents(page, 'tab-custom-selects', 'group');
	});
});

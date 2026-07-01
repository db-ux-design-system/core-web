import { AxeBuilder } from '@axe-core/playwright';
import { expect, type Page, test } from '@playwright/test';
import {
	hasWebComponentSyntax,
	isAngular,
	isStencil,
	waitForDBShell
} from '../default';

const stencil = isStencil(process.env.showcase);
const angular = isAngular(process.env.showcase);

const testFormComponents = async (
	page: Page,
	testId: string,
	role: 'textbox' | 'combobox' | 'checkbox' | 'radio' | 'group' | 'switch'
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

			case 'switch':
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
		switch (role) {
			case 'switch':
			case 'checkbox': {
				expect(text).toEqual('false');
				break;
			}

			case 'group': {
				expect(text).toEqual(`combobox-0`);
				break;
			}

			case 'radio':
			case 'combobox':
			case 'textbox': {
				expect(text).toEqual(`${role}-${index}`);
				break;
			}
		}
	}

	// Reset form

	const formResetButton = await page.getByTestId('reset-button').all();
	for (const locator of formResetButton) {
		if (await locator.isVisible()) {
			await locator.click({ force: true });
			// Wait until event for reset was fired
			await page.waitForTimeout(1000);
		}
	}

	for (const def of definition) {
		const index = definition.indexOf(def);

		if (angular && index === 1) {
			// We skip ngModel for angular - reset isn't working there
			continue;
		}

		const text = await def.textContent();
		switch (role) {
			case 'switch':
			case 'checkbox': {
				expect(text).toEqual('true');
				break;
			}

			case 'radio': {
				expect(text).toEqual('');
				break;
			}

			case 'combobox':
			case 'group': {
				expect(text).toEqual(`combobox-2`);
				break;
			}

			case 'textbox': {
				expect(text).toEqual(`test${index + 1}`);
				break;
			}
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

		await waitForDBShell(page);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			// TODO: There might be an issue our implementation of which elements get which roles
			.disableRules(['aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

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

	test('test switches', async ({ page }) => {
		if (stencil) {
			test.skip();
		}

		await testFormComponents(page, 'tab-switches', 'switch');
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

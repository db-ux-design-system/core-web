import { test, expect, type Page } from '@playwright/test';

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

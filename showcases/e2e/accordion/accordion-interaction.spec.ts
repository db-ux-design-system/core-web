import { expect, test } from '@playwright/test';
import { isVue, runInteractionTest } from '../default.ts';

const path = '04/accordion';

test.describe('DBAccordion', () => {
	runInteractionTest({
		title: 'items should be visible',
		path,
		example: 'Init Open',
		async run({ content }) {
			await expect(content.getByTestId('item2')).toBeVisible();
			await expect(content.getByTestId('item3')).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'item opened by initOpenIndex closes on the first click (#8700)',
		path,
		example: 'Init Open',
		async run({ content }) {
			await expect(content.getByTestId('item2')).toBeVisible();
			await content.getByText('Test 2', { exact: true }).click();
			await expect(content.getByTestId('item2')).toBeHidden();
		}
	});

	runInteractionTest({
		title: 'single behavior opens a previously closed item with one click (#8868)',
		path,
		example: 'Action',
		async run({ content }) {
			const summary1 = content.getByText('Test', { exact: true });
			const summary2 = content.getByText('Test 2', { exact: true });

			await summary1.click();
			await expect(content.getByTestId('button')).toBeVisible();

			// The browser closes item 1 natively because both share a name
			await summary2.click();
			await expect(content.getByTestId('button')).toBeHidden();
			await expect(content.getByTestId('textarea')).toBeVisible();

			await summary1.click();
			await expect(content.getByTestId('button')).toBeVisible();
			await expect(content.getByTestId('textarea')).toBeHidden();
		}
	});

	runInteractionTest({
		title: 'nested custom select does not close the parent item (#8867)',
		path,
		example: 'Nested',
		async run({ content }) {
			await content.getByText('Select', { exact: true }).first().click();
			const select = content.getByTestId('nested-select');
			await expect(select).toBeVisible();

			const details = select.locator('details');
			await select.locator('summary').click({ force: true });
			await details.evaluate((element: HTMLDetailsElement) => {
				element.open = true;
			});
			await expect(details).toHaveAttribute('open');

			// The accordion item (the outer details) has to stay open
			await expect(
				select.locator('xpath=ancestor::details')
			).toHaveAttribute('open');
			await expect(select).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'single behavior should work',
		path,
		example: 'Action',
		async run({ content }) {
			await content.getByTestId('item1').click();
			await expect(content.getByTestId('button')).toBeVisible();

			await content.getByTestId('item2').click();
			await expect(content.getByTestId('button')).toBeHidden();
			await expect(content.getByTestId('textarea')).toBeVisible();

			// The disabled state lives on the accordion item's <details>
			// (role "group"). In Vue the test id is placed on a wrapper, so we
			// have to reach the group inside it - this mirrors the original
			// `// VUE: .getByRole('group')` marker from the component test.
			const item3 = content.getByTestId('item3');
			const disabledItem = isVue(process.env.showcase)
				? item3.getByRole('group')
				: item3;
			await expect(disabledItem).toBeDisabled();
		}
	});

	runInteractionTest({
		title: 'click inside item works',
		path,
		example: 'Action',
		async run({ content }) {
			await content.getByTestId('item1').click();
			const button = content.getByTestId('button');
			await expect(button).toBeVisible();
			await button.click();
			await expect(button).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'textarea inside item works',
		path,
		example: 'Action',
		async run({ content }) {
			await content.getByTestId('item2').click();
			const textArea = content.getByRole('textbox');
			await expect(textArea).toBeVisible();
			await textArea.fill('Test');
			await expect(textArea).toHaveValue('Test');
		}
	});
});

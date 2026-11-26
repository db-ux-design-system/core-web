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
		title: 'nested custom select does not close the parent item (#8867)',
		path,
		example: 'Nested',
		async run({ content }) {
			await content.getByText('Select', { exact: true }).first().click();
			const select = content.getByTestId('nested-select');
			await expect(select).toBeVisible();

			const details = select.locator('details');
			const itemDetails = select.locator('xpath=ancestor::details[1]');

			// The exclusive name must only be set on the accordion items
			await expect(itemDetails).toHaveAttribute('name');
			await expect(details).not.toHaveAttribute('name');

			// A synthetic summary click does not reliably open details on WebKit
			// (see custom-select-interaction.spec.ts), so open it directly
			await details.evaluate((element: HTMLDetailsElement) => {
				element.open = true;
			});
			await expect(details).toHaveAttribute('open');

			// The accordion item (the outer details) has to stay open
			await expect(itemDetails).toHaveAttribute('open');
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

			// Re-opening the item the browser closed natively takes one click (#8868)
			await content.getByTestId('item1').click();
			await expect(content.getByTestId('button')).toBeVisible();
			await expect(content.getByTestId('textarea')).toBeHidden();

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

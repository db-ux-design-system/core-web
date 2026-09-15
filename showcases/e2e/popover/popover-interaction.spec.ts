import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/popover';

test.describe('DBPopover', () => {
	runInteractionTest({
		title: 'should open on trigger focus',
		path,
		example: 'Interaction',
		async run({ content }) {
			const popover = content.getByTestId('popover').getByRole('article');
			await expect(popover).not.toBeVisible();
			await content.getByTestId('button').focus();
			await expect(popover).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should only open via external state in controlled mode',
		path,
		example: 'Interaction',
		async run({ content }) {
			const button = content.getByTestId('controlled-button');
			const popover = content
				.getByTestId('controlled-popover')
				.getByRole('article');

			await expect(button).toHaveAttribute('aria-expanded', 'false');
			await expect(popover).not.toBeVisible();

			// Hover / focus must not open a controlled popover.
			await button.hover();
			await expect(popover).not.toBeVisible();
			await button.focus();
			await expect(popover).not.toBeVisible();

			// The external toggle opens it.
			await content.getByTestId('toggle').click();
			await expect(popover).toBeVisible();
		}
	});
});

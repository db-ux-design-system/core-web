import { expect, test } from '@playwright/test';
import { getControlByRole, runInteractionTest } from '../default.ts';

const path = '02/button';

test.describe('DBButton', () => {
	runInteractionTest({
		title: 'should fire click handler',
		path,
		example: 'Interaction',
		async run({ content }) {
			const result = content.getByTestId('click-result');
			await expect(result).toHaveText('not clicked');
			await content.getByTestId('click-button').click();
			await expect(result).toHaveText('clicked');
		}
	});

	runInteractionTest({
		title: 'should forward invoker command attributes when provided',
		path,
		example: 'Interaction',
		async run({ content }) {
			const button = content.getByTestId('command-button');
			await expect(button).toHaveAttribute('command', 'show-modal');
			await expect(button).toHaveAttribute('commandfor', 'dialog');
		}
	});

	runInteractionTest({
		title: 'should omit invoker command attributes when not provided',
		path,
		example: 'Interaction',
		async run({ content }) {
			const button = content.getByTestId('default-button');
			await expect(button).not.toHaveAttribute('command');
			await expect(button).not.toHaveAttribute('commandfor');
		}
	});

	runInteractionTest({
		title: 'should forward native form-submission attributes to the button',
		path,
		example: 'Form Attributes',
		async run({ page, content }) {
			const scope = content.getByTestId('form-override-button');
			const button = getControlByRole(page, scope, 'button');

			await expect(button).toHaveAttribute(
				'formaction',
				'#override-action'
			);
			await expect(button).toHaveAttribute('formmethod', 'post');
			await expect(button).toHaveAttribute(
				'formenctype',
				'multipart/form-data'
			);
			await expect(button).toHaveAttribute('formtarget', '_self');
			// Boolean attribute: assert presence only. Its rendered value
			// differs per framework (empty string vs "true"), but any value
			// means the attribute reached the button.
			await expect(button).toHaveAttribute('formnovalidate');
		}
	});
});

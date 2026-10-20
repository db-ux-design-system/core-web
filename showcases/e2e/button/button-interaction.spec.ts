import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

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
});

import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '03/input';
const example = 'Interaction';

test.describe('DBInput', () => {
	runInteractionTest({
		title: 'should change on input',
		path,
		example,
		async run({ content }) {
			// DBInput's root is a wrapping <div>, the actual <input> is a
			// sibling of the <label> inside it. In Vue, data-testid lands on
			// that root div (single-root attrs fallthrough), not on the
			// input - scope through the testid, then reach the input by role.
			const input = content
				.getByTestId('input-change')
				.getByRole('textbox');
			await input.fill('test');
			await expect(content.getByTestId('input-result')).toHaveText(
				'test'
			);
		}
	});

	runInteractionTest({
		title: 'should have enterkeyhint attribute when provided',
		path,
		example,
		async run({ content }) {
			await expect(
				content.getByTestId('input-enterkeyhint').getByRole('textbox')
			).toHaveAttribute('enterkeyhint', 'done');
		}
	});

	runInteractionTest({
		title: 'should have inputmode attribute when provided',
		path,
		example,
		async run({ content }) {
			await expect(
				content.getByTestId('input-inputmode').getByRole('textbox')
			).toHaveAttribute('inputmode', 'numeric');
		}
	});

	runInteractionTest({
		title: 'should not have enterkeyhint or inputmode when not provided',
		path,
		example,
		async run({ content }) {
			const input = content
				.getByTestId('input-plain')
				.getByRole('textbox');
			await expect(input).not.toHaveAttribute('enterkeyhint');
			await expect(input).not.toHaveAttribute('inputmode');
		}
	});

	runInteractionTest({
		title: 'should support step="any" for number input',
		path,
		example,
		async run({ content }) {
			await expect(
				content
					.getByTestId('input-number-step-any')
					.getByRole('spinbutton')
			).toHaveAttribute('step', 'any');
		}
	});

	runInteractionTest({
		title: 'should support numeric step for number input',
		path,
		example,
		async run({ content }) {
			await expect(
				content.getByTestId('input-number-step').getByRole('spinbutton')
			).toHaveAttribute('step', '0.01');
		}
	});

	runInteractionTest({
		title: 'should have accept attribute when provided for file input',
		path,
		example,
		async run({ content }) {
			await expect(
				content
					.getByTestId('input-file-accept')
					.locator('input[type="file"]')
			).toHaveAttribute('accept', '.pdf');
		}
	});

	runInteractionTest({
		title: 'should support multiple file types in accept attribute',
		path,
		example,
		async run({ content }) {
			await expect(
				content
					.getByTestId('input-file-accept-multiple')
					.locator('input[type="file"]')
			).toHaveAttribute('accept', '.pdf,.doc,.docx,image/*');
		}
	});

	runInteractionTest({
		title: 'should support time input with dataList',
		path,
		example,
		skip: {
			// Firefox doesn't support [type=time] in combination with <datalist>
			project: (project) => project.name.startsWith('firefox')
		},
		async run({ content }) {
			const input = content
				.getByTestId('input-time')
				.locator('input[type="time"]');
			await input.focus();
			await input.press('Space');
			await input.press('Tab');
			await input.press('Tab');
			await input.press('Enter');
			await expect(input).toHaveValue('00:15');
		}
	});
});

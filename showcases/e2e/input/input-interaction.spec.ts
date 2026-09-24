import { expect, test } from '@playwright/test';
import {
	getControlByRole,
	getControlBySelector,
	runInteractionTest
} from '../default.ts';

const path = '03/input';
const example = 'Interaction';

test.describe('DBInput', () => {
	runInteractionTest({
		title: 'should change on input',
		path,
		example,
		async run({ page, content }) {
			// DBInput's root is a wrapping <div>, the actual <input> is a
			// sibling of the <label> inside it. Depending on the framework the
			// data-testid lands on the wrapper (Vue) or on the input itself
			// (React/Angular/Stencil), so resolve the control across both.
			const input = getControlByRole(
				page,
				content.getByTestId('input-change'),
				'textbox'
			);
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
		async run({ page, content }) {
			await expect(
				getControlByRole(
					page,
					content.getByTestId('input-enterkeyhint'),
					'textbox'
				)
			).toHaveAttribute('enterkeyhint', 'done');
		}
	});

	runInteractionTest({
		title: 'should have inputmode attribute when provided',
		path,
		example,
		async run({ page, content }) {
			await expect(
				getControlByRole(
					page,
					content.getByTestId('input-inputmode'),
					'textbox'
				)
			).toHaveAttribute('inputmode', 'numeric');
		}
	});

	runInteractionTest({
		title: 'should not have enterkeyhint or inputmode when not provided',
		path,
		example,
		async run({ page, content }) {
			const input = getControlByRole(
				page,
				content.getByTestId('input-plain'),
				'textbox'
			);
			await expect(input).not.toHaveAttribute('enterkeyhint');
			await expect(input).not.toHaveAttribute('inputmode');
		}
	});

	runInteractionTest({
		title: 'should support step="any" for number input',
		path,
		example,
		async run({ page, content }) {
			await expect(
				getControlByRole(
					page,
					content.getByTestId('input-number-step-any'),
					'spinbutton'
				)
			).toHaveAttribute('step', 'any');
		}
	});

	runInteractionTest({
		title: 'should support numeric step for number input',
		path,
		example,
		async run({ page, content }) {
			await expect(
				getControlByRole(
					page,
					content.getByTestId('input-number-step'),
					'spinbutton'
				)
			).toHaveAttribute('step', '0.01');
		}
	});

	runInteractionTest({
		title: 'should have accept attribute when provided for file input',
		path,
		example,
		async run({ page, content }) {
			await expect(
				getControlBySelector(
					page,
					content.getByTestId('input-file-accept'),
					'input[type="file"]'
				)
			).toHaveAttribute('accept', '.pdf');
		}
	});

	runInteractionTest({
		title: 'should support multiple file types in accept attribute',
		path,
		example,
		async run({ page, content }) {
			await expect(
				getControlBySelector(
					page,
					content.getByTestId('input-file-accept-multiple'),
					'input[type="file"]'
				)
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
		async run({ page, content }) {
			const input = getControlBySelector(
				page,
				content.getByTestId('input-time'),
				'input[type="time"]'
			);
			await input.focus();
			await input.press('Space');
			await input.press('Tab');
			await input.press('Tab');
			await input.press('Enter');
			await expect(input).toHaveValue('00:15');
		}
	});
});

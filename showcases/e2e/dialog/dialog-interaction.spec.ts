import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '01/dialog';

test.describe('DBDialog', () => {
	runInteractionTest({
		title: 'should contain text and heading',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('text-dialog');
			await scope
				.getByRole('button', { name: 'Open: text and heading' })
				.click();

			const dialog = scope.locator('dialog.db-dialog');
			await expect(dialog).toContainText('Test');
			await expect(
				dialog.getByRole('heading', { name: 'Title' })
			).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should compose the heading into a consumer aria-labelledby',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('labelledby-dialog');
			await scope
				.getByRole('button', {
					name: 'Open: aria-labelledby composition'
				})
				.click();

			// The header contributes the visible heading to the accessible
			// name and composes with a consumer-supplied id (aria-labelledby is
			// a token list), so the dialog ends up referencing both. The
			// composition settles asynchronously: the controlled aria-labelledby
			// lands first, then the header observer re-appends the heading token.
			const dialog = scope.locator('dialog.db-dialog');
			await expect
				.poll(async () => {
					const labelledBy =
						(await dialog.getAttribute('aria-labelledby')) ?? '';
					return labelledBy.split(/\s+/v).filter(Boolean);
				})
				.toEqual(
					expect.arrayContaining([
						'consumer-label',
						expect.stringMatching(/-heading$/v)
					])
				);
		}
	});

	runInteractionTest({
		title: 'should derive the heading id from a consumer header id',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('header-id-dialog');
			await scope
				.getByRole('button', { name: 'Open: derived heading id' })
				.click();

			// The heading id is derived from the header's own id with a
			// `-heading` suffix, so it is deterministic (not a random uuid) when
			// the consumer sets an id, and the dialog references exactly that.
			await expect(
				scope.locator('.db-dialog-header-content')
			).toHaveAttribute('id', 'interaction-my-header-heading');
			await expect(scope.locator('dialog.db-dialog')).toHaveAttribute(
				'aria-labelledby',
				'interaction-my-header-heading'
			);
		}
	});

	runInteractionTest({
		title: 'should let a consumer aria-label override the header naming',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('aria-label-dialog');
			await scope
				.getByRole('button', { name: 'Open: aria-label override' })
				.click();

			// The aria-labelledby wins over aria-label in the accessible-name
			// computation, so the header must NOT add its heading reference
			// when the consumer set an aria-label - otherwise the label
			// override would be silently defeated.
			const dialog = scope.locator('dialog.db-dialog');
			await expect(dialog).not.toHaveAttribute('aria-labelledby');
			await expect(dialog).toHaveAccessibleName('Consumer name');
		}
	});

	runInteractionTest({
		title: 'should wire the close button commandfor to the dialog id',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('commandfor-dialog');
			await scope
				.getByRole('button', { name: 'Open: close button commandfor' })
				.click();

			// The dialog wires its own close button's commandfor to its id (in
			// connectCloseButton) after the id lands on the <dialog>, so the
			// native request-close command resolves even when the header
			// mounted first. Target the native <button> via the
			// data-dialog-close-button marker: in the Angular/Stencil output
			// the `command`/`commandfor` attributes are forwarded onto the
			// inner <button>, but `command="request-close"` also transiently
			// sits on the <db-button> host, so a bare attribute selector would
			// match both.
			await expect(
				scope.locator(
					'.db-dialog-header button[data-dialog-close-button]'
				)
			).toHaveAttribute('commandfor', 'interaction-dialog-commandfor');
		}
	});

	runInteractionTest({
		title: 'should close dialog via the close button',
		path,
		example: 'Interaction',
		async run({ content }) {
			const scope = content.getByTestId('events-dialog');
			await scope.getByRole('button', { name: 'Open: events' }).click();

			const dialog = scope.locator('dialog.db-dialog');
			await expect(scope.getByTestId('events-content')).toBeVisible();

			// Click the native <button> (marked data-dialog-close-button), not
			// the `[command="request-close"]` attribute, which in Angular/
			// Stencil also matches the <db-button> host wrapper.
			await scope
				.locator('.db-dialog-header button[data-dialog-close-button]')
				.click();

			await expect(scope.getByTestId('events-close-readout')).toHaveText(
				'close: 1'
			);
			await expect(dialog).not.toHaveAttribute('open');
		}
	});

	runInteractionTest({
		title: 'should invoke the consumer onClick alongside the ponyfill',
		path,
		example: 'Interaction',
		async run({ content }) {
			// Regression guard: the ponyfill handleClick used to overwrite the
			// consumer's forwarded onClick, so a native handler never fired.
			// The guard is that the consumer onClick fires at all - assert a
			// positive count rather than exactly one, because on the Angular/
			// Stencil outputs the click reaches the consumer handler both as
			// the native bubbling click on the <db-dialog> host and as the
			// component's re-emitted `click` output, so the count is >= 1.
			const scope = content.getByTestId('events-dialog');
			await scope.getByRole('button', { name: 'Open: events' }).click();

			await scope.getByTestId('events-content').click();
			await expect(scope.getByTestId('events-click-readout')).toHaveText(
				/^click: [1-9]\d*$/v
			);
		}
	});

	runInteractionTest({
		title: 'should cancel and close dialog via escape',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			const scope = content.getByTestId('events-dialog');
			await scope.getByRole('button', { name: 'Open: events' }).click();

			const dialog = scope.locator('dialog.db-dialog');
			await expect(scope.getByTestId('events-content')).toBeVisible();

			await page.keyboard.press('Escape');

			await expect(scope.getByTestId('events-cancel-readout')).toHaveText(
				'cancel: 1'
			);
			await expect(scope.getByTestId('events-close-readout')).toHaveText(
				'close: 1'
			);
			await expect(dialog).not.toHaveAttribute('open');
		}
	});
});

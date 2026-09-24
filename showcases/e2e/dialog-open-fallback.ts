import type { Locator, Page } from '@playwright/test';

// Runs the Invoker Commands open-fallback on an already-clicked launcher button.
//
// The launcher relies on the native Invoker Commands API (`command="show-modal"`
// + `commandfor`), which most Browserslist targets support. Where they do not
// (e.g. Safari / Firefox ESR), the click is a no-op and the dialog never opens.
// Rather than ship a document-scoped listener in the component for that
// shrinking edge case, the example/showcase layer - which is what these e2e
// tests exercise - provides the fallback: detect the missing feature and open
// the `commandfor` target directly.
export const applyShowModalFallback = async (
	launcher: Locator
): Promise<void> => {
	await launcher.evaluate((button: HTMLButtonElement) => {
		// When supported, the native command already opened the dialog and this
		// fallback is a no-op.
		if ('commandForElement' in HTMLButtonElement.prototype) {
			return;
		}

		const id = button.getAttribute('commandfor') ?? '';
		const referenced =
			id === '' ? null : button.ownerDocument.getElementById(id);
		// In the Angular/Stencil outputs `commandfor` may resolve to the
		// `display: contents` custom-element host (`<db-dialog>`) rather than the
		// native `<dialog>` it wraps, so `showModal` would be missing. Resolve the
		// native dialog: the referenced element itself if it is one, otherwise the
		// nested `<dialog>`.
		const dialog =
			referenced instanceof HTMLDialogElement
				? referenced
				: (referenced?.querySelector<HTMLDialogElement>('dialog') ??
					null);
		if (dialog && !dialog.open) {
			dialog.showModal();
		}
	});
};

// Opens a dialog/drawer example by clicking its `command="show-modal"` launcher
// (resolved by accessible name), applying `applyShowModalFallback` for browsers
// without Invoker Commands support. `name` is the launcher button's accessible
// name (e.g. "Open: With text prop").
export const openViaShowModalCommand = async (
	page: Page,
	name: string
): Promise<void> => {
	const launcher = page.locator('main').getByRole('button', { name });
	await launcher.click();
	await applyShowModalFallback(launcher);
};

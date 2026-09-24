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
		const target =
			id === ''
				? null
				: button.ownerDocument.querySelector<HTMLDialogElement>(
						`#${id}`
					);
		if (target && typeof target.showModal === 'function' && !target.open) {
			target.showModal();
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

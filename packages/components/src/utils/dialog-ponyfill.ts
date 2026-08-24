/**
 * Ponyfill for two features that the project Browserslist does not cover yet:
 * - the `closedby` attribute on `<dialog>`: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby
 * - Invoker Commands (`command` / `commandfor`): https://caniuse.com/mdn-html_elements_button_commandfor
 * Support matrix: packages/foundations/docs/BrowserSupport.md
 * Delete this file, packages/components/src/styles/internal/_dialog-ponyfill.scss
 * and the marked call sites in dialog.lite.tsx / drawer.lite.tsx once every target
 * in .browserslistrc supports both features (currently blocked by Firefox ESR).
 */

const detect = (check: () => boolean): (() => boolean) => {
	let cachedValue: boolean | undefined;
	return () => {
		if (cachedValue === undefined) {
			try {
				cachedValue = check() === true;
			} catch {
				cachedValue = false;
			}
		}

		return cachedValue;
	};
};

/**
 * @public
 * Feature-detects whether the browser supports the `closedby` attribute
 * on `<dialog>` elements (i.e. native light-dismiss via ESC and backdrop click).
 * Result is cached after the first call.
 */
export const supportsClosedBy = detect(
	() =>
		typeof HTMLDialogElement !== 'undefined' &&
		'closedBy' in HTMLDialogElement.prototype
);

/**
 * @public
 * Feature-detects whether the browser supports the `commandfor`/`command`
 * HTML attributes for declarative button-to-element commands.
 * Result is cached after the first call.
 */
export const supportsCommandFor = detect(
	() =>
		typeof HTMLButtonElement !== 'undefined' &&
		'commandForElement' in HTMLButtonElement.prototype
);

/**
 * @public
 * Marks the dialog for the CSS backdrop-click fallback, which extends the close button's hit area. Supporting browsers stay clean.
 */
export const markClosedByFallback = (
	dialog?: HTMLDialogElement | null
): void => {
	if (dialog && !supportsClosedBy()) {
		dialog.dataset['closedby'] = 'not-supported';
	}
};

/**
 * @public
 * Closes the drawer when the native command cannot do it: no commandfor support, or a target that no longer resolves.
 * Shared by DBDialog and DBDrawer. Resolves the target once per click, without retry.
 */
export const requestCloseFallback = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	event: any,
	dialog?: HTMLDialogElement | null
): void => {
	if (!dialog) return;

	const button = (event?.target as HTMLElement)?.closest?.(
		'[command="request-close"]'
	);
	if (!button) return;

	const target = button.getAttribute('commandfor');
	if (
		!supportsCommandFor() ||
		!target ||
		!document.querySelector('dialog#' + target)
	) {
		dialog.requestClose();
	}
};

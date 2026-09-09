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
 * Closes the dialog a request-close button targets when the native command cannot do it:
 * no commandfor support, or a commandfor that does not resolve to an element. Honors the
 * commandfor target rather than the closest dialog, and stays out of the way when the
 * native command can resolve its target. Shared by DBDialog and DBDrawer. Resolves the
 * target once per click, without retry.
 */
export const requestCloseFallback = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	event: any,
	dialog?: HTMLDialogElement | null
): void => {
	if (!dialog) return;

	// Honor a canceled click: native button command activation is suppressed
	// when a consumer handler calls preventDefault(), so the fallback must not
	// close the dialog either. This keeps supported and fallback browsers
	// consistent and lets consumers conditionally veto the close on click.
	if (event?.defaultPrevented) return;

	const button = (event?.target as HTMLElement)?.closest?.(
		'[command="request-close"]'
	);
	if (!button) return;

	// Only act when the button belongs to this dialog. This prevents clicks
	// bubbling from a nested dialog's close button from closing an outer one.
	if (button.closest('dialog') !== dialog) return;

	const target = button.getAttribute('commandfor');

	// Resolve the element the button actually targets. A request-close button may
	// intentionally point at a different dialog than the one it sits in, so honor
	// commandfor rather than assuming the closest dialog.
	const targetDialog =
		(target &&
			(dialog.ownerDocument.getElementById(
				target
			) as HTMLDialogElement | null)) ||
		null;

	if (supportsCommandFor()) {
		// Native Invoker Commands work. Only step in when commandfor cannot be
		// resolved (empty or points at a missing id), so the native command is a
		// no-op; then close the dialog the button sits in. When commandfor
		// resolves, the native default action handles it - do nothing.
		if (!targetDialog) {
			dialog.requestClose();
		}
	} else {
		// Native Invoker Commands are unsupported. Close the targeted dialog when
		// commandfor resolves, otherwise fall back to the dialog the button sits in.
		(targetDialog ?? dialog).requestClose();
	}
};

/**
 * @public
 * Dismisses a non-modal dialog on Escape when the browser ignores
 * `closedby="closerequest"`. Modal dialogs (opened via showModal) close on
 * Escape natively, so this only steps in for non-modal ones (backdrop="none",
 * opened via show). No-op when closedby is supported or the key is not Escape.
 * Shared by DBDialog and DBDrawer.
 */
export const escapeCloseFallback = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	event: any,
	dialog?: HTMLDialogElement | null
): void => {
	if (!dialog || supportsClosedBy()) return;
	if (event?.key !== 'Escape') return;

	// Modal dialogs already dismiss on Escape natively; only non-modal ones need help.
	if (dialog.matches?.(':modal')) return;

	dialog.requestClose();
};

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
 *
 * Bails on `event.defaultPrevented`, mirroring native command activation (which a
 * consumer `preventDefault()` suppresses). Callers that also run a consumer `onClick`
 * must invoke it before this fallback so that veto is honored.
 */
export const commandForCloseFallback = (
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
	const targetElement =
		(target && dialog.ownerDocument.getElementById(target)) || null;

	// Only treat the resolved element as a dialog when it truly is one. In the
	// Angular/Stencil outputs the `display: contents` custom-element host can share
	// the consumer `id` with the nested <dialog> and precede it, so getElementById
	// may return the host - which has no requestClose(). Guarding avoids calling a
	// nonexistent method on it (and never closes the wrong element).
	const targetDialog =
		targetElement &&
		typeof (targetElement as HTMLDialogElement).requestClose === 'function'
			? (targetElement as HTMLDialogElement)
			: null;

	if (supportsCommandFor()) {
		// Native Invoker Commands work. Only step in when commandfor does not
		// resolve to a dialog (empty, a missing id, or the custom-element host),
		// so the native command is a no-op; then close the dialog the button sits
		// in. When commandfor resolves to a dialog, the native default action
		// handles it - do nothing.
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
 * Whether `dialog` is the topmost fallback-dismissible dialog: no other open,
 * non-modal `<dialog>` carrying the fallback marker comes after it in DOM order.
 * Non-modal dialogs are opened via `show()` and do not form a top-layer stack, so
 * document order is the proxy for "frontmost". Used at document scope, where an
 * Escape on an element outside every dialog would otherwise match all open
 * non-modal dialogs at once; only the topmost one should close.
 */
const isTopmostFallbackDialog = (dialog: HTMLDialogElement): boolean => {
	const openFallbackDialogs = Array.from(
		dialog.ownerDocument.querySelectorAll<HTMLDialogElement>(
			'dialog[open][data-closedby="not-supported"]'
		)
	).filter((candidate) => !candidate.matches(':modal'));

	const last = openFallbackDialogs.at(-1);
	return !last || last === dialog;
};

/**
 * @public
 * Dismisses a non-modal dialog on Escape when the browser ignores
 * `closedby="closerequest"`. Modal dialogs (opened via showModal) close on
 * Escape natively, so this only steps in for non-modal ones (backdrop="none",
 * opened via show). No-op when closedby is supported, the key is not Escape, or
 * the event was already canceled (a consumer handler ran first and vetoed it).
 *
 * Registered at document scope (via DocumentKeydownListener) while the dialog is
 * open: a non-modal dialog does not trap focus, so an Escape can be dispatched to
 * an element outside the dialog and would never reach an element-scoped listener.
 * Shared by DBDialog and DBDrawer.
 */
export const escapeCloseFallback = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	event: any,
	dialog?: HTMLDialogElement | null
): void => {
	if (!dialog || supportsClosedBy()) return;
	if (event?.key !== 'Escape') return;

	// The document listener lives for the dialog's mounted lifetime; do nothing
	// while it is closed.
	if (!dialog.open) return;

	// Honor a canceled keydown: a consumer handler that runs first and calls
	// preventDefault() vetoes the dismissal, so the fallback must not close either.
	if (event?.defaultPrevented) return;

	// Modal dialogs already dismiss on Escape natively; only non-modal ones need help.
	if (dialog.matches?.(':modal')) return;

	// When the Escape lands inside a dialog, only the dialog it lands in should
	// close (the browser handles a nested modal itself; a nested non-modal has its
	// own document listener). When it lands outside every dialog, only the topmost
	// open non-modal fallback dialog should close - otherwise every open one would.
	const targetDialog = (event?.target as HTMLElement)?.closest?.('dialog');
	if (targetDialog) {
		if (targetDialog !== dialog) return;
	} else if (!isTopmostFallbackDialog(dialog)) {
		return;
	}

	dialog.requestClose();
};

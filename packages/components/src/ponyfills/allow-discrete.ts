/**
 * TODO: Remove this file once Firefox ships `allow-discrete` for `display`
 * (https://bugzilla.mozilla.org/show_bug.cgi?id=1882408) and Safari supports
 * `overlay` transitions. Replace all `closeDialogWithTransition()` calls with
 * direct `dialog.close()`.
 *
 * This module provides a ponyfill for browsers that do not support transitioning
 * `display` and/or `overlay` with `transition-behavior: allow-discrete`
 * (currently Firefox and Safari). Used by the drawer to animate dialog exit
 * transitions.
 *
 * Architecture:
 * - `supportsAllowDiscreteDisplayAndOverlayTransition()` — cached feature
 *   detection (checks both `display` transition and `overlay` support)
 * - `closeDialogWithTransition(dialog, dialogOpen)` — when closing: if
 *   supported natively, calls `close()` immediately; otherwise sets
 *   `data-closing-allow-discrete-ponyfill` on the dialog, waits
 *   `--db-transition-duration`, then calls `close()`.
 *   When opening: cancels any pending ponyfill close.
 *
 * CSS contract:
 * - `.db-drawer` defines `--db-transition-duration` (`0ms` default,
 *   real value under `prefers-reduced-motion: no-preference`); the ponyfill
 *   reads this custom property via `getComputedStyle`
 * - `&[open]:not([data-closing-allow-discrete-ponyfill])` controls
 *   `transform: none` — when the attribute is present, the transform reverts
 *   to the off-screen value, triggering the exit animation while the dialog
 *   is still [open]
 *
 * Maintenance constraints:
 * - The attribute name `data-closing-allow-discrete-ponyfill` must stay in
 *   sync between JS (`dataset['closingAllowDiscretePonyfill']`) and CSS
 *   (`[data-closing-allow-discrete-ponyfill]`)
 * - The custom property `--db-transition-duration` must stay in sync
 *   between the SCSS declaration and the JS `getPropertyValue` call
 */

import { delay } from '../utils/index';

let closeAttemptCounter = 0;

/**
 * @internal
 * Feature-detects whether the browser supports transitioning the `display`
 * and `overlay` properties when `transition-behavior: allow-discrete` is set.
 * Both are required for a complete dialog exit animation:
 * - `display` transitioning keeps the element visible during the exit
 * - `overlay` transitioning keeps it in the top layer (preserving the backdrop)
 *
 * Returns false during SSR or before document.body is available.
 * Result is cached after the first successful call.
 */
export const _supportsAllowDiscreteDisplayAndOverlayTransition = (() => {
	let cachedValue: boolean | undefined;
	return () => {
		if (cachedValue === undefined) {
			if (typeof document === 'undefined' || !document.body) {
				return false;
			}
			const div = document.createElement('div');
			div.style.transition = 'display 1s allow-discrete';
			document.body.append(div);
			const cs = getComputedStyle(div);
			cs.display;
			div.style.display = 'none';
			const supportsDisplay = cs.display !== 'none';
			const supportsOverlay = CSS.supports('overlay', 'auto');
			cachedValue = supportsDisplay && supportsOverlay;
			div.remove();
		}

		return cachedValue;
	};
})();

/**
 * @internal
 * Handles dialog open/close transitions for browsers that don't support
 * `allow-discrete` for `display` and `overlay`.
 *
 * When `dialogOpen` is false: sets `data-closing-allow-discrete-ponyfill` on
 * the dialog to signal CSS to revert the transform, then defers `onClose`.
 * In browsers with native support, calls `onClose` immediately.
 *
 * When `dialogOpen` is true: cancels any pending ponyfill close by removing
 * the dataset attribute.
 *
 * Reads `--db-transition-duration` from the dialog as the contract
 * between CSS and JS for the transition timing.
 *
 * @param dialog - The dialog element
 * @param dialogOpen - Whether the dialog should be open
 * @param onClose - Callback to execute when the dialog should close (typically `() => dialog.close()`)
 */
export const _closeDialogWithTransition = (
	dialog: HTMLDialogElement,
	dialogOpen: boolean,
	onClose: () => void
): void => {
	if (dialogOpen) {
		// Cancel any pending ponyfill close if reopened
		delete dialog.dataset['closingAllowDiscretePonyfill'];
		return;
	}

	if (_supportsAllowDiscreteDisplayAndOverlayTransition()) {
		onClose();
		return;
	}

	const durationStr = getComputedStyle(dialog)
		.getPropertyValue('--db-transition-duration')
		.trim();
	const ms = durationStr.includes('ms')
		? parseFloat(durationStr)
		: parseFloat(durationStr || '0') * 1000;

	const token = String(++closeAttemptCounter);
	dialog.dataset['closingAllowDiscretePonyfill'] = token;
	void delay(() => {
		// Guard: skip if the dialog was reopened or a newer close attempt
		// replaced this one.
		if (dialog.dataset['closingAllowDiscretePonyfill'] !== token) {
			return;
		}
		delete dialog.dataset['closingAllowDiscretePonyfill'];
		onClose();
	}, ms);
};

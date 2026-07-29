/**
 * TODO: Remove this file after Firefox has fixed `transition-behaviour: allow-discrete`
 * support for the `display` property and just use `_ref?.close();` directly in the including file:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1882408
 *
 * This module provides a ponyfill for browsers that do not support transitioning
 * `display` with `transition-behavior: allow-discrete`. It defers `dialog.close()`
 * and signals CSS to revert the transform (triggering the exit animation) while
 * the dialog is still open.
 */

import { delay } from './index';

/**
 * @public
 * Feature-detects whether the browser supports transitioning the `display`
 * and `overlay` properties when `transition-behavior: allow-discrete` is set.
 * Both are required for a complete dialog exit animation:
 * - `display` transitioning keeps the element visible during the exit
 * - `overlay` transitioning keeps it in the top layer (preserving the backdrop)
 *
 * Returns false during SSR or before document.body is available.
 * Result is cached after the first successful call.
 */
export const supportsAllowDiscreteDisplayAndOverlayTransition = (() => {
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
 * @public
 * Closes a dialog with a deferred `close()` call, allowing the CSS exit
 * transition to play in browsers that don't support `allow-discrete` for
 * `display`. Sets `data-closing-allow-discrete-ponyfill` on the dialog to
 * signal CSS to revert the transform while the dialog is still [open].
 *
 * In browsers that support `allow-discrete` for `display`, calls `close()`
 * immediately and lets native CSS handle the exit animation.
 *
 * @param dialog - The dialog element to close
 */
export const closeDialogWithTransition = (dialog: HTMLDialogElement): void => {
	if (supportsAllowDiscreteDisplayAndOverlayTransition()) {
		dialog.close();
		return;
	}

	const styles = getComputedStyle(dialog);
	const properties = styles
		.getPropertyValue('transition-property')
		.split(',');
	const durations = styles.getPropertyValue('transition-duration').split(',');
	const delays = styles.getPropertyValue('transition-delay').split(',');

	// Find the duration + delay for the `display` transition specifically.
	// CSS precedence: a later explicit `display` overrides an earlier `all`.
	let displayIndex = -1;
	for (let i = properties.length - 1; i >= 0; i--) {
		const prop = properties[i].trim();
		if (prop === 'display') {
			displayIndex = i;
			break;
		}
		if (prop === 'all' && displayIndex < 0) {
			displayIndex = i;
		}
	}

	const parseCssTime = (str: string | undefined): number => {
		const trimmed = (str || '0s').trim();
		return trimmed.includes('ms')
			? parseFloat(trimmed)
			: parseFloat(trimmed) * 1000;
	};

	const duration = parseCssTime(
		displayIndex >= 0
			? durations[displayIndex % durations.length]
			: durations[0]
	);
	const delayMs = parseCssTime(
		displayIndex >= 0 ? delays[displayIndex % delays.length] : delays[0]
	);
	const ms = duration + delayMs;

	const token = String(Date.now());
	dialog.dataset['closingAllowDiscretePonyfill'] = token;
	void delay(() => {
		// Guard: skip if the dialog was reopened or a newer close attempt
		// replaced this one.
		if (dialog.dataset['closingAllowDiscretePonyfill'] !== token) {
			return;
		}
		delete dialog.dataset['closingAllowDiscretePonyfill'];
		dialog.close();
	}, ms);
};

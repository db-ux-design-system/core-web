/**
 * TODO: Remove this file after Firefox has fixed `transition-behaviour: allow-discrete`
 * support for the `display` property and just use `_ref?.close();` directly in the including file:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1882408
 *
 * This module provides a polyfill for browsers that do not support transitioning
 * `display` with `transition-behavior: allow-discrete`. It defers `dialog.close()`
 * and signals CSS to revert the transform (triggering the exit animation) while
 * the dialog is still open.
 */

import { delay } from './index';

/**
 * @public
 * Feature-detects whether the browser supports transitioning
 * `display` when `transition-behavior: allow-discrete` is set.
 * Result is cached after the first call.
 */
export const supportsDisplayTransition = (() => {
	let cachedValue: boolean | undefined;
	return () => {
		if (cachedValue === undefined) {
			const div = document.createElement('div');
			div.style.transition = 'display 1s allow-discrete';
			document.body.append(div);
			const cs = getComputedStyle(div);
			cs.display;
			div.style.display = 'none';
			cachedValue = cs.display !== 'none';
			div.remove();
		}

		return cachedValue;
	};
})();

/**
 * @public
 * Closes a dialog with a deferred `close()` call, allowing the CSS exit
 * transition to play in browsers that don't support `allow-discrete` for
 * `display`. Sets `data-closing-allow-discrete-polyfill` on the dialog to
 * signal CSS to revert the transform while the dialog is still [open].
 *
 * In browsers that support `allow-discrete` for `display`, calls `close()`
 * immediately and lets native CSS handle the exit animation.
 *
 * @param dialog - The dialog element to close
 */
export const closeDialogWithTransition = (dialog: HTMLDialogElement): void => {
	if (supportsDisplayTransition()) {
		dialog.close();
		return;
	}

	const durationStr = getComputedStyle(dialog).getPropertyValue(
		'transition-duration'
	);
	const ms = durationStr.includes('ms')
		? parseFloat(durationStr)
		: parseFloat(durationStr) * 1000;

	dialog.dataset['closingAllowDiscretePolyfill'] = '';
	void delay(() => {
		delete dialog.dataset['closingAllowDiscretePolyfill'];
		dialog.close();
	}, ms);
};

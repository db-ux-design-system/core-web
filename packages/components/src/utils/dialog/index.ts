/**
 * @public
 * Keeps the open state of a native `<dialog>` element in sync with a requested state.
 * Calls `showModal()`, `show()` or `close()` only when the current state differs from
 * the requested one. A requested state of `undefined`/`null` leaves the element unchanged.
 *
 * @param dialog The `<dialog>` element, may be unresolved
 * @param open The requested open state, already converted via `getBoolean`
 * @param notModal `true` opens the dialog via `show()` instead of `showModal()`
 */
export const syncDialogOpenState = (
	dialog?: HTMLDialogElement | null,
	open?: boolean,
	notModal?: boolean
): void => {
	if (!dialog || open === undefined || open === null) return;

	if (open && !dialog.open) {
		if (notModal) {
			dialog.show();
		} else {
			dialog.showModal();
		}
	} else if (!open && dialog.open) {
		dialog.close();
	}
};

/**
 * @public
 * Resolves the closest `<dialog>` ancestor of an element without modifying it.
 */
export const resolveClosestDialog = (
	element?: HTMLElement | null
): HTMLDialogElement | undefined =>
	(element?.closest?.('dialog') as HTMLDialogElement | null) ?? undefined;

/**
 * @public
 * Returns the `id` of the closest `<dialog>` ancestor, or `undefined` when there is
 * no such ancestor or its `id` is empty.
 */
export const getClosestDialogId = (
	element?: HTMLElement | null
): string | undefined => resolveClosestDialog(element)?.id || undefined;

/** Splits an `aria-labelledby` value into its id tokens (whitespace-separated). */
const labelledByTokens = (value: string | null): string[] =>
	value ? value.split(/\s+/).filter(Boolean) : [];

/**
 * @public
 * Adds the header's heading id to the dialog's `aria-labelledby` token list so
 * the visible heading is always part of the accessible name, while preserving any
 * ids the consumer added (`aria-labelledby` is a space-separated list of one or
 * more referenced elements). The heading id is appended once (idempotent), so a
 * consumer value composes with it rather than being clobbered. A consumer who
 * wants to override the name entirely can still set `aria-label`, which wins over
 * `aria-labelledby` in the accessible-name computation.
 */
export const setDialogAriaLabelledBy = (
	dialog: HTMLDialogElement | undefined | null,
	headingId: string | undefined
): void => {
	if (!headingId || !dialog) {
		return;
	}
	const tokens = labelledByTokens(dialog.getAttribute('aria-labelledby'));
	if (!tokens.includes(headingId)) {
		tokens.push(headingId);
		dialog.setAttribute('aria-labelledby', tokens.join(' '));
	}
};

/**
 * @public
 * Removes only the header's heading id from the dialog's `aria-labelledby` token
 * list, leaving any consumer-supplied ids intact; clears the attribute entirely
 * when no tokens remain. Takes the dialog element resolved at mount (held in the
 * header's state) rather than re-resolving it, so cleanup works even when the
 * header is already detached from the DOM (e.g. during React effect cleanup) and
 * regardless of whether the dialog has an `id`.
 */
export const removeDialogAriaLabelledBy = (
	dialog: HTMLDialogElement | undefined | null,
	headingId: string | undefined
): void => {
	if (!headingId || !dialog) {
		return;
	}
	const tokens = labelledByTokens(
		dialog.getAttribute('aria-labelledby')
	).filter((token) => token !== headingId);
	if (tokens.length > 0) {
		dialog.setAttribute('aria-labelledby', tokens.join(' '));
	} else {
		dialog.removeAttribute('aria-labelledby');
	}
};

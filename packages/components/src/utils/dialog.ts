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

/**
 * @public
 * Sets `aria-labelledby` on a `<dialog>` element, overwriting any existing value.
 */
export const setDialogAriaLabelledBy = (
	dialog: HTMLDialogElement | undefined | null,
	headingId: string
): void => {
	dialog?.setAttribute('aria-labelledby', headingId);
};

/**
 * @public
 * Removes `aria-labelledby` from a `<dialog>` element, but only while its current
 * value equals the given heading id.
 */
export const removeDialogAriaLabelledBy = (
	dialog: HTMLDialogElement | undefined | null,
	headingId: string
): void => {
	if (dialog?.getAttribute('aria-labelledby') === headingId) {
		dialog.removeAttribute('aria-labelledby');
	}
};

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

/** Splits an `aria-labelledby` value into its id tokens (whitespace-separated). */
const labelledByTokens = (value: string | null): string[] =>
	value ? value.split(/\s+/).filter(Boolean) : [];

/**
 * @public
 * Adds the header's heading id to the dialog's `aria-labelledby` token list so
 * the visible heading is part of the accessible name, while preserving any ids the
 * consumer added (`aria-labelledby` is a space-separated list of one or more
 * referenced elements). The heading id is appended once (idempotent), so a consumer
 * value composes with it rather than being clobbered.
 *
 * Keeps the reference out of the way when the consumer set an explicit
 * `aria-label`: the accessible-name computation evaluates `aria-labelledby` before
 * `aria-label`, so our reference would win and silently defeat the label. While an
 * `aria-label` is present it removes only our own token (leaving consumer ids), and
 * adds it back once the label is cleared - so the naming override works whether the
 * `aria-label` was set before mount or added dynamically afterwards.
 */
export const setDialogAriaLabelledBy = (
	dialog: HTMLDialogElement | undefined | null,
	headingId: string | undefined
): void => {
	if (!headingId || !dialog) {
		return;
	}
	// A consumer aria-label is a deliberate name override; drop our own token so
	// our higher-precedence aria-labelledby reference cannot override it. This must
	// remove a token added at mount, not just skip adding one, because the label
	// may be added after the header mounted.
	if (dialog.getAttribute('aria-label')) {
		removeDialogAriaLabelledBy(dialog, headingId);
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
	const existing = labelledByTokens(dialog.getAttribute('aria-labelledby'));
	const tokens = existing.filter((token) => token !== headingId);
	// Our token was not present: nothing to remove. Skip the write so a re-run
	// (e.g. the aria-label observer firing) cannot rewrite the same value and
	// re-trigger the observer in a loop.
	if (tokens.length === existing.length) {
		return;
	}
	if (tokens.length > 0) {
		dialog.setAttribute('aria-labelledby', tokens.join(' '));
	} else {
		dialog.removeAttribute('aria-labelledby');
	}
};

/**
 * @public
 * Points the dialog's own request-close button at the dialog via `commandfor`,
 * so the native command resolves to the correct element even when the consumer
 * supplied no `id` (the dialog then carries a generated one). Wired from the
 * dialog/drawer rather than the header, which mounts before the dialog id is set.
 * No-op until both the dialog and its close button are resolved.
 *
 * DBDialog / DBDrawer call this from BOTH `onMount` and the effect on `_id`, and
 * both calls are required - they are not a redundant double-wire. The `onMount`
 * call covers Vue and Stencil, whose watchers (`watch`, `@Watch`) are lazy and do
 * not fire for the initial `_id` transition on mount; the `_id` effect covers
 * React (whose effect runs on mount) and every later id change. Being idempotent,
 * the extra call on React mount is a harmless no-op, so do not "optimize" either
 * call away - dropping the `onMount` one leaves Vue/Stencil unwired at mount
 * (the close button gets no `commandfor`).
 */
export const connectCloseButton = (dialog?: HTMLDialogElement | null): void => {
	const id = dialog?.id;
	if (!dialog || !id) {
		return;
	}
	const button = dialog.querySelector('[command="request-close"]');
	if (button && button.getAttribute('commandfor') !== id) {
		button.setAttribute('commandfor', id);
	}
};

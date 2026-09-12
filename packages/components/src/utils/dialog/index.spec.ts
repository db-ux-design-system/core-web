import { describe, expect, it } from 'vitest';
import {
	getClosestDialogId,
	removeDialogAriaLabelledBy,
	resolveClosestDialog,
	setDialogAriaLabelledBy,
	syncDialogOpenState
} from '.';

type DialogStub = HTMLDialogElement & {
	_calls: string[];
	_attributes: Record<string, string>;
};

const createDialogStub = ({
	open = false,
	id = ''
}: { open?: boolean; id?: string } = {}): DialogStub => {
	const calls: string[] = [];
	const attributes: Record<string, string> = {};

	return {
		open,
		id,
		_calls: calls,
		_attributes: attributes,
		showModal: () => calls.push('showModal'),
		show: () => calls.push('show'),
		close: () => calls.push('close'),
		setAttribute: (name: string, value: string) => {
			attributes[name] = value;
		},
		getAttribute: (name: string) => attributes[name] ?? null,
		removeAttribute: (name: string) => {
			delete attributes[name]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
		}
	} as unknown as DialogStub;
};

const createElementStub = (dialog?: DialogStub): HTMLElement =>
	({
		closest: (selector: string) =>
			selector === 'dialog' ? (dialog ?? null) : null
	}) as unknown as HTMLElement;

describe('syncDialogOpenState', () => {
	it('opens a closed dialog modally and closes an open dialog', () => {
		const closed = createDialogStub();
		syncDialogOpenState(closed, true);
		expect(closed._calls).toEqual(['showModal']);

		const nonModal = createDialogStub();
		syncDialogOpenState(nonModal, true, true);
		expect(nonModal._calls).toEqual(['show']);

		const opened = createDialogStub({ open: true });
		syncDialogOpenState(opened, false);
		expect(opened._calls).toEqual(['close']);
	});

	it('does nothing for an unresolved element, an undefined state or an unchanged state', () => {
		expect(() => syncDialogOpenState(undefined, true)).not.toThrow();
		expect(() => syncDialogOpenState(null, false)).not.toThrow();

		const dialog = createDialogStub({ open: true });
		syncDialogOpenState(dialog, undefined);
		syncDialogOpenState(dialog, null as unknown as boolean);
		syncDialogOpenState(dialog, true);
		expect(dialog._calls).toEqual([]);
	});
});

describe('resolveClosestDialog', () => {
	it('returns the closest dialog ancestor', () => {
		const dialog = createDialogStub({ id: 'my-dialog' });
		expect(resolveClosestDialog(createElementStub(dialog))).toBe(dialog);
	});

	it('returns undefined without a dialog ancestor or an unresolved element', () => {
		expect(resolveClosestDialog(createElementStub())).toBeUndefined();
		expect(resolveClosestDialog(undefined)).toBeUndefined();
		expect(resolveClosestDialog({} as HTMLElement)).toBeUndefined();
	});
});

describe('getClosestDialogId', () => {
	it('returns the id of the closest dialog ancestor', () => {
		expect(
			getClosestDialogId(createElementStub(createDialogStub({ id: 'a' })))
		).toBe('a');
	});

	it('returns undefined for an empty id or a missing dialog ancestor', () => {
		expect(
			getClosestDialogId(createElementStub(createDialogStub({ id: '' })))
		).toBeUndefined();
		expect(getClosestDialogId(createElementStub())).toBeUndefined();
	});
});

describe('setDialogAriaLabelledBy', () => {
	it('sets the heading id when no aria-labelledby exists yet', () => {
		const dialog = createDialogStub();
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('heading-1');
	});

	it('re-applies its own heading id (idempotent)', () => {
		const dialog = createDialogStub();
		setDialogAriaLabelledBy(dialog, 'heading-1');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('heading-1');
	});

	it('never clobbers a consumer-supplied aria-labelledby', () => {
		// aria-labelledby is a supported pass-through attribute; an explicit
		// consumer value must win over the header's generated heading id.
		const dialog = createDialogStub();
		dialog.setAttribute('aria-labelledby', 'consumer-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('consumer-label');
	});

	it('does not throw for an unresolved dialog', () => {
		expect(() =>
			setDialogAriaLabelledBy(undefined, 'heading-1')
		).not.toThrow();
		expect(() => setDialogAriaLabelledBy(null, 'heading-1')).not.toThrow();
	});

	it('leaves aria-labelledby unset for an undefined heading id', () => {
		// The heading id is undefined until the client assigns it on mount
		// (hydration-stable). No id must never write an empty reference.
		const dialog = createDialogStub();
		setDialogAriaLabelledBy(dialog, undefined);
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
	});
});

describe('removeDialogAriaLabelledBy', () => {
	it('removes the attribute while it equals the heading id', () => {
		const dialog = createDialogStub({ id: 'my-dialog' });
		setDialogAriaLabelledBy(dialog, 'heading-1');
		removeDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
	});

	it('removes the attribute for a dialog without an id', () => {
		// The bug this guards: a drawer with no `id` still gets aria-labelledby
		// set, so cleanup must work off the element, not a (missing) id.
		const dialog = createDialogStub();
		setDialogAriaLabelledBy(dialog, 'heading-1');
		removeDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
	});

	it('leaves a foreign or absent value untouched', () => {
		const dialog = createDialogStub({ id: 'my-dialog' });
		setDialogAriaLabelledBy(dialog, 'foreign-id');
		removeDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('foreign-id');

		expect(() =>
			removeDialogAriaLabelledBy(undefined, 'heading-1')
		).not.toThrow();
		expect(() =>
			removeDialogAriaLabelledBy(null, 'heading-1')
		).not.toThrow();
	});

	it('leaves the attribute untouched for an undefined heading id', () => {
		// If the component unmounts before the client assigned the heading id,
		// cleanup must be a no-op rather than stripping a foreign value.
		const dialog = createDialogStub({ id: 'my-dialog' });
		setDialogAriaLabelledBy(dialog, 'foreign-id');
		removeDialogAriaLabelledBy(dialog, undefined);
		expect(dialog.getAttribute('aria-labelledby')).toBe('foreign-id');
	});

	it('preserves a consumer value across a conditional header lifecycle', () => {
		// Consumer supplies aria-labelledby, a conditional header mounts (set is
		// skipped) then unmounts (remove is a no-op); the consumer value stays.
		const dialog = createDialogStub({ id: 'my-dialog' });
		dialog.setAttribute('aria-labelledby', 'consumer-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		removeDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('consumer-label');
	});
});

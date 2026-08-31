import { describe, expect, it, vi } from 'vitest';
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
			getClosestDialogId(
				createElementStub(createDialogStub({ id: '' }))
			)
		).toBeUndefined();
		expect(getClosestDialogId(createElementStub())).toBeUndefined();
	});
});

describe('setDialogAriaLabelledBy', () => {
	it('overwrites any existing aria-labelledby value', () => {
		const dialog = createDialogStub();
		setDialogAriaLabelledBy(dialog, 'heading-1');
		setDialogAriaLabelledBy(dialog, 'heading-2');
		expect(dialog._attributes['aria-labelledby']).toBe('heading-2');
	});

	it('does not throw for an unresolved dialog', () => {
		expect(() =>
			setDialogAriaLabelledBy(undefined, 'heading-1')
		).not.toThrow();
		expect(() => setDialogAriaLabelledBy(null, 'heading-1')).not.toThrow();
	});
});

describe('removeDialogAriaLabelledBy', () => {
	it('removes the attribute while it equals the heading id', () => {
		const dialog = createDialogStub({ id: 'my-dialog' });
		setDialogAriaLabelledBy(dialog, 'heading-1');
		vi.stubGlobal('document', { getElementById: () => dialog });
		removeDialogAriaLabelledBy('my-dialog', 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
		vi.unstubAllGlobals();
	});

	it('leaves a foreign or absent value untouched', () => {
		const dialog = createDialogStub({ id: 'my-dialog' });
		setDialogAriaLabelledBy(dialog, 'foreign-id');
		vi.stubGlobal('document', { getElementById: () => dialog });
		removeDialogAriaLabelledBy('my-dialog', 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('foreign-id');
		vi.unstubAllGlobals();

		expect(() =>
			removeDialogAriaLabelledBy('', 'heading-1')
		).not.toThrow();
		expect(() =>
			removeDialogAriaLabelledBy(undefined, 'heading-1')
		).not.toThrow();
		expect(() =>
			removeDialogAriaLabelledBy(null, 'heading-1')
		).not.toThrow();
	});
});

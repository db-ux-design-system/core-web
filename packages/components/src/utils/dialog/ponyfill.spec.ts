import { afterEach, describe, expect, it, vi } from 'vitest';

// The detections cache their result at module level, so every scenario needs a
// fresh module instance.
const loadPonyfill = async (): Promise<typeof import('./ponyfill')> => {
	vi.resetModules();
	return import('./ponyfill');
};

const stubClosedBySupport = (supported: boolean): void => {
	vi.stubGlobal('HTMLDialogElement', {
		prototype: supported ? { closedBy: '' } : {}
	});
};

const stubCommandForSupport = (supported: boolean): void => {
	vi.stubGlobal('HTMLButtonElement', {
		prototype: supported ? { commandForElement: null } : {}
	});
};

type DialogStub = HTMLDialogElement & { _calls: string[]; _modal: boolean };

// Shared registry so a dialog stub's ownerDocument.getElementById can resolve
// other stubs by id, mirroring how requestCloseFallback resolves commandfor.
let dialogRegistry: Record<string, DialogStub> = {};

const createDialogStub = (id = 'test-dialog', modal = false): DialogStub => {
	const stub = {
		id,
		dataset: {},
		_calls: [],
		_modal: modal,
		ownerDocument: {
			getElementById: (lookup: string) => dialogRegistry[lookup] ?? null
		},
		requestClose(this: DialogStub) {
			this._calls.push('requestClose');
		},
		matches(this: DialogStub, selector: string) {
			return selector === ':modal' ? this._modal : false;
		}
	} as unknown as DialogStub;
	if (id) {
		dialogRegistry[id] = stub;
	}
	return stub;
};

const createClickEvent = (
	commandfor?: string | null,
	withButton = true,
	closestDialog?: DialogStub
): unknown => ({
	target: {
		closest: (selector: string) =>
			withButton && selector === '[command="request-close"]'
				? {
						getAttribute: () => commandfor ?? null,
						closest: (s: string) =>
							s === 'dialog' ? (closestDialog ?? null) : null
					}
				: null
	}
});

afterEach(() => {
	vi.unstubAllGlobals();
	dialogRegistry = {};
});

describe('supportsClosedBy', () => {
	it('reports support when the attribute exists on the prototype', async () => {
		stubClosedBySupport(true);
		const { supportsClosedBy } = await loadPonyfill();
		expect(supportsClosedBy()).toBe(true);
	});

	it('reports no support when the evaluation throws', async () => {
		vi.stubGlobal('HTMLDialogElement', 1);
		const { supportsClosedBy } = await loadPonyfill();
		expect(supportsClosedBy()).toBe(false);
	});

	it('keeps the first result for every following call', async () => {
		stubClosedBySupport(true);
		const { supportsClosedBy } = await loadPonyfill();
		expect(supportsClosedBy()).toBe(true);
		stubClosedBySupport(false);
		expect(supportsClosedBy()).toBe(true);
	});
});

describe('supportsCommandFor', () => {
	it('reports support when commandForElement exists on the prototype', async () => {
		stubCommandForSupport(true);
		const { supportsCommandFor } = await loadPonyfill();
		expect(supportsCommandFor()).toBe(true);
	});

	it('reports no support without the global', async () => {
		const { supportsCommandFor } = await loadPonyfill();
		expect(supportsCommandFor()).toBe(false);
	});
});

describe('markClosedByFallback', () => {
	it('marks the dialog without native closedby support', async () => {
		stubClosedBySupport(false);
		const { markClosedByFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		markClosedByFallback(dialog);
		expect(dialog.dataset['closedby']).toBe('not-supported');
	});

	it('leaves the attribute absent with support and does not throw without a dialog', async () => {
		stubClosedBySupport(true);
		const { markClosedByFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		markClosedByFallback(dialog);
		expect(dialog.dataset['closedby']).toBeUndefined();
		expect(() => markClosedByFallback(undefined)).not.toThrow();
		expect(() => markClosedByFallback(null)).not.toThrow();
	});
});

describe('requestCloseFallback', () => {
	it('does nothing when the click was canceled via preventDefault', async () => {
		stubCommandForSupport(false);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(
			{
				...(createClickEvent('test-dialog', true, dialog) as object),
				defaultPrevented: true
			},
			dialog
		);
		expect(dialog._calls).toEqual([]);
	});

	it('closes the dialog when Invoker Commands are unsupported', async () => {
		stubCommandForSupport(false);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(
			createClickEvent('test-dialog', true, dialog),
			dialog
		);
		expect(dialog._calls).toEqual(['requestClose']);
	});

	it('closes the closest dialog when commandfor does not resolve', async () => {
		stubCommandForSupport(true);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(
			createClickEvent('stale-id', true, dialog),
			dialog
		);
		expect(dialog._calls).toEqual(['requestClose']);
	});

	it('stays out of the way with native support and a resolvable commandfor', async () => {
		stubCommandForSupport(true);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(
			createClickEvent('test-dialog', true, dialog),
			dialog
		);
		expect(dialog._calls).toEqual([]);
	});

	// A request-close button sits in dialog A but intentionally targets dialog B.
	// Runs the fallback with the given commandFor support and returns both dialogs.
	const runCrossTargetClick = async (
		supported: boolean
	): Promise<{ dialogA: DialogStub; dialogB: DialogStub }> => {
		stubCommandForSupport(supported);
		const { requestCloseFallback } = await loadPonyfill();
		const dialogA = createDialogStub('dialog-a');
		const dialogB = createDialogStub('dialog-b');
		requestCloseFallback(
			createClickEvent('dialog-b', true, dialogA),
			dialogA
		);
		return { dialogA, dialogB };
	};

	it('leaves both dialogs to the native command when commandfor targets another dialog (supported)', async () => {
		const { dialogA, dialogB } = await runCrossTargetClick(true);
		expect(dialogA._calls).toEqual([]);
		expect(dialogB._calls).toEqual([]);
	});

	it('closes the commandfor target, not the surrounding dialog, when unsupported', async () => {
		const { dialogA, dialogB } = await runCrossTargetClick(false);
		expect(dialogA._calls).toEqual([]);
		expect(dialogB._calls).toEqual(['requestClose']);
	});

	it('closes the closest dialog when unsupported and commandfor does not resolve', async () => {
		stubCommandForSupport(false);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub('dialog-a');
		requestCloseFallback(
			createClickEvent('missing-id', true, dialog),
			dialog
		);
		expect(dialog._calls).toEqual(['requestClose']);
	});

	it('ignores clicks outside a request-close button and an absent dialog', async () => {
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(createClickEvent(undefined, false), dialog);
		expect(dialog._calls).toEqual([]);
		expect(() =>
			requestCloseFallback(createClickEvent('test-dialog'), undefined)
		).not.toThrow();
		expect(() => requestCloseFallback({}, dialog)).not.toThrow();
	});

	it('ignores clicks from a nested dialog close button', async () => {
		stubCommandForSupport(false);
		const { requestCloseFallback } = await loadPonyfill();
		const outerDialog = createDialogStub('outer');
		const innerDialog = createDialogStub('inner');
		requestCloseFallback(
			createClickEvent('inner', true, innerDialog),
			outerDialog
		);
		expect(outerDialog._calls).toEqual([]);
	});
});

describe('escapeCloseFallback', () => {
	it('closes a non-modal dialog on Escape without closedby support', async () => {
		stubClosedBySupport(false);
		const { escapeCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub('test-dialog', false);
		escapeCloseFallback({ key: 'Escape' }, dialog);
		expect(dialog._calls).toEqual(['requestClose']);
	});

	it('leaves modal dialogs to the native Escape behavior', async () => {
		stubClosedBySupport(false);
		const { escapeCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub('test-dialog', true);
		escapeCloseFallback({ key: 'Escape' }, dialog);
		expect(dialog._calls).toEqual([]);
	});

	it('does nothing when closedby is supported', async () => {
		stubClosedBySupport(true);
		const { escapeCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub('test-dialog', false);
		escapeCloseFallback({ key: 'Escape' }, dialog);
		expect(dialog._calls).toEqual([]);
	});

	it('ignores Escape bubbling from a nested dialog', async () => {
		stubClosedBySupport(false);
		const { escapeCloseFallback } = await loadPonyfill();
		const outerDialog = createDialogStub('outer', false);
		const nestedDialog = createDialogStub('nested', false);
		// Escape originates inside the nested dialog: its closest dialog is the
		// nested one, so the outer non-modal handler must not close.
		escapeCloseFallback(
			{
				key: 'Escape',
				target: {
					closest: (selector: string) =>
						selector === 'dialog' ? nestedDialog : null
				}
			},
			outerDialog
		);
		expect(outerDialog._calls).toEqual([]);
	});

	it('ignores non-Escape keys and a missing dialog', async () => {
		stubClosedBySupport(false);
		const { escapeCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub('test-dialog', false);
		escapeCloseFallback({ key: 'Enter' }, dialog);
		expect(dialog._calls).toEqual([]);
		expect(() =>
			escapeCloseFallback({ key: 'Escape' }, undefined)
		).not.toThrow();
	});
});

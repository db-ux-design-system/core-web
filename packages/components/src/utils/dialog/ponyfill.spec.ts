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

type DialogStub = HTMLDialogElement & { _calls: string[] };

const createDialogStub = (id = 'test-dialog'): DialogStub =>
	({
		id,
		dataset: {},
		_calls: [],
		requestClose(this: DialogStub) {
			this._calls.push('requestClose');
		}
	}) as unknown as DialogStub;

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

	it('closes the dialog when commandfor is out of sync with the dialog id', async () => {
		stubCommandForSupport(true);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(
			createClickEvent('stale-id', true, dialog),
			dialog
		);
		expect(dialog._calls).toEqual(['requestClose']);
	});

	it('stays out of the way with native support and matching commandfor', async () => {
		stubCommandForSupport(true);
		const { requestCloseFallback } = await loadPonyfill();
		const dialog = createDialogStub();
		requestCloseFallback(
			createClickEvent('test-dialog', true, dialog),
			dialog
		);
		expect(dialog._calls).toEqual([]);
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

import fc from 'fast-check';
import { afterEach, describe, expect, it, vi } from 'vitest';

// The detections cache their result at module level, so every scenario needs a
// fresh module instance.
const loadPonyfill = async (): Promise<typeof import('./dialog-ponyfill')> => {
	vi.resetModules();
	return import('./dialog-ponyfill');
};

// Node has neither HTMLDialogElement nor HTMLButtonElement, so the unstubbed
// environment already represents "no support".
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
		// a non-object global makes the `in` check throw
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
		// Button's closest dialog is the inner one, but we pass the outer dialog
		requestCloseFallback(
			createClickEvent('inner', true, innerDialog),
			outerDialog
		);
		expect(outerDialog._calls).toEqual([]);
	});
});

// Feature: dialog-component, Property 21: The `request-close` fallback fires exactly when the native path cannot work
describe('Property 21: the request-close fallback fires exactly when the native path cannot work', () => {
	it('calls requestClose only when the button belongs to this dialog and the native path cannot work', async () => {
		await fc.assert(
			fc.asyncProperty(
				fc.boolean(), // Invoker Commands support
				fc.constantFrom('matching', 'stale', 'empty'), // commandfor state
				fc.boolean(), // click originated inside a request-close element
				fc.boolean(), // button belongs to this dialog (closest check)
				fc.boolean(), // dialog element resolved
				async (
					supported,
					commandforState,
					clickInside,
					belongsToThis,
					dialogResolved
				) => {
					stubCommandForSupport(supported);

					const { requestCloseFallback } = await loadPonyfill();

					const dialog = dialogResolved
						? createDialogStub('my-dialog')
						: undefined;
					const otherDialog = createDialogStub('other-dialog');

					const commandfor =
						commandforState === 'matching'
							? 'my-dialog'
							: commandforState === 'stale'
								? 'stale-id'
								: '';

					const closestDialog = belongsToThis ? dialog : otherDialog;

					const event = createClickEvent(
						commandfor || null,
						clickInside,
						closestDialog as DialogStub | undefined
					);

					requestCloseFallback(event, dialog);

					const reached =
						clickInside && dialogResolved && belongsToThis;
					const nativePathWorks =
						supported && commandfor === dialog?.id;

					expect(dialog?._calls ?? []).toEqual(
						reached && !nativePathWorks ? ['requestClose'] : []
					);
				}
			),
			{ numRuns: 100 }
		);
	});
});

// Feature: dialog-component, Property 22: The `closedby` marker appears only without native support
// The input domain is finite and small (3 detection outcomes x 3 element resolution states = 9
// cases), so this test enumerates it completely instead of sampling it with fast-check.
describe('Property 22: the closedby marker appears only without native support', () => {
	const detections = ['supported', 'unsupported', 'throwing'] as const;
	const elementStates = ['resolved', 'undefined', 'null'] as const;

	it('sets data-closedby="not-supported" exactly when the element resolves and support is missing', async () => {
		const actual: Record<string, string | undefined> = {};
		const expected: Record<string, string | undefined> = {};

		for (const detection of detections) {
			for (const element of elementStates) {
				if (detection === 'throwing') {
					// a non-object global makes the `in` check throw
					vi.stubGlobal('HTMLDialogElement', 1);
				} else {
					stubClosedBySupport(detection === 'supported');
				}

				const { markClosedByFallback } = await loadPonyfill();
				const dialog =
					element === 'resolved' ? createDialogStub() : undefined;

				expect(() =>
					markClosedByFallback(element === 'null' ? null : dialog)
				).not.toThrow();

				const label = `detection=${detection} element=${element}`;
				actual[label] = dialog?.dataset['closedby'];
				expected[label] =
					element === 'resolved' && detection !== 'supported'
						? 'not-supported'
						: undefined;

				vi.unstubAllGlobals();
			}
		}

		expect(actual).toEqual(expected);
	});
});

// Feature: dialog-component, Property 23: Feature detections are stable within a document session
// The number of calls and the mutations applied to the detected global between them are unbounded
// input, so this test samples them with fast-check.
describe('Property 23: feature detections are stable within a document session', () => {
	const detections = {
		supportsClosedBy: {
			globalName: 'HTMLDialogElement',
			supportedPrototype: { closedBy: '' }
		},
		supportsCommandFor: {
			globalName: 'HTMLButtonElement',
			supportedPrototype: { commandForElement: null }
		}
	} as const;

	type DetectionName = keyof typeof detections;

	// `absent` and `throwing` both have to report no support: a missing global short circuits the
	// check, a non-object global makes the `in` check throw.
	const detectionStates = [
		'supported',
		'unsupported',
		'absent',
		'throwing'
	] as const;

	type DetectionState = (typeof detectionStates)[number];

	const stubbedValues: Record<DetectionState, unknown> = {
		supported: undefined, // filled per detection below
		unsupported: { prototype: {} },
		absent: undefined,
		throwing: 1
	};

	const applyState = (name: DetectionName, state: DetectionState): void => {
		const { globalName, supportedPrototype } = detections[name];
		vi.stubGlobal(
			globalName,
			state === 'supported'
				? { prototype: supportedPrototype }
				: stubbedValues[state]
		);
	};

	it('returns the result of the first call for every following call, whatever the global does afterwards', async () => {
		await fc.assert(
			fc.asyncProperty(
				fc.constantFrom(
					...(Object.keys(detections) as DetectionName[])
				),
				fc.constantFrom(...detectionStates), // state at the first call
				// one mutation before each following call
				fc.array(fc.constantFrom(...detectionStates), {
					minLength: 1,
					maxLength: 6
				}),
				async (name, initialState, mutations) => {
					vi.unstubAllGlobals();
					applyState(name, initialState);

					const detect = (await loadPonyfill())[name];

					const first = detect();
					expect(typeof first).toBe('boolean');
					expect(first).toBe(initialState === 'supported');

					for (const mutation of mutations) {
						applyState(name, mutation);
						expect(detect()).toBe(first);
					}
				}
			),
			{ numRuns: 100 }
		);
	});
});

import fc from 'fast-check';
import { describe, expect, it, vi } from 'vitest';
import {
	getClosestDialogId,
	removeDialogAriaLabelledBy,
	resolveClosestDialog,
	setDialogAriaLabelledBy,
	syncDialogOpenState
} from './dialog';

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
		tagName: 'DIALOG',
		parentElement: null,
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

type ChainNode = {
	tagName: string;
	parentElement: ChainNode | null;
	closest: (selector: string) => ChainNode | null;
};

// `closest` as the DOM implements it: walk the parent chain, first tag name match wins.
const closestByTagName = function (
	this: ChainNode,
	selector: string
): ChainNode | null {
	let node: ChainNode | null = this;
	while (node) {
		if (node.tagName?.toLowerCase() === selector) return node;
		node = node.parentElement;
	}

	return null;
};

// Returns the innermost element of a chain with `depth` wrapper elements between it and
// the optional `<dialog>` ancestor, so depth 0 is a direct child of the dialog.
const createNestedElementStub = (
	depth: number,
	dialog?: DialogStub
): HTMLElement => {
	let current = (dialog as unknown as ChainNode) ?? null;

	for (let level = 0; level <= depth; level++) {
		current = {
			tagName: 'DIV',
			parentElement: current,
			closest: closestByTagName
		};
	}

	return current as unknown as HTMLElement;
};

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
		// element without `closest`, e.g. a not-yet-upgraded custom element host
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
		const dialog = createDialogStub({ id: '' });
		expect(getClosestDialogId(createElementStub(dialog))).toBeUndefined();
		expect(dialog._attributes).toEqual({});
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

		expect(() => removeDialogAriaLabelledBy('', 'heading-1')).not.toThrow();
		expect(() =>
			removeDialogAriaLabelledBy(undefined, 'heading-1')
		).not.toThrow();
		expect(() =>
			removeDialogAriaLabelledBy(null, 'heading-1')
		).not.toThrow();
	});
});

// Feature: dialog-component, Property 12: Open-state synchronisation only acts on a real state change
// The input domain is finite and small (3 element states x 4 requested states x 2 current states x
// 3 modality flags = 72 cases), so this test enumerates it completely instead of sampling it with
// fast-check: enumeration is strictly stronger than sampling here.
describe('Property 12: open-state synchronisation only acts on a real state change', () => {
	const elementStates = ['undefined', 'null', 'resolved'] as const;
	const requestedStates = [true, false, undefined, null] as const;
	const currentStates = [false, true] as const;
	const modalityFlags = [undefined, false, true] as const;

	type Combination = {
		element: (typeof elementStates)[number];
		requested: (typeof requestedStates)[number];
		current: (typeof currentStates)[number];
		notModal: (typeof modalityFlags)[number];
	};

	const label = ({ element, requested, current, notModal }: Combination) =>
		`element=${element} requested=${String(requested)} open=${current} notModal=${String(notModal)}`;

	const expectedCalls = ({
		element,
		requested,
		current,
		notModal
	}: Combination): string[] => {
		if (element !== 'resolved') return [];
		if (requested === undefined || requested === null) return [];
		if (requested && !current) return [notModal ? 'show' : 'showModal'];
		if (!requested && current) return ['close'];
		return [];
	};

	const combinations: Combination[] = elementStates.flatMap((element) =>
		requestedStates.flatMap((requested) =>
			currentStates.flatMap((current) =>
				modalityFlags.map((notModal) => ({
					element,
					requested,
					current,
					notModal
				}))
			)
		)
	);

	it('calls showModal, show, close or nothing exactly per the state change, for every combination', () => {
		expect(combinations).toHaveLength(
			elementStates.length *
				requestedStates.length *
				currentStates.length *
				modalityFlags.length
		);

		const actual: Record<string, string[]> = {};
		const expected: Record<string, string[]> = {};

		for (const combination of combinations) {
			const dialog =
				combination.element === 'resolved'
					? createDialogStub({ open: combination.current })
					: undefined;
			const element =
				combination.element === 'null' ? null : (dialog ?? undefined);

			expect(() =>
				syncDialogOpenState(
					element,
					combination.requested as boolean | undefined,
					combination.notModal
				)
			).not.toThrow();

			actual[label(combination)] = dialog?._calls ?? [];
			expected[label(combination)] = expectedCalls(combination);
		}

		expect(actual).toEqual(expected);
	});
});

// Feature: dialog-component, Property 17: The close button targets the resolved dialog id
// Nesting depth and id shape are unbounded input, so this test samples them with fast-check.
describe('Property 17: the close button targets the resolved dialog id', () => {
	const dialogIds = fc.oneof(
		fc.constant(''), // `<dialog>` without a usable id
		fc.stringMatching(/^db-dialog-[a-z0-9]{1,8}$/), // generated id shape
		fc.string({ minLength: 1 }) // consumer supplied id
	);

	it('resolves the id or undefined for every nesting depth and id, leaving the ancestor untouched', () => {
		fc.assert(
			fc.property(
				fc.nat({ max: 5 }), // wrapper elements between the header root and the `<dialog>`
				fc.boolean(), // `<dialog>` ancestor present
				dialogIds,
				(depth, hasDialog, id) => {
					const dialog = hasDialog
						? createDialogStub({ id })
						: undefined;
					const element = createNestedElementStub(depth, dialog);

					const resolvedId = getClosestDialogId(element);
					// mirrors `state._dialogId = getClosestDialogId(_ref) ?? ''` in the header
					const commandfor = resolvedId ?? '';
					const expectedId = hasDialog && id ? id : undefined;

					expect(resolveClosestDialog(element)).toBe(dialog);
					expect(resolvedId).toBe(expectedId);
					expect(commandfor).toBe(expectedId ?? '');
					// the resolution is read-only
					expect(dialog?._attributes ?? {}).toEqual({});
					expect(dialog?._calls ?? []).toEqual([]);
					expect(dialog?.id).toBe(hasDialog ? id : undefined);
				}
			),
			{ numRuns: 200 }
		);
	});
});

// Feature: dialog-component, Property 18: `aria-labelledby` round trip leaves foreign values untouched
// Pre-existing values, heading ids and the id a later header removes with are unbounded input, so
// this test samples them with fast-check.
describe('Property 18: the aria-labelledby round trip leaves foreign values untouched', () => {
	// Small pool plus free strings, so an accidental match between the generated values
	// happens often enough to exercise both branches of the removal guard.
	const ariaValues = fc.oneof(
		fc.constantFrom(
			'db-dialog-header-1',
			'db-dialog-header-2',
			'foreign-id',
			''
		),
		fc.string()
	);
	const headingIds = fc.oneof(
		fc.constantFrom('db-dialog-header-1', 'db-dialog-header-2'),
		fc.stringMatching(/^db-dialog-header-[a-z0-9]{1,8}$/)
	);

	it('removes the attribute only while it equals the heading id, for every pre-existing and foreign value', () => {
		fc.assert(
			fc.property(
				fc.option(ariaValues, { nil: undefined }), // value a consumer set before mount
				headingIds, // generated heading id of the mounted header
				fc.option(ariaValues, { nil: undefined }), // value written by someone else before unmount
				fc.boolean(), // unmount removes with its own heading id or a foreign one
				ariaValues, // heading id of the foreign remover
				(
					preExisting,
					headingId,
					foreignWrite,
					removesOwn,
					foreignId
				) => {
					const dialog = createDialogStub({ id: 'prop18-dialog' });
					if (preExisting !== undefined) {
						dialog.setAttribute('aria-labelledby', preExisting);
					}

					expect(() =>
						setDialogAriaLabelledBy(dialog, headingId)
					).not.toThrow();
					// mount overwrites any previously present value
					expect(dialog.getAttribute('aria-labelledby')).toBe(
						headingId
					);

					if (foreignWrite !== undefined) {
						dialog.setAttribute('aria-labelledby', foreignWrite);
					}

					const currentValue = foreignWrite ?? headingId;
					const removeId = removesOwn ? headingId : foreignId;

					vi.stubGlobal('document', {
						getElementById: () => dialog
					});
					expect(() =>
						removeDialogAriaLabelledBy('prop18-dialog', removeId)
					).not.toThrow();
					vi.unstubAllGlobals();

					expect(dialog.getAttribute('aria-labelledby')).toBe(
						currentValue === removeId ? null : currentValue
					);
					// the helpers touch no other attribute
					expect(
						Object.keys(dialog._attributes).every(
							(name) => name === 'aria-labelledby'
						)
					).toBe(true);
					expect(dialog._calls).toEqual([]);
				}
			),
			{ numRuns: 300 }
		);
	});
});

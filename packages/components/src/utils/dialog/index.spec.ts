import { describe, expect, it } from 'vitest';
import {
	connectCloseButton,
	removeDialogAriaLabelledBy,
	resolveClosestDialog,
	setDialogAriaLabelledBy,
	syncDialogOpenState
} from '.';

type DialogStub = HTMLDialogElement & {
	_calls: string[];
	_attributes: Record<string, string>;
};

type ElementStub = HTMLElement & { _attributes: Record<string, string> };

const createButtonStub = (
	attributes: Record<string, string> = {}
): ElementStub =>
	({
		_attributes: attributes,
		getAttribute: (name: string) => attributes[name] ?? null,
		setAttribute: (name: string, value: string) => {
			attributes[name] = value;
		}
	}) as unknown as ElementStub;

// Minimal matcher against a stub's attributes for `.class`, `[attr]` and
// `[attr="value"]` selectors, so querySelector can honor the actual selector and
// model DOM order.
const matchesSelector = (element: ElementStub, selector: string): boolean => {
	const classMatch = /^\.([\w-]+)$/.exec(selector);
	if (classMatch) {
		const classAttr = element.getAttribute('class') ?? '';
		return classAttr.split(/\s+/).includes(classMatch[1]);
	}
	const attrMatch = /^\[([\w-]+)(?:="([^"]*)")?]$/.exec(selector);
	if (!attrMatch) return false;
	const [, name, value] = attrMatch;
	const actual = element.getAttribute(name);
	return value === undefined ? actual !== null : actual === value;
};

const createDialogStub = ({
	open = false,
	id = '',
	closeButton,
	children
}: {
	open?: boolean;
	id?: string;
	// Single built-in close button (convenience for the common case).
	closeButton?: ElementStub | null;
	// Full child list in DOM order, to model slotted controls preceding the
	// built-in close button.
	children?: ElementStub[];
} = {}): DialogStub => {
	const calls: string[] = [];
	const attributes: Record<string, string> = {};
	const childList = children ?? (closeButton ? [closeButton] : []);

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
		},
		querySelector: (selector: string) =>
			childList.find((child) => matchesSelector(child, selector)) ?? null
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

	it('appends the heading id to a consumer-supplied aria-labelledby', () => {
		// aria-labelledby is a space-separated token list, so the visible heading
		// composes with a consumer id rather than clobbering it.
		const dialog = createDialogStub();
		dialog.setAttribute('aria-labelledby', 'consumer-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe(
			'consumer-label heading-1'
		);
	});

	it('does not add the heading reference when the consumer set an aria-label', () => {
		// The accessible-name computation evaluates aria-labelledby before
		// aria-label, so adding our reference would win and defeat the label.
		// Leaving aria-labelledby off lets the aria-label be the naming override.
		const dialog = createDialogStub();
		dialog.setAttribute('aria-label', 'Consumer name');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
	});

	it('removes the generated token when an aria-label is added after mount', () => {
		// Dynamic path: the token is added at mount, then the consumer adds an
		// aria-label. Re-running must strip our token so the label (lower
		// precedence than aria-labelledby) actually becomes the accessible name.
		const dialog = createDialogStub();
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('heading-1');
		dialog.setAttribute('aria-label', 'Consumer name');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
	});

	it('keeps a consumer token but drops ours when an aria-label is added', () => {
		const dialog = createDialogStub();
		dialog.setAttribute('aria-labelledby', 'consumer-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		dialog.setAttribute('aria-label', 'Consumer name');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('consumer-label');
	});

	it('restores the generated token when the aria-label is cleared again', () => {
		const dialog = createDialogStub();
		dialog.setAttribute('aria-label', 'Consumer name');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBeNull();
		dialog.removeAttribute('aria-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('heading-1');
	});

	it('does not duplicate the heading id when re-applied to a token list', () => {
		const dialog = createDialogStub();
		dialog.setAttribute('aria-labelledby', 'consumer-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe(
			'consumer-label heading-1'
		);
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

	it('removes only the heading token from a shared token list', () => {
		// A consumer id and our heading coexist; cleanup strips only our token.
		const dialog = createDialogStub({ id: 'my-dialog' });
		dialog.setAttribute('aria-labelledby', 'consumer-label');
		setDialogAriaLabelledBy(dialog, 'heading-1');
		removeDialogAriaLabelledBy(dialog, 'heading-1');
		expect(dialog.getAttribute('aria-labelledby')).toBe('consumer-label');
	});

	it('leaves a foreign or absent value untouched', () => {
		const dialog = createDialogStub({ id: 'my-dialog' });
		dialog.setAttribute('aria-labelledby', 'foreign-id');
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

describe('connectCloseButton', () => {
	it('points the built-in close button at the dialog id', () => {
		const button = createButtonStub({
			'data-dialog-close-button': 'true',
			command: 'request-close'
		});
		const dialog = createDialogStub({
			id: 'my-dialog',
			closeButton: button
		});
		connectCloseButton(dialog);
		expect(button.getAttribute('commandfor')).toBe('my-dialog');
	});

	it('rewires a stale commandfor to the current dialog id', () => {
		const button = createButtonStub({
			'data-dialog-close-button': 'true',
			command: 'request-close',
			commandfor: 'old-id'
		});
		const dialog = createDialogStub({ id: 'new-id', closeButton: button });
		connectCloseButton(dialog);
		expect(button.getAttribute('commandfor')).toBe('new-id');
	});

	it('does not touch a slotted request-close control targeting another dialog', () => {
		// A consumer control in the header slot / content that intentionally
		// targets a different dialog must keep its commandfor - only the built-in
		// close button (data-dialog-close-button) may be rewired.
		const slotted = createButtonStub({
			command: 'request-close',
			commandfor: 'other-dialog'
		});
		const builtIn = createButtonStub({
			'data-dialog-close-button': 'true',
			command: 'request-close'
		});
		// slotted precedes the built-in button in DOM order.
		const dialog = createDialogStub({
			id: 'my-dialog',
			children: [slotted, builtIn]
		});
		connectCloseButton(dialog);
		expect(slotted.getAttribute('commandfor')).toBe('other-dialog');
		expect(builtIn.getAttribute('commandfor')).toBe('my-dialog');
	});

	it('does nothing when the dialog has no id, no button, or is unresolved', () => {
		const button = createButtonStub({
			'data-dialog-close-button': 'true',
			command: 'request-close'
		});
		connectCloseButton(createDialogStub({ id: '', closeButton: button }));
		expect(button.getAttribute('commandfor')).toBeNull();

		expect(() =>
			connectCloseButton(createDialogStub({ id: 'my-dialog' }))
		).not.toThrow();
		expect(() => connectCloseButton(undefined)).not.toThrow();
		expect(() => connectCloseButton(null)).not.toThrow();
	});
});

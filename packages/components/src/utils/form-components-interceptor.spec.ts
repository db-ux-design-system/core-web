import { afterEach, describe, expect, it, vi } from 'vitest';
import { addValuePropertyInterceptor } from './form-components';
import { mergeRefs } from './react';

let notifyMutation: MutationCallback | undefined;

class MockInput extends EventTarget {
	private inputType = 'date';
	private inputValue = '';
	private readonly attributes = new Map<string, string>();

	get type(): string {
		return this.inputType;
	}

	set type(type: string) {
		this.inputType = type;
		this.value = this.inputValue;
	}

	get value(): string {
		return this.inputValue;
	}

	set value(value: string) {
		const valid =
			(this.type === 'date' && /^\d{4}-\d{2}-\d{2}$/.test(value)) ||
			(this.type === 'time' && /^\d{2}:\d{2}$/.test(value));
		this.inputValue = valid ? value : '';
	}

	setAttribute(name: string, value: string): void {
		this.attributes.set(name, value);
	}

	getAttribute(name: string): string | null {
		return this.attributes.get(name) ?? null;
	}

	removeAttribute(name: string): void {
		this.attributes.delete(name);
	}

	hasAttribute(name: string): boolean {
		return this.attributes.has(name);
	}
}

afterEach(() => {
	delete (globalThis as Partial<typeof globalThis>).MutationObserver;
	notifyMutation = undefined;
});

describe('addValuePropertyInterceptor', () => {
	it('resynchronizes the value marker between date/time type changes', () => {
		vi.stubGlobal(
			'MutationObserver',
			class {
				constructor(callback: MutationCallback) {
					notifyMutation = callback;
				}

				observe() {}
				disconnect() {}
			}
		);
		const input = new MockInput();
		const controller = new AbortController();
		addValuePropertyInterceptor(
			input as unknown as HTMLInputElement,
			controller.signal
		);
		input.value = '2025-01-15';

		expect(input.getAttribute('data-has-value')).toBe('true');
		expect(input.hasAttribute('value')).toBe(false);

		input.type = 'time';
		notifyMutation?.(
			[{ attributeName: 'type' } as MutationRecord],
			{} as MutationObserver
		);

		expect(input.value).toBe('');
		expect(input.hasAttribute('data-has-value')).toBe(false);
		controller.abort();
	});

	it('supports programmatic date values assigned by replaced callback refs', () => {
		let observerCount = 0;
		vi.stubGlobal(
			'MutationObserver',
			class {
				constructor(callback: MutationCallback) {
					notifyMutation = callback;
				}

				observe() {
					observerCount++;
				}

				disconnect() {}
			}
		);
		const input = new MockInput();
		const prototypeDescriptor = Object.getOwnPropertyDescriptor(
			MockInput.prototype,
			'value'
		);
		expect(prototypeDescriptor?.get).toBeTypeOf('function');
		expect(prototypeDescriptor?.set).toBeTypeOf('function');
		const frameworkDescriptor: PropertyDescriptor = {
			configurable: true,
			enumerable: true,
			get: prototypeDescriptor?.get,
			set: prototypeDescriptor?.set
		};
		Object.defineProperty(input, 'value', frameworkDescriptor);

		const calls: string[] = [];
		const internalRef: { current: MockInput | null } = { current: input };
		const firstRef = mergeRefs(internalRef, (element) => {
			if (element) {
				calls.push('first');
				element.value = '2025-01-15';
			}
		});
		firstRef.current = input;

		const controller = new AbortController();
		addValuePropertyInterceptor(
			input as unknown as HTMLInputElement,
			controller.signal
		);
		addValuePropertyInterceptor(
			input as unknown as HTMLInputElement,
			controller.signal
		);

		expect(observerCount).toBe(1);
		expect(calls).toEqual(['first']);
		expect(input.value).toBe('2025-01-15');
		expect(input.getAttribute('data-has-value')).toBe('true');
		expect(input.hasAttribute('value')).toBe(false);

		const secondRef = mergeRefs(internalRef, (element) => {
			if (element) {
				calls.push('second');
				element.value = '2025-02-16';
			}
		});
		secondRef.current = input;

		expect(calls).toEqual(['first', 'second']);
		expect(input.value).toBe('2025-02-16');
		expect(input.getAttribute('data-has-value')).toBe('true');
		expect(input.hasAttribute('value')).toBe(false);

		input.type = 'text';
		notifyMutation?.(
			[{ attributeName: 'type' } as MutationRecord],
			{} as MutationObserver
		);

		expect(Object.getOwnPropertyDescriptor(input, 'value')).toEqual(
			frameworkDescriptor
		);
		expect(input.hasAttribute('data-has-value')).toBe(false);
		controller.abort();
	});
});

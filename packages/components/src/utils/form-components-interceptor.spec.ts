import { afterEach, describe, expect, it, vi } from 'vitest';
import { addValuePropertyInterceptor } from './form-components';

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
	it('resynchronizes the value attribute between date/time type changes', () => {
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

		expect(input.getAttribute('value')).toBe('2025-01-15');

		input.type = 'time';
		notifyMutation?.(
			[{ attributeName: 'type' } as MutationRecord],
			{} as MutationObserver
		);

		expect(input.value).toBe('');
		expect(input.hasAttribute('value')).toBe(false);
		controller.abort();
	});
});

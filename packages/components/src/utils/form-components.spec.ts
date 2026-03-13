import { describe, expect, it, vi } from 'vitest';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from './form-components';

const createInputEvent = (
	type: string,
	value: string,
	badInput: boolean,
	inputType?: string
) => ({
	type: 'input',
	inputType,
	target: {
		type,
		value,
		validity: { badInput }
	}
});

const createChangeEvent = (type: string, value: string) => ({
	type: 'change',
	target: {
		type,
		value,
		validity: { badInput: false }
	}
});

describe('handleFrameworkEventAngular', () => {
	it('calls propagateChange and writeValue for valid number input', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createInputEvent('number', '1.5', false, 'insertText');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('1.5');
		expect(component.writeValue).toHaveBeenCalledWith('1.5');
	});

	it('calls propagateChange but skips writeValue when number has badInput (intermediate state like "1.")', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createInputEvent('number', '', true, 'insertText');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange but skips writeValue on insertText with empty value (e.g. comma "," in some browsers)', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createInputEvent('number', '', false, 'insertText');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange and writeValue when number input is cleared via backspace', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createInputEvent(
			'number',
			'',
			false,
			'deleteContentBackward'
		);
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component.writeValue).toHaveBeenCalledWith('');
	});

	it('calls propagateChange and writeValue on number change event (e.g. on blur)', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createChangeEvent('number', '');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component.writeValue).toHaveBeenCalledWith('');
	});

	it('calls propagateChange but skips writeValue for date input with null value', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = {
			type: 'input',
			target: {
				type: 'date',
				value: null,
				validity: { badInput: false }
			}
		};
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith(null);
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange but skips writeValue for date input with undefined value', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = {
			type: 'input',
			target: {
				type: 'date',
				value: undefined,
				validity: { badInput: false }
			}
		};
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith(undefined);
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange and writeValue for date input with non-empty value', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createInputEvent('date', '2024-01-01', false);
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('2024-01-01');
		expect(component.writeValue).toHaveBeenCalledWith('2024-01-01');
	});

	it('calls propagateChange and writeValue for text input type', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createInputEvent('text', 'hello', false);
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('hello');
		expect(component.writeValue).toHaveBeenCalledWith('hello');
	});
});

describe('handleFrameworkEventVue', () => {
	it('emits update:value for valid number value', () => {
		const emit = vi.fn();
		const event = createInputEvent('number', '1.5', false);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', '1.5');
	});

	it('emits update:value with empty string when number input has badInput (intermediate state like "1.")', () => {
		const emit = vi.fn();
		const event = createInputEvent('number', '', true);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', '');
	});

	it('emits update:value when number input is cleared (empty, no badInput)', () => {
		const emit = vi.fn();
		const event = createInputEvent('number', '', false);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', '');
	});

	it('emits update:value for text input type', () => {
		const emit = vi.fn();
		const event = createInputEvent('text', 'hello', false);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', 'hello');
	});
});

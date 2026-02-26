import { describe, expect, it, vi } from 'vitest';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from './form-components';

const createNumberEvent = (
	value: string,
	badInput: boolean,
	inputType?: string
) => ({
	inputType,
	target: {
		type: 'number',
		value,
		validity: { badInput }
	}
});

const createTextEvent = (value: string) => ({
	target: {
		type: 'text',
		value,
		validity: { badInput: false }
	}
});

describe('handleFrameworkEventAngular', () => {
	it('calls propagateChange and writeValue for valid number value', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createNumberEvent('1.5', false);
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('1.5');
		expect(component.writeValue).toHaveBeenCalledWith('1.5');
	});

	it('calls propagateChange but skips writeValue when number input has badInput (intermediate state like "1.")', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = {
			type: 'input',
			data: '.',
			inputType: 'insertText',
			target: { type: 'number', value: '1.' }
		};
		handleFrameworkEventAngular(component, event, 'value', '1');
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange but skips writeValue when number input value is empty after insertText (e.g. comma "," in browsers where badInput stays false)', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = {
			type: 'input',
			data: ',',
			inputType: 'insertText',
			target: { type: 'number', value: '' }
		};
		handleFrameworkEventAngular(component, event, 'value', '1');
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange and writeValue when number input is cleared via backspace (deleteContentBackward)', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createNumberEvent('', false, 'deleteContentBackward');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component.writeValue).toHaveBeenCalledWith('');
	});

	it('calls propagateChange and writeValue for text input type', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createTextEvent('hello');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('hello');
		expect(component.writeValue).toHaveBeenCalledWith('hello');
	});
});

describe('handleFrameworkEventVue', () => {
	it('emits update:value for valid number value', () => {
		const emit = vi.fn();
		const event = createNumberEvent('1.5', false);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', '1.5');
	});

	it('emits update:value with empty string when number input has badInput (intermediate state like "1.")', () => {
		const emit = vi.fn();
		const event = createNumberEvent('', true);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', '');
	});

	it('emits update:value when number input is cleared (empty, no badInput)', () => {
		const emit = vi.fn();
		const event = createNumberEvent('', false);
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', '');
	});

	it('emits update:value for text input type', () => {
		const emit = vi.fn();
		const event = createTextEvent('hello');
		handleFrameworkEventVue(emit, event);
		expect(emit).toHaveBeenCalledWith('update:value', 'hello');
	});
});

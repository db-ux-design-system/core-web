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

	it('skips propagateChange and writeValue when "." is typed (intermediate state)', () => {
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

	it('skips propagateChange and writeValue when "," is typed (intermediate state)', () => {
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

	it.each(['e', 'E', '+', '-'])(
		'skips propagateChange and writeValue when "%s" is typed (intermediate state)',
		(char) => {
			const component = {
				propagateChange: vi.fn(),
				writeValue: vi.fn()
			};
			const event = {
				type: 'input',
				data: char,
				inputType: 'insertText',
				target: { type: 'number', value: '' }
			};
			handleFrameworkEventAngular(component, event, 'value', '1');
			expect(component.propagateChange).not.toHaveBeenCalled();
			expect(component.writeValue).not.toHaveBeenCalled();
		}
	);

	it('skips propagateChange and writeValue when deleting content and lastValue has decimal', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = {
			type: 'input',
			data: null,
			inputType: 'deleteContentBackward',
			target: { type: 'number', value: '' }
		};
		handleFrameworkEventAngular(component, event, 'value', '1.5');
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange and writeValue when number input is cleared via backspace (no decimal in lastValue)', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = createNumberEvent('', false, 'deleteContentBackward');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component.writeValue).toHaveBeenCalledWith('');
	});

	it('skips propagateChange and writeValue for number change events', () => {
		const component = {
			propagateChange: vi.fn(),
			writeValue: vi.fn()
		};
		const event = {
			type: 'change',
			target: { type: 'number', value: '5' }
		};
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component.writeValue).not.toHaveBeenCalled();
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

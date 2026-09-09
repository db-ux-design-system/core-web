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

const createComponent = () => ({
	propagateChange: vi.fn(),
	_setModelValue: vi.fn(),
	writeValue: vi.fn()
});

describe('handleFrameworkEventAngular', () => {
	it('calls propagateChange and _setModelValue for valid number value', () => {
		const component = createComponent();
		const event = createNumberEvent('1.5', false);
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('1.5');
		expect(component._setModelValue).toHaveBeenCalledWith('1.5');
	});

	it('never uses writeValue, which would write the value back into the element', () => {
		const component = createComponent();
		handleFrameworkEventAngular(component, createTextEvent('hello'));
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('reports an unparsable date entry as empty without writing it back to the element', () => {
		const component = createComponent();
		// The user typed 02/29/0202 on the way to 02/29/2028: no such date, so
		// the browser reports an empty value while the editor keeps the entry.
		const event = {
			type: 'input',
			target: {
				type: 'date',
				value: '',
				validity: { badInput: true }
			}
		};
		handleFrameworkEventAngular(component, event, 'value', '0020-02-29');
		// Neither form API may keep the stale valid date ...
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component._setModelValue).toHaveBeenCalledWith('');
		// ... and nothing may write that empty value back into the element,
		// which would clear the native date editor.
		expect(component.writeValue).not.toHaveBeenCalled();
	});

	it('skips propagateChange and _setModelValue when "." is typed (intermediate state)', () => {
		const component = createComponent();
		const event = {
			type: 'input',
			data: '.',
			inputType: 'insertText',
			target: { type: 'number', value: '1.' }
		};
		handleFrameworkEventAngular(component, event, 'value', '1');
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component._setModelValue).not.toHaveBeenCalled();
	});

	it('skips propagateChange and _setModelValue when "," is typed (intermediate state)', () => {
		const component = createComponent();
		const event = {
			type: 'input',
			data: ',',
			inputType: 'insertText',
			target: { type: 'number', value: '' }
		};
		handleFrameworkEventAngular(component, event, 'value', '1');
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component._setModelValue).not.toHaveBeenCalled();
	});

	it.each(['e', 'E', '+', '-'])(
		'skips propagateChange and _setModelValue when "%s" is typed (intermediate state)',
		(char) => {
			const component = createComponent();
			const event = {
				type: 'input',
				data: char,
				inputType: 'insertText',
				target: { type: 'number', value: '' }
			};
			handleFrameworkEventAngular(component, event, 'value', '1');
			expect(component.propagateChange).not.toHaveBeenCalled();
			expect(component._setModelValue).not.toHaveBeenCalled();
		}
	);

	it('skips propagateChange and _setModelValue when deleting content and lastValue has decimal', () => {
		const component = createComponent();
		const event = {
			type: 'input',
			data: null,
			inputType: 'deleteContentBackward',
			target: { type: 'number', value: '' }
		};
		handleFrameworkEventAngular(component, event, 'value', '1.5');
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component._setModelValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange and _setModelValue when number input is cleared via backspace (no decimal in lastValue)', () => {
		const component = createComponent();
		const event = createNumberEvent('', false, 'deleteContentBackward');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('');
		expect(component._setModelValue).toHaveBeenCalledWith('');
	});

	it('skips propagateChange and _setModelValue for number change events', () => {
		const component = createComponent();
		const event = {
			type: 'change',
			target: { type: 'number', value: '5' }
		};
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component._setModelValue).not.toHaveBeenCalled();
	});

	it('calls propagateChange and _setModelValue for text input type', () => {
		const component = createComponent();
		const event = createTextEvent('hello');
		handleFrameworkEventAngular(component, event);
		expect(component.propagateChange).toHaveBeenCalledWith('hello');
		expect(component._setModelValue).toHaveBeenCalledWith('hello');
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

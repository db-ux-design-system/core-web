import { describe, expect, it, vi } from 'vitest';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue,
	shouldKeepDisplayValue
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

/**
 * Regression tests for https://github.com/db-ux-design-system/core-web/issues/6092
 *
 * A number input reports the sanitized value, not the raw text: while the field
 * holds `1.` the browser reports `1`, and while it holds `1e` it reports `""`.
 * Pushing either of those into the model lets the value travel back to the
 * element and drops what the user typed -- that was the reported symptom (the
 * `1` disappearing, the caret jumping to the front).
 *
 * The guards below therefore have to keep the model untouched for every
 * intermediate entry. The `deleteContentBackward` case is the load-bearing one:
 * without it a number field cannot be cleared with Backspace at all, because
 * every deletion of the decimal separator is immediately written back.
 */
describe('handleFrameworkEventAngular: number input intermediate entries (#6092)', () => {
	it.each(['.', ','])(
		'keeps the model untouched while "%s" is being typed',
		(separator) => {
			const component = createComponent();
			handleFrameworkEventAngular(
				component,
				{
					type: 'input',
					data: separator,
					inputType: 'insertText',
					target: { type: 'number', value: '1' }
				},
				'value',
				'1'
			);
			expect(component.propagateChange).not.toHaveBeenCalled();
			expect(component._setModelValue).not.toHaveBeenCalled();
		}
	);

	it('keeps the model untouched while an exponent is being typed', () => {
		const component = createComponent();
		// `1e` is not a parsable number, so the element reports an empty value.
		handleFrameworkEventAngular(
			component,
			{
				type: 'input',
				data: 'e',
				inputType: 'insertText',
				target: {
					type: 'number',
					value: '',
					validity: { badInput: true }
				}
			},
			'value',
			'1'
		);
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component._setModelValue).not.toHaveBeenCalled();
	});

	it('keeps the model untouched when Backspace deletes into a decimal', () => {
		const component = createComponent();
		// `1.5` minus the `5` leaves `1.`, which the element reports as `1`.
		handleFrameworkEventAngular(
			component,
			{
				type: 'input',
				data: null,
				inputType: 'deleteContentBackward',
				target: { type: 'number', value: '1' }
			},
			'value',
			'1.5'
		);
		expect(component.propagateChange).not.toHaveBeenCalled();
		expect(component._setModelValue).not.toHaveBeenCalled();
	});

	it('propagates a completed decimal', () => {
		const component = createComponent();
		handleFrameworkEventAngular(
			component,
			{
				type: 'input',
				data: '5',
				inputType: 'insertText',
				target: { type: 'number', value: '1.5' }
			},
			'value',
			'1'
		);
		expect(component.propagateChange).toHaveBeenCalledWith('1.5');
		expect(component._setModelValue).toHaveBeenCalledWith('1.5');
	});
});

/**
 * Regression tests for https://github.com/db-ux-design-system/core-web/issues/6147
 * and https://github.com/db-ux-design-system/core-web/issues/7748
 *
 * `shouldKeepDisplayValue` is the only reason Angular's display value may lag
 * behind the model. #7748 needs that gap, #6147 needs it to stay shut for
 * everything else -- an `undefined` write is how consumers reset a field, and it
 * has to reach the element.
 */
describe('shouldKeepDisplayValue', () => {
	const withBadInput = (badInput: boolean) => ({ validity: { badInput } });

	it('keeps the display value while an unparsable entry is empty (#7748)', () => {
		expect(shouldKeepDisplayValue(withBadInput(true), '')).toBe(true);
		expect(shouldKeepDisplayValue(withBadInput(true), undefined)).toBe(
			true
		);
	});

	it('releases the display value once the entry parses again', () => {
		expect(shouldKeepDisplayValue(withBadInput(false), '2028-02-29')).toBe(
			false
		);
		expect(shouldKeepDisplayValue(withBadInput(true), '2028-02-29')).toBe(
			false
		);
	});

	it('never keeps the display value without badInput, so undefined resets apply (#6147)', () => {
		expect(shouldKeepDisplayValue(withBadInput(false), undefined)).toBe(
			false
		);
		expect(shouldKeepDisplayValue(withBadInput(false), '')).toBe(false);
	});

	it('does not keep the display value before the element exists', () => {
		expect(shouldKeepDisplayValue(undefined, undefined)).toBe(false);
		expect(shouldKeepDisplayValue({}, undefined)).toBe(false);
	});
});

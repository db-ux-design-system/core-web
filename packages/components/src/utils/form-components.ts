/* eslint-disable @typescript-eslint/no-explicit-any */
import { delay } from './index';

const specialNumberCharacters = ['.', ',', 'e', 'E', '+', '-'];

export const handleFrameworkEventAngular = (
	component: any,
	event: any,
	modelValue: string = 'value',
	lastValue?: any
): void => {
	const value = event.target[modelValue];
	const type = event.target?.type;

	if (
		!value &&
		value !== '' &&
		['date', 'time', 'week', 'month', 'datetime-local'].includes(type)
	) {
		// If value is empty and type date we skip `writingValue` function
		return;
	}

	if (type === 'number') {
		if (event.type === 'input') {
			if (
				specialNumberCharacters.includes(event.data) ||
				(specialNumberCharacters.some((specialCharacter) =>
					lastValue?.toString().includes(specialCharacter)
				) &&
					event.inputType === 'deleteContentBackward')
			) {
				// Skip `writingValue` function if number type and input event
				// and `.` or `,` or 'e', 'E', '+', '-' was typed
				// or content was deleted but last number had a `.`
				return;
			}
		} else if (event.type === 'change') {
			// Skip `writingValue` function if number type and change event
			return;
		}
	}
	component.propagateChange(value);
	// Model only. `writeValue` would write the value back into the element,
	// which clears the native date editor while `validity.badInput` is set.
	component._setModelValue(value);
};

/**
 * Angular renders the element from `state._value` instead of `props.value`.
 * While the browser cannot parse the current entry (`validity.badInput`, e.g.
 * `29.02.0202` on the way to `29.02.2028`) it reports `value` as an empty
 * string. Mirroring that empty value into the bound expression would write it
 * to the element and clear the native editor with everything the user typed
 * (https://github.com/db-ux-design-system/core-web/issues/7748).
 *
 * The gap is deliberately narrow: it applies only while the element itself
 * reports `badInput` **and** the incoming value is empty. Every other write
 * reaches the display value, which is what keeps a programmatic reset to
 * `undefined` working
 * (https://github.com/db-ux-design-system/core-web/issues/6147).
 *
 * @internal
 */
export const shouldKeepDisplayValue = (element: any, value: any): boolean =>
	Boolean(element?.validity?.badInput) && !value;

export const handleFrameworkEventVue = (
	emit: (event: string, ...args: any[]) => void,
	event: any,
	modelValue: string = 'value'
): void => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	emit(`update:${modelValue}`, event.target[modelValue]);
};

export const addResetEventListener = (
	element: any, // we need any here for the _dbFormResetListenerAdded property
	resetFunction: (event: Event) => void,
	signal: AbortSignal
): void => {
	if (element.form && !element._dbFormResetListenerAdded) {
		(element.form as HTMLFormElement).addEventListener(
			'reset',
			(event: Event) => {
				resetFunction(event);
			},
			{ signal }
		);
		// Mark as added to avoid duplicate listeners
		element._dbFormResetListenerAdded = true;
	}
};

export const addCheckedResetEventListener = (
	element: any,
	props: { checked?: boolean | string; defaultChecked?: boolean },
	resetFunction: (event: any) => void,
	signal: AbortSignal
): void => {
	addResetEventListener(
		element,
		(event: any) => {
			void delay(() => {
				const resetValue = props.checked
					? props.checked
					: props.defaultChecked
						? props.defaultChecked
						: element.checked;
				const valueEvent: any = {
					...event,
					target: { ...event.target, checked: resetValue }
				};
				resetFunction(valueEvent);
			}, 1);
		},
		signal
	);
};

export const addValueResetEventListener = (
	element: any,
	props: { value?: string; defaultValue?: string },
	resetFunction: (event: any) => void,
	signal: AbortSignal
): void => {
	addResetEventListener(
		element,
		(event: any) => {
			void delay(() => {
				const resetValue = props.value
					? props.value
					: props.defaultValue
						? props.defaultValue
						: element.value;
				const valueEvent: any = {
					...event,
					target: { ...event.target, value: resetValue }
				};
				resetFunction(valueEvent);
			}, 1);
		},
		signal
	);
};

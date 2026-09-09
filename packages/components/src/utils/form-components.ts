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
	// The value handled here comes from the element itself, so it must not be
	// written back into the DOM. `writeValue` does exactly that and stays
	// reserved for programmatic writes (reactive forms, ngModel). Echoing a
	// value the element already holds is a no-op at best - and destructive for
	// a date input while the browser cannot parse the current entry
	// (`validity.badInput`, e.g. a half typed date): the browser reports the
	// value as an empty string there, and assigning an empty string clears the
	// native date editor including everything the user typed so far.
	component._setModelValue(value);
};

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

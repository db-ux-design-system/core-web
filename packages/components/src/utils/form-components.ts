/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationType } from '../shared/model';
import { delay } from './index';

export const handleFrameworkEventAngular = (
	component: any,
	event: any,
	modelValue: string = 'value'
): void => {
	component.propagateChange(event.target[modelValue]);
	component.writeValue(event.target[modelValue]);
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

export const getValidationState = (
	props: { validMessage?: string; validation?: ValidationType },
	element?: HTMLElement
): ValidationType => {
	let userValid: boolean = false;
	let userInvalid: boolean = false;
	if (typeof window !== 'undefined' && element) {
		userValid =
			!!getComputedStyle(element).getPropertyValue('--db-user-valid');
		userInvalid =
			!!getComputedStyle(element).getPropertyValue('--db-user-invalid');
	}

	if (
		props.validMessage &&
		(props.validation === 'valid' || (!props.validation && userValid))
	) {
		return 'valid';
	}

	if (props.validation === 'invalid' || (!props.validation && userInvalid)) {
		return 'invalid';
	}

	return 'no-validation';
};

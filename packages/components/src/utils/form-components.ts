/* eslint-disable @typescript-eslint/no-explicit-any */
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
	resetFunction: (event: Event) => void
): void => {
	if (element.form && !element._dbFormResetListenerAdded) {
		element.form.addEventListener('reset', (event: Event) => {
			resetFunction(event);
		});
		// Mark as added to avoid duplicate listeners
		element._dbFormResetListenerAdded = true;
	}
};

export const addCheckedResetEventListener = (
	element: any,
	props: { checked?: boolean | string; defaultChecked?: boolean },
	resetFunction: (event: any) => void
): void => {
	addResetEventListener(element, (event: any) => {
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
	});
};

export const addValueResetEventListener = (
	element: any,
	props: { value?: string; defaultValue?: string },
	resetFunction: (event: any) => void
): void => {
	addResetEventListener(element, (event: any) => {
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
	});
};

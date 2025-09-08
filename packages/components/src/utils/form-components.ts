/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleFrameworkEventAngular = (
	component: any,
	event: any,
	modelValue: string = 'value'
): void => {
	// Handle user-initiated change events for Angular forms integration
	// According to Angular's ControlValueAccessor pattern:
	// - propagateChange: notifies Angular forms of view → model updates (user interactions)
	// - writeValue: should only be used for model → view updates (programmatic changes)
	// 
	// For user-initiated events, propagateChange is sufficient. Calling writeValue
	// during user events can cause double change detection cycles and redundant updates.
	component.propagateChange(event.target[modelValue]);
};

export const handleFrameworkEventVue = (
	emit: (event: string, ...args: any[]) => void,
	event: any,
	modelValue: string = 'value'
): void => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	emit(`update:${modelValue}`, event.target[modelValue]);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleFrameworkEventAngular = (
	component: any,
	event: any,
	modelValue: string = 'value'
): void => {
	// Change event to work with reactive and template driven forms
	component.propagateChange(event.target[modelValue]);
	
	// Skip writeValue for user-initiated change events on signal-based properties
	// to prevent double event firing. The propagateChange call above is sufficient
	// for notifying Angular forms of the change.
	// For signal-based properties like 'checked', the component's signal will be
	// updated through the normal Angular change detection cycle.
	const isSignalBasedProperty = modelValue === 'checked' || modelValue === 'disabled';
	if (!isSignalBasedProperty) {
		component.writeValue(event.target[modelValue]);
	}
};

export const handleFrameworkEventVue = (
	emit: (event: string, ...args: any[]) => void,
	event: any,
	modelValue: string = 'value'
): void => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	emit(`update:${modelValue}`, event.target[modelValue]);
};

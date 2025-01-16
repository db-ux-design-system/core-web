/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleFrameworkEventAngular = (
	component: any,
	event: any,
	modelValue: string = 'value'
): void => {
	// Change event to work with reactive and template driven forms
	component.propagateChange(event.target[modelValue]);
	component.writeValue(event.target[modelValue]);
};

export const handleFrameworkEventVue = (
	component: any,
	event: any,
	modelValue: string = 'value'
): void => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	component.emit(`update:${modelValue}`, event.target[modelValue]);
};

export const handleFrameworkEvent = (
	component: any,
	event: any,
	modelValue: string = 'value'
) => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	// VUE:component.$emit(`update:${modelValue}`, event.target[modelValue]);
	// Change event to work with reactive and template driven forms
	// ANGULAR: component.propagateChange(event.target[modelValue]);
	// ANGULAR: component.writeValue(event.target[modelValue]);
};

export default {
	handleFrameworkEvent
};

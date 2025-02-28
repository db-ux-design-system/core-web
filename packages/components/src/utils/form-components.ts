// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

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
	emit: (event: string, ...args: any[]) => void,
	event: any,
	modelValue: string = 'value'
): void => {
	// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
	emit(`update:${modelValue}`, event.target[modelValue]);
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookCheckboxArgTypes: Record<string, InputType> = {
	name: { control: 'text' },
	disabled: { control: 'boolean' },
	checked: { control: 'boolean' },
	indeterminate: { control: 'text' },
	validation: { control: 'text' },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	size: { control: 'text' },
	required: { control: 'boolean' },
	showLabel: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' }
};

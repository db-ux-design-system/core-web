import type { InputType } from 'storybook/internal/csf';

export const StorybookSelectArgTypes: Record<string, InputType> = {
	options: { control: 'text' },
	label: { control: 'text' },
	placeholder: { control: 'text' },
	variant: { control: 'text' },
	value: { control: 'text' },
	showLabel: { control: 'boolean' },
	message: { control: 'text' },
	showMessage: { control: 'boolean' },
	validation: { control: 'text' },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	disabled: { control: 'boolean' },
	icon: { control: 'text' },
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' }
};

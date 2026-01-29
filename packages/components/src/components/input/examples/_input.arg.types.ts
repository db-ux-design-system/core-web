import type { InputType } from 'storybook/internal/csf';

export const StorybookInputArgTypes: Record<string, InputType> = {
	label: { control: 'text' },
	variant: { control: 'text' },
	value: { control: 'text' },
	showLabel: { control: 'boolean' },
	message: { control: 'text' },
	showMessage: { control: 'boolean' },
	disabled: { control: 'boolean' },
	readOnly: { control: 'text' },
	validation: { control: 'text' },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	icon: { control: 'text' },
	showIcon: { control: 'boolean' },
	iconTrailing: { control: 'text' },
	showIconTrailing: { control: 'boolean' },
	minLength: { control: 'text' },
	maxLength: { control: 'text' },
	type: { control: 'text' },
	min: { control: 'text' },
	max: { control: 'text' },
	dataList: { control: 'text' },
	placeholder: { control: 'text' }
};

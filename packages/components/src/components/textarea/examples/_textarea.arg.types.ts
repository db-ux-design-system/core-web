import type { InputType } from 'storybook/internal/csf';

export const StorybookTextareaArgTypes: Record<string, InputType> = {
	label: { control: 'text' },
	variant: { control: 'text' },
	value: { control: 'text' },
	showLabel: { control: 'boolean' },
	showMessage: { control: 'boolean' },
	message: { control: 'text' },
	disabled: { control: 'boolean' },
	readOnly: { control: 'text' },
	validation: { control: 'text' },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	rows: { control: 'text' },
	showResizer: { control: 'boolean' },
	fieldSizing: { control: 'text' }
};

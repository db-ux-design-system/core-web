import type { InputType } from 'storybook/internal/csf';

export const StorybookCheckboxArgTypes: Record<string, InputType> = {
	name: { control: 'text' },
	disabled: { control: 'boolean' },
	checked: { control: 'boolean' },
	indeterminate: { control: 'boolean' },
	validation: {
		control: 'select',
		options: ['invalid', 'valid', 'no-validation']
	},
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	message: { control: 'text' },
	showMessage: { control: 'boolean' },
	size: { control: 'select', options: ['small', 'medium'] },
	required: { control: 'boolean' },
	showLabel: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	label: { control: 'text' },
	placeholder: { control: 'text' },
	variant: { control: 'select', options: ['above', 'floating'] },
	value: { control: 'text' },
	form: { control: 'text' },
	ariaDescribedBy: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

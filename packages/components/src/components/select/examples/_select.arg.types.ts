import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookSelectArgTypes: Record<string, InputType> = {
	options: { control: 'object' },
	label: { control: 'text' },
	placeholder: { control: 'text' },
	variant: { control: 'select', options: ['above', 'floating'] },
	value: { control: 'text' },
	showLabel: { control: 'boolean' },
	message: { control: 'text' },
	showMessage: { control: 'boolean' },
	validation: { control: 'select', options: ['invalid', 'valid', 'no-validation'] },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	disabled: { control: 'boolean' },
	...StorybookIconArgTypes,
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	name: { control: 'text' },
	form: { control: 'text' },
	ariaDescribedBy: { control: 'text' },
	size: { control: 'number' },
	multiple: { control: 'boolean' },
	showEmptyOption: { control: 'boolean' },
	autocomplete: { control: 'text' },
	messageIcon: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClick: { action: 'onClick' }
};

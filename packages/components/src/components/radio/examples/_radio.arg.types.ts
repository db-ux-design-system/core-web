import type { InputType } from 'storybook/internal/csf';

export const StorybookRadioArgTypes: Record<string, InputType> = {
	name: { control: 'text' },
	value: { control: 'text' },
	disabled: { control: 'boolean' },
	checked: { control: 'boolean' },
	validation: { control: 'select', options: ['invalid', 'valid', 'no-validation'] },
	size: { control: 'select', options: ['small', 'medium'] },
	required: { control: 'boolean' },
	showLabel: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	label: { control: 'text' },
	form: { control: 'text' },
	ariaDescribedBy: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

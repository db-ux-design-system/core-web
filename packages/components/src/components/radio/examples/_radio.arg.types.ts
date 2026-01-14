import type { InputType } from 'storybook/internal/csf';

export const StorybookRadioArgTypes: Record<string, InputType> = {
	name: { control: 'text' },
	value: { control: 'text' },
	disabled: { control: 'boolean' },
	checked: { control: 'boolean' },
	validation: { control: 'text' },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	size: { control: 'text' },
	required: { control: 'boolean' },
	showLabel: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' }
};

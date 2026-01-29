import type { InputType } from 'storybook/internal/csf';

export const StorybookSwitchArgTypes: Record<string, InputType> = {
	checked: { control: 'boolean' },
	disabled: { control: 'boolean' },
	visualAid: { control: 'text' },
	iconLeading: { control: 'text' },
	iconTrailing: { control: 'text' },
	size: { control: 'text' },
	label: { control: 'text' },
	variant: { control: 'text' },
	showLabel: { control: 'boolean' },
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	validation: { control: 'text' },
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	showMessage: { control: 'boolean' },
	message: { control: 'text' },
	icon: { control: 'text' }
};

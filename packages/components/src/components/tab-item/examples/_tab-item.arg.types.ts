import type { InputType } from 'storybook/internal/csf';

export const StorybookTabItemArgTypes: Record<string, InputType> = {
	label: { control: 'text' },
	active: { control: 'text' },
	disabled: { control: 'boolean' },
	icon: { control: 'text' },
	showIcon: { control: 'boolean' },
	iconTrailing: { control: 'text' },
	showIconTrailing: { control: 'boolean' },
	width: { control: 'text' },
	alignment: { control: 'text' }
};

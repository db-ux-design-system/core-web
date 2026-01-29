import type { InputType } from 'storybook/internal/csf';

export const StorybookTagArgTypes: Record<string, InputType> = {
	emphasis: { control: 'text' },
	semantic: { control: 'text' },
	lineBreak: { control: 'text' },
	behavior: { control: 'text' },
	component: { control: 'text' },
	identifier: { control: 'text' },
	checked: { control: 'boolean' },
	disabled: { control: 'boolean' },
	icon: { control: 'text' },
	showIcon: { control: 'boolean' },
	noText: { control: 'text' },
	content: { control: 'text' },
	showCheckState: { control: 'boolean' },
	overflow: { control: 'text' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookTagArgTypes: Record<string, InputType> = {
	emphasis: { control: 'text' },
	semantic: { control: 'text' },
	behavior: { control: 'text' },
	icon: { control: 'text' },
	showIcon: { control: 'boolean' },
	noText: { control: 'text' },
	content: { control: 'text' },
	showCheckState: { control: 'boolean' },
	overflow: { control: 'text' }
};

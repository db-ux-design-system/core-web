import type { InputType } from 'storybook/internal/csf';

export const StorybookLinkArgTypes: Record<string, InputType> = {
	href: { control: 'text' },
	variant: { control: 'text' },
	disabled: { control: 'boolean' },
	size: { control: 'text' },
	content: { control: 'text' },
	showIcon: { control: 'boolean' },
	wrap: { control: 'text' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookPopoverArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	spacing: { control: 'text' },
	placement: { control: 'text' },
	gap: { control: 'text' },
	animation: { control: 'boolean' },
	delay: { control: 'text' },
	width: { control: 'text' },
	open: { control: 'boolean' }
};

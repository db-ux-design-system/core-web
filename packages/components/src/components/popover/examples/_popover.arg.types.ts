import type { InputType } from 'storybook/internal/csf';

export const StorybookPopoverArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	spacing: { control: 'text' },
	placement: { control: 'text' },
	gap: { control: 'text' },
	animation: { control: 'text' },
	delay: { control: 'text' },
	content: { control: 'text' },
	width: { control: 'text' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookDrawerArgTypes: Record<string, InputType> = {
	open: { control: 'text' },
	onClose: { control: 'text' },
	width: { control: 'text' },
	rounded: { control: 'text' },
	spacing: { control: 'text' },
	backdrop: { control: 'text' },
	direction: { control: 'text' },
	variant: { control: 'text' }
};

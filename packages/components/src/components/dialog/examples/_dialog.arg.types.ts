import type { InputType } from 'storybook/internal/csf';

export const StorybookDialogArgTypes: Record<string, InputType> = {
	open: { control: 'boolean' },
	backdrop: { control: 'select', options: ['none', 'strong', 'weak'] },
	containerSize: {
		control: 'select',
		options: ['small', 'medium', 'large', 'full']
	},
	header: { control: 'text' },
	footer: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClose: { action: 'onClose' },
	onCancel: { action: 'onCancel' }
};

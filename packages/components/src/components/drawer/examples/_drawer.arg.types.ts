import type { InputType } from 'storybook/internal/csf';

export const StorybookDrawerArgTypes: Record<string, InputType> = {
	open: { control: 'boolean' },
	width: { control: 'select', options: ['full', 'auto'] },
	rounded: { control: 'boolean' },
	spacing: {
		control: 'select',
		options: ['medium', 'small', 'large', 'none']
	},
	backdrop: {
		control: 'select',
		options: ['none', 'strong', 'weak', 'invisible']
	},
	direction: { control: 'select', options: ['left', 'right', 'up', 'down'] },
	variant: { control: 'select', options: ['modal', 'inside'] },
	position: { control: 'select', options: ['fixed', 'absolute'] },
	closeButtonId: { control: 'text' },
	closeButtonText: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClose: { action: 'onClose' }
};

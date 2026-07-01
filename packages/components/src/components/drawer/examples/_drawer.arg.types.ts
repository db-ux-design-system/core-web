import type { InputType } from 'storybook/internal/csf';

export const StorybookDrawerArgTypes: Record<string, InputType> = {
	open: { control: 'boolean' },
	containerSize: {
		control: 'select',
		options: ['small', 'medium', 'large', 'full']
	},
	rounded: { control: 'boolean' },
	showSpacing: { control: 'boolean' },
	backdrop: {
		control: 'select',
		options: ['none', 'strong', 'weak', 'invisible']
	},
	direction: { control: 'select', options: ['left', 'right', 'up', 'down'] },
	variant: { control: 'select', options: ['modal', 'inside'] },
	position: { control: 'select', options: ['fixed', 'absolute'] },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClose: { action: 'onClose' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookCardArgTypes: Record<string, InputType> = {
	behavior: { control: 'select', options: ['static', 'interactive'] },
	elevationLevel: { control: 'select', options: ['1', '2', '3'] },
	spacing: {
		control: 'select',
		options: ['medium', 'small', 'large', 'none']
	},
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClick: { action: 'onClick' }
};

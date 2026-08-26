import type { InputType } from 'storybook/internal/csf';

export const StorybookFooterArgTypes: Record<string, InputType> = {
	width: {
		control: 'select',
		options: ['full', 'large', 'medium', 'small']
	},
	id: { control: 'text' }
};

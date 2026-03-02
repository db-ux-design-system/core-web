import type { InputType } from 'storybook/internal/csf';

export const StorybookDividerArgTypes: Record<string, InputType> = {
	width: { control: 'select', options: ['full', 'auto'] },
	variant: { control: 'select', options: ['horizontal', 'vertical'] },
	emphasis: { control: 'select', options: ['weak', 'strong'] },
	margin: {
		control: 'select',
		options: ['medium', 'small', 'large', 'none', '_']
	},
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

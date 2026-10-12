import type { InputType } from 'storybook/internal/csf';

export const StorybookHeadingArgTypes: Record<string, InputType> = {
	visualSize: {
		control: 'select',
		options: [
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'p-small',
			'p-medium',
			'p-large'
		]
	},
	fontWeight: { control: 'select', options: ['black', 'light'] },
	children: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

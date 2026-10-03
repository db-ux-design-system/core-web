import type { InputType } from 'storybook/internal/csf';

const sizeControl: InputType = {
	control: 'select',
	options: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs']
};

export const StorybookTextArgTypes: Record<string, InputType> = {
	size: sizeControl,
	visuallyHidden: { control: 'boolean' },
	children: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

export const StorybookParagraphArgTypes: Record<string, InputType> = {
	size: sizeControl,
	alignment: { control: 'select', options: ['start', 'center', 'end'] },
	children: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

export const StorybookParagraphGroupArgTypes: Record<string, InputType> = {
	size: sizeControl,
	alignment: { control: 'select', options: ['start', 'center', 'end'] },
	gap: {
		control: 'select',
		options: [
			'none',
			'3x-small',
			'2x-small',
			'x-small',
			'small',
			'medium',
			'large',
			'x-large',
			'2x-large',
			'3x-large'
		]
	},
	className: { control: 'text' },
	id: { control: 'text' }
};

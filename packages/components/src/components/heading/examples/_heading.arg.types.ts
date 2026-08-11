import type { InputType } from 'storybook/internal/csf';

export const StorybookHeadingArgTypes: Record<string, InputType> = {
	as: {
		control: 'select',
		options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	},
	size: {
		control: 'select',
		options: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs']
	},
	fontWeight: { control: 'select', options: ['black', 'light'] },
	alignment: { control: 'select', options: ['start', 'center', 'end'] },
	paragraphSpacing: { control: 'boolean' },
	children: { control: 'text' },
	startSlot: { control: false },
	endSlot: { control: false },
	className: { control: 'text' },
	id: { control: 'text' }
};

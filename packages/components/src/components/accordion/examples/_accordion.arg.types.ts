import type { InputType } from 'storybook/internal/csf';

export const StorybookAccordionArgTypes: Record<string, InputType> = {
	behavior: { control: 'select', options: ['multiple', 'single'] },
	variant: { control: 'select', options: ['divider', 'card'] },
	size: {
		control: 'select',
		options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
	},
	initOpenIndex: { control: 'object' },
	items: { control: 'object' },
	name: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

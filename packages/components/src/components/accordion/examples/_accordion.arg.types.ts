import type { InputType } from 'storybook/internal/csf';

export const StorybookAccordionArgTypes: Record<string, InputType> = {
	behavior: {
		control: 'select',
		options: ['multiple', 'single']
	},
	variant: {
		control: 'select',
		options: ['divider', 'card']
	},
	initOpenIndex: { control: 'object' },
	name: { control: 'text' },
	id: { control: 'text' }
};

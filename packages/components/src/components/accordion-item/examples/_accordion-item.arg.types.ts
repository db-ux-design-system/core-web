import type { InputType } from 'storybook/internal/csf';

export const StorybookAccordionItemArgTypes: Record<string, InputType> = {
	headlinePlain: { control: 'text' },
	disabled: { control: 'boolean' },
	defaultOpen: { control: 'boolean' },
	text: { control: 'text' },
	name: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

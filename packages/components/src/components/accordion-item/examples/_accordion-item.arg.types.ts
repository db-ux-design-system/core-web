import type { InputType } from 'storybook/internal/csf';

export const StorybookAccordionItemArgTypes: Record<string, InputType> = {
	headlinePlain: { control: 'text' },
	disabled: { control: 'boolean' }
};

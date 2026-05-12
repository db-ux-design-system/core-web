import type { InputType } from 'storybook/internal/csf';

export const StorybookBrandArgTypes: Record<string, InputType> = {
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

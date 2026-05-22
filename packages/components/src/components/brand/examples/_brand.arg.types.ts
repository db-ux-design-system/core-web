import type { InputType } from 'storybook/internal/csf';

export const StorybookBrandArgTypes: Record<string, InputType> = {
	noText: { control: 'boolean' },
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookSectionArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	width: { control: 'text' },
	spacing: { control: 'text' }
};

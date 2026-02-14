import type { InputType } from 'storybook/internal/csf';

export const StorybookSectionArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	width: { control: 'select', options: ['full', 'medium', 'large', 'small'] },
	spacing: { control: 'select', options: ['medium', 'small', 'large', 'none'] },
	autofocus: { control: 'boolean' }
};

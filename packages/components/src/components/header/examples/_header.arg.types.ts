import type { InputType } from 'storybook/internal/csf';

export const StorybookHeaderArgTypes: Record<string, InputType> = {
	width: { control: 'text' },
	forceMobile: { control: 'boolean' }
};

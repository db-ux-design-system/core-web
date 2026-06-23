import type { InputType } from 'storybook/internal/csf';

export const StorybookNavigationArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookDividerArgTypes: Record<string, InputType> = {
	width: { control: 'text' },
	variant: { control: 'text' },
	emphasis: { control: 'text' }
};

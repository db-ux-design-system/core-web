import type { InputType } from 'storybook/internal/csf';

export const StorybookBadgeArgTypes: Record<string, InputType> = {
	emphasis: { control: 'text' },
	semantic: { control: 'text' },
	size: { control: 'text' },
	placement: { control: 'text' }
};

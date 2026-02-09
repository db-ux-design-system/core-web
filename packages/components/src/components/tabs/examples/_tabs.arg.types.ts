import type { InputType } from 'storybook/internal/csf';

export const StorybookTabsArgTypes: Record<string, InputType> = {
	orientation: { control: 'text' },
	width: { control: 'text' },
	alignment: { control: 'text' },
	behavior: { control: 'text' },
	initialSelectedIndex: { control: 'text' },
	initialSelectedMode: { control: 'text' }
};

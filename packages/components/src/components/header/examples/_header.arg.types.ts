import type { InputType } from 'storybook/internal/csf';

export const StorybookHeaderArgTypes: Record<string, InputType> = {
	width: { control: 'text' },
	forceMobile: { control: 'text' },
	example: { control: 'text' },
	withName: { control: 'text' },
	withNavigation: { control: 'text' }
};

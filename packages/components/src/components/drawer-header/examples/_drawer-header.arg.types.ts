import type { InputType } from 'storybook/internal/csf';

export const StorybookDrawerHeaderArgTypes: Record<string, InputType> = {
	text: { control: 'text' },
	closeButtonText: { control: 'text' },
	closeButtonId: { control: 'text' },
	id: { control: 'text' }
};

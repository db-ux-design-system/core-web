import type { InputType } from 'storybook/internal/csf';

export const StorybookStackArgTypes: Record<string, InputType> = {
	variant: { control: 'text' },
	gap: { control: 'text' },
	direction: { control: 'text' },
	wrap: { control: 'text' },
	alignment: { control: 'text' },
	justifyContent: { control: 'text' }
};

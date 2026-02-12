import type { InputType } from 'storybook/internal/csf';

export const StorybookStackArgTypes: Record<string, InputType> = {
	variant: { control: 'select', options: ['simple', 'divider'] },
	gap: { control: 'select', options: ['none', '3x-large', '2x-large', 'x-large', 'large', 'medium', 'small', 'x-small', '2x-small', '3x-small'] },
	direction: { control: 'select', options: ['row', 'column'] },
	wrap: { control: 'boolean' },
	alignment: { control: 'select', options: ['stretch', 'start', 'end', 'center'] },
	justifyContent: { control: 'select', options: ['space-between', 'start', 'end', 'center'] },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

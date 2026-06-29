import type { InputType } from 'storybook/internal/csf';

export const StorybookHeaderArgTypes: Record<string, InputType> = {
	width: { control: 'select', options: ['full', 'medium', 'large', 'small'] },
	forceMobile: { control: 'boolean' },
	drawerOpen: { control: 'boolean' },
	burgerMenuLabel: { control: 'text' },
	closeButtonId: { control: 'text' },
	closeButtonText: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

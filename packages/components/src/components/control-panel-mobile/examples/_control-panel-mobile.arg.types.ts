import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelMobileArgTypes: Record<string, InputType> = {
	position: { control: 'select', options: ['top', 'bottom'] },
	variant: { control: 'select', options: ['drawer', 'flat-icon'] },
	drawerHeaderText: { control: 'text' },
	burgerMenuLabel: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

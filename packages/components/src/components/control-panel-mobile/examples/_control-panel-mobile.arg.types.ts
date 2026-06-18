import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelMobileArgTypes: Record<string, InputType> = {
	position: { control: 'select', options: ['top', 'bottom'] },
	drawerHeaderText: { control: 'text' },
	burgerMenuLabel: { control: 'text' },
	navigationLabeledBy: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

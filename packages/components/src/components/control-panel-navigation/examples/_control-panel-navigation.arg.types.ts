import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelNavigationArgTypes: Record<
	string,
	InputType
> = {
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

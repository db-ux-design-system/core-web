import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelFlatIconArgTypes: Record<string, InputType> =
	{
		noText: { control: 'boolean' },
		id: { control: 'text' },
		autofocus: { control: 'boolean' }
	};

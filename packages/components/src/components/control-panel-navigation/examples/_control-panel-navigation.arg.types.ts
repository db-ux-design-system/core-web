import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelNavigationArgTypes: Record<
	string,
	InputType
> = {
	variant: { control: 'select', options: ['popover', 'tree'] },
	showTreeLine: { control: 'boolean' },
	arrowScrollDistance: { control: 'number' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

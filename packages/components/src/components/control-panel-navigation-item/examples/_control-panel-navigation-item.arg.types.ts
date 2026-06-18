import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookControlPanelNavigationItemArgTypes: Record<
	string,
	InputType
> = {
	disabled: { control: 'boolean' },
	active: { control: 'boolean' },
	...StorybookIconArgTypes,
	text: { control: 'text' },
	tooltip: { control: 'text' },
	hideSubNavigation: { control: 'boolean' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

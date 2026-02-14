import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes, StorybookIconLeadingArgTypes, StorybookIconTrailingArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookTabItemArgTypes: Record<string, InputType> = {
	label: { control: 'text' },
	active: { control: 'boolean' },
	disabled: { control: 'boolean' },
	...StorybookIconArgTypes,
	...StorybookIconLeadingArgTypes,
	...StorybookIconTrailingArgTypes,
	noText: { control: 'boolean' },
	checked: { control: 'boolean' },
	name: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

import type { InputType } from 'storybook/internal/csf';
import {
	StorybookIconArgTypes,
	StorybookIconLeadingArgTypes,
	StorybookIconTrailingArgTypes
} from '../../../shared/examples/_icons.arg.types';

export const StorybookButtonArgTypes: Record<string, InputType> = {
	variant: {
		control: 'select',
		options: ['outlined', 'brand', 'ghost', 'filled']
	},
	disabled: { control: 'boolean' },
	form: { control: 'text' },
	name: { control: 'text' },
	noText: { control: 'boolean' },
	type: { control: 'select', options: ['button', 'reset', 'submit'] },
	value: { control: 'text' },
	...StorybookIconArgTypes,
	...StorybookIconLeadingArgTypes,
	...StorybookIconTrailingArgTypes,
	width: { control: 'select', options: ['full', 'auto'] },
	size: { control: 'select', options: ['small', 'medium'] },
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClick: { action: 'onClick' }
};

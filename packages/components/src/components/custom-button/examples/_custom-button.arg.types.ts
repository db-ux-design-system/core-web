import type { InputType } from 'storybook/internal/csf';
import {
	StorybookIconArgTypes,
	StorybookIconLeadingArgTypes,
	StorybookIconTrailingArgTypes
} from '../../../shared/examples/_icons.arg.types';

export const StorybookCustomButtonArgTypes: Record<string, InputType> = {
	variant: {
		control: 'select',
		options: ['outlined', 'brand', 'ghost', 'filled']
	},
	noText: { control: 'boolean' },
	wrap: { control: 'boolean' },
	...StorybookIconArgTypes,
	...StorybookIconLeadingArgTypes,
	...StorybookIconTrailingArgTypes,
	width: { control: 'select', options: ['full', 'auto'] },
	size: { control: 'select', options: ['small', 'medium'] },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

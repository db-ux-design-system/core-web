import type { InputType } from 'storybook/internal/csf';
import { StorybookIconOnlyArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookIconComponentArgTypes: Record<string, InputType> = {
	...StorybookIconOnlyArgTypes,
	variant: { control: 'text' },
	weight: {
		control: 'select',
		options: ['16', '20', '24', '32', '48', '64']
	},
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

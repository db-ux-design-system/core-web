import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookBrandArgTypes: Record<string, InputType> = {
	...StorybookIconArgTypes,
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

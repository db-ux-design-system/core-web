import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookControlPanelBrandArgTypes: Record<string, InputType> = {
	...StorybookIconArgTypes,
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

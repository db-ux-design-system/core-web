import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookInfotextArgTypes: Record<string, InputType> = {
	semantic: { control: 'select', options: ['adaptive', 'neutral', 'critical', 'informational', 'warning', 'successful'] },
	size: { control: 'select', options: ['small', 'medium'] },
	...StorybookIconArgTypes,
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

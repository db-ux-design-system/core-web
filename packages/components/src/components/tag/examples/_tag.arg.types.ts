import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookTagArgTypes: Record<string, InputType> = {
	emphasis: { control: 'select', options: ['weak', 'strong'] },
	semantic: { control: 'select', options: ['adaptive', 'neutral', 'critical', 'informational', 'warning', 'successful'] },
	behavior: { control: 'select', options: ['static', 'removable'] },
	...StorybookIconArgTypes,
	noText: { control: 'boolean' },
	content: { control: 'text' },
	showCheckState: { control: 'boolean' },
	overflow: { control: 'boolean' },
	removeButton: { control: 'text' },
	text: { control: 'text' },
	value: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onRemove: { action: 'onRemove' }
};

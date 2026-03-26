import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookNavigationItemArgTypes: Record<string, InputType> = {
	disabled: { control: 'boolean' },
	active: { control: 'boolean' },
	...StorybookIconArgTypes,
	width: { control: 'select', options: ['full', 'auto'] },
	wrap: { control: 'boolean' },
	text: { control: 'text' },
	subNavigationExpanded: { control: 'boolean' },
	backButtonId: { control: 'text' },
	backButtonText: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClick: { action: 'onClick' }
};

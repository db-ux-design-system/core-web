import type { InputType } from 'storybook/internal/csf';
import {
	StorybookIconLeadingOnlyArgTypes,
	StorybookIconOnlyArgTypes,
	StorybookIconTrailingOnlyArgTypes
} from '../../../shared/examples/_icons.arg.types';

export const StorybookSwitchArgTypes: Record<string, InputType> = {
	checked: { control: 'boolean' },
	disabled: { control: 'boolean' },
	visualAid: { control: 'boolean' },
	size: { control: 'select', options: ['small', 'medium'] },
	label: { control: 'text' },
	variant: { control: 'select', options: ['leading', 'trailing'] },
	showLabel: { control: 'boolean' },
	required: { control: 'boolean' },
	showRequiredAsterisk: { control: 'boolean' },
	...StorybookIconOnlyArgTypes,
	...StorybookIconLeadingOnlyArgTypes,
	...StorybookIconTrailingOnlyArgTypes,
	validation: {
		control: 'select',
		options: ['invalid', 'valid', 'no-validation']
	},
	invalidMessage: { control: 'text' },
	validMessage: { control: 'text' },
	showMessage: { control: 'boolean' },
	message: { control: 'text' },
	autocomplete: { control: 'text' },
	messageIcon: { control: 'text' },
	name: { control: 'text' },
	value: { control: 'text' },
	form: { control: 'text' },
	ariaDescribedBy: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

import type { InputType } from 'storybook/internal/csf';
import {
	StorybookIconArgTypes,
	StorybookIconLeadingArgTypes
} from '../../../shared/examples/_icons.arg.types';

export const StorybookBreadcrumbItemArgTypes: Record<string, InputType> = {
	href: { control: 'text' },
	text: { control: 'text' },
	ariaCurrent: {
		control: 'select',
		options: ['page', 'step', 'location', 'date', 'time', 'true', 'false']
	},
	disabled: { control: 'boolean' },
	size: { control: 'select', options: ['small', 'medium'] },
	id: { control: 'text' },
	className: { control: 'text' },
	...StorybookIconArgTypes,
	...StorybookIconLeadingArgTypes
};

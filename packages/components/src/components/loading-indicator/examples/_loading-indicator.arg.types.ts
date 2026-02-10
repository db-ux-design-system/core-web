import type { InputType } from 'storybook/internal/csf';

export const StorybookLoadingIndicatorArgTypes: Record<string, InputType> = {
	variant: {
		control: 'select',
		options: ['inline', 'onsite', 'progress-bar']
	},
	size: { control: 'select', options: ['small', 'medium'] },
	state: {
		control: 'select',
		options: ['inactive', 'active', 'successful', 'critical']
	},
	indeterminate: { control: 'boolean' },
	value: { control: 'number' },
	max: { control: 'number' },
	showLabel: { control: 'boolean' },
	showProgressText: { control: 'boolean' },
	overlay: { control: 'boolean' },
	delay: { control: 'select', options: ['none', 'slow', 'fast'] },
	density: {
		control: 'select',
		options: ['functional', 'regular', 'expressive']
	}
};

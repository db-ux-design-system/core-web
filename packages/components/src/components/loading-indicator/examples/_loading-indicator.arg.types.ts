import type { InputType } from 'storybook/internal/csf';

export const StorybookLoadingIndicatorArgTypes: Record<string, InputType> = {
	variant: {
		control: 'select',
		options: ['bar', 'circular']
	},
	orientation: {
		control: 'select',
		options: ['horizontal', 'vertical']
	},
	size: { control: 'select', options: ['small', 'medium'] },
	width: { control: 'select', options: ['full', 'auto'] },
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
	delay: { control: 'select', options: ['none', 'slow', 'fast'] }
};

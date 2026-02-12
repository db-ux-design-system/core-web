import type { InputType } from 'storybook/internal/csf';

export const StorybookBadgeArgTypes: Record<string, InputType> = {
	emphasis: { control: 'select', options: ['weak', 'strong'] },
	semantic: {
		control: 'select',
		options: [
			'adaptive',
			'neutral',
			'critical',
			'informational',
			'warning',
			'successful'
		]
	},
	size: { control: 'select', options: ['small', 'medium'] },
	placement: {
		control: 'select',
		options: [
			'inline',
			'corner-top-left',
			'corner-top-right',
			'corner-center-left',
			'corner-center-right',
			'corner-bottom-left',
			'corner-bottom-right'
		]
	},
	label: { control: 'text' },
	text: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

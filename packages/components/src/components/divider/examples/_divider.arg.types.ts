import type { InputType } from 'storybook/internal/csf';

export const StorybookDividerArgTypes: Record<string, InputType> = {
	width: { control: 'select', options: ['full', 'auto'] },
	variant: { control: 'select', options: ['horizontal', 'vertical'] },
	emphasis: { control: 'select', options: ['weak', 'strong'] },
	margin: {
		control: 'select',
		options: ['medium', 'small', 'large', 'none', '_']
	},
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

/**
 * For examples whose layout only fits a horizontal divider. A vertical
 * divider takes its height from its container, which these examples don't
 * provide, so the `variant` control is hidden there.
 */
// Spelled out on purpose: the story generator doesn't resolve object spreads.
export const StorybookDividerHorizontalArgTypes: Record<string, InputType> = {
	width: { control: 'select', options: ['full', 'auto'] },
	variant: { table: { disable: true } },
	emphasis: { control: 'select', options: ['weak', 'strong'] },
	margin: {
		control: 'select',
		options: ['medium', 'small', 'large', 'none', '_']
	},
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

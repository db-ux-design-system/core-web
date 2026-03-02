import type { InputType } from 'storybook/internal/csf';

export const StorybookIconOnlyArgTypes: Record<string, InputType> = {
	icon: {
		control: 'select',
		options: [
			'arrow_down',
			'arrow_left',
			'arrow_right',
			'arrow_up',
			'arrow_up_right',
			'brand',
			'calendar',
			'check-circle',
			'check',
			'check_circle',
			'chevron_down',
			'chevron_left',
			'chevron_right',
			'chevron_up',
			'circle',
			'circular_arrows',
			'clock',
			'cross',
			'cross_circle',
			'exclamation_mark_circle',
			'exclamation_mark_triangle',
			'information_circle',
			'magnifying_glass',
			'menu',
			'minus',
			'plus',
			'resize_handle_corner',
			'x_placeholder'
		]
	}
};
export const StorybookIconLeadingOnlyArgTypes: Record<string, InputType> = {
	iconLeading: {
		control: 'select',
		options: [
			'arrow_down',
			'arrow_left',
			'arrow_right',
			'arrow_up',
			'arrow_up_right',
			'brand',
			'calendar',
			'check-circle',
			'check',
			'check_circle',
			'chevron_down',
			'chevron_left',
			'chevron_right',
			'chevron_up',
			'circle',
			'circular_arrows',
			'clock',
			'cross',
			'cross_circle',
			'exclamation_mark_circle',
			'exclamation_mark_triangle',
			'information_circle',
			'magnifying_glass',
			'menu',
			'minus',
			'plus',
			'resize_handle_corner',
			'x_placeholder'
		]
	}
};
export const StorybookIconTrailingOnlyArgTypes: Record<string, InputType> = {
	iconTrailing: {
		control: 'select',
		options: [
			'arrow_down',
			'arrow_left',
			'arrow_right',
			'arrow_up',
			'arrow_up_right',
			'brand',
			'calendar',
			'check-circle',
			'check',
			'check_circle',
			'chevron_down',
			'chevron_left',
			'chevron_right',
			'chevron_up',
			'circle',
			'circular_arrows',
			'clock',
			'cross',
			'cross_circle',
			'exclamation_mark_circle',
			'exclamation_mark_triangle',
			'information_circle',
			'magnifying_glass',
			'menu',
			'minus',
			'plus',
			'resize_handle_corner',
			'x_placeholder'
		]
	}
};
export const StorybookIconArgTypes: Record<string, InputType> = {
	...StorybookIconOnlyArgTypes,
	showIcon: { control: 'boolean' }
};
export const StorybookIconLeadingArgTypes: Record<string, InputType> = {
	...StorybookIconLeadingOnlyArgTypes,
	showIconLeading: { control: 'boolean' }
};
export const StorybookIconTrailingArgTypes: Record<string, InputType> = {
	...StorybookIconTrailingOnlyArgTypes,
	showIconTrailing: { control: 'boolean' }
};

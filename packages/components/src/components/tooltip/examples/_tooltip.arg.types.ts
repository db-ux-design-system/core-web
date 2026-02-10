import type { InputType } from 'storybook/internal/csf';

export const StorybookTooltipArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	showArrow: { control: 'boolean' },
	emphasis: { control: 'text' },
	placement: { control: 'text' },
	width: { control: 'text' },
	animation: { control: 'boolean' },
	delay: { control: 'text' }
};

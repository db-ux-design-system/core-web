import type { InputType } from 'storybook/internal/csf';

export const StorybookTooltipArgTypes: Record<string, InputType> = {
	content: { control: 'text' },
	id: { control: 'text' },
	showArrow: { control: 'boolean' },
	emphasis: { control: 'text' },
	placement: { control: 'text' },
	width: { control: 'text' },
	animation: { control: 'text' },
	delay: { control: 'text' }
};

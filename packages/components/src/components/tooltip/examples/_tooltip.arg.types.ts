import type { InputType } from 'storybook/internal/csf';

export const StorybookTooltipArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	showArrow: { control: 'boolean' },
	emphasis: { control: 'select', options: ['weak', 'strong'] },
	placement: { control: 'select', options: ['top', 'bottom', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left', 'right', 'left-start', 'left-end', 'right-start', 'right-end'] },
	width: { control: 'select', options: ['auto', 'fixed'] },
	animation: { control: 'boolean' },
	delay: { control: 'select', options: ['none', 'slow', 'fast'] },
	variant: { control: 'select', options: ['description', 'label'] },
	autofocus: { control: 'boolean' }
};

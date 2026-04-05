import type { InputType } from 'storybook/internal/csf';

export const StorybookBreadcrumbArgTypes: Record<string, InputType> = {
	size: { control: 'select', options: ['small', 'medium'] },
	separator: { control: 'select', options: ['chevron', 'slash'] },
	maxItems: { control: 'number' },
	ellipsisAriaLabel: { control: 'text' },
	items: { control: 'object' },
	ariaLabel: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

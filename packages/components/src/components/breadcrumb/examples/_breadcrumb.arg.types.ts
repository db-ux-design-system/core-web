import type { InputType } from 'storybook/internal/csf';

export const StorybookBreadcrumbArgTypes: Record<string, InputType> = {
	size: { control: 'select', options: ['small', 'medium'] },
	separator: { control: 'select', options: ['chevron', 'slash'] },
	id: { control: 'text' }
};

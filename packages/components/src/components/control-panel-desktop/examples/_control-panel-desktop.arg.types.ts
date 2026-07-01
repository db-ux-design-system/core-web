import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelDesktopArgTypes: Record<string, InputType> = {
	width: { control: 'select', options: ['full', 'medium', 'large', 'small'] },
	orientation: { control: 'select', options: ['horizontal', 'vertical'] },
	expanded: { control: 'boolean' },
	expandButtonTooltip: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

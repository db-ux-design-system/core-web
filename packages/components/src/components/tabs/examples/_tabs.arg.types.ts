import type { InputType } from 'storybook/internal/csf';

export const StorybookTabsArgTypes: Record<string, InputType> = {
	orientation: { control: 'select', options: ['horizontal', 'vertical'] },
	width: { control: 'select', options: ['full', 'auto'] },
	alignment: { control: 'select', options: ['start', 'center'] },
	behavior: { control: 'select', options: ['scrollbar', 'arrows'] },
	initialSelectedIndex: { control: 'number' },
	initialSelectedMode: { control: 'select', options: ['auto', 'manually'] },
	name: { control: 'text' },
	tabs: { control: 'object' },
	arrowScrollDistance: { control: 'number' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

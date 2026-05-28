import type { InputType } from 'storybook/internal/csf';

export const StorybookTabsArgTypes: Record<string, InputType> = {
	orientation: { control: 'select', options: ['horizontal', 'vertical'] },
	tabItemWidth: { control: 'select', options: ['full', 'auto'] },
	tabItemAlignment: {
		control: 'select',
		options: ['start', 'center', 'end']
	},
	behavior: { control: 'select', options: ['scrollbar', 'arrows'] },
	initialSelectedIndex: { control: 'number' },
	initialSelectedMode: { control: 'select', options: ['auto', 'manually'] },
	name: { control: 'text' },
	tabs: { control: 'object' },
	arrowScrollDistance: { control: 'number' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onIndexChange: { action: 'onIndexChange' },
	onTabSelect: { action: 'onTabSelect' }
};

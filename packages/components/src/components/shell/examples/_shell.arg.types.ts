import type { InputType } from 'storybook/internal/csf';

export const StorybookShellArgTypes: Record<string, InputType> = {
	controlPanelDesktopPosition: {
		control: 'select',
		options: ['top', 'left']
	},
	controlPanelMobilePosition: {
		control: 'select',
		options: ['top', 'bottom']
	},
	subNavigationDesktopPosition: {
		control: 'select',
		options: ['top', 'left']
	},
	subNavigationMobilePosition: {
		control: 'select',
		options: ['top', 'bottom', 'none']
	},
	showSubNavigation: { control: 'boolean' },
	fadeIn: { control: 'boolean' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

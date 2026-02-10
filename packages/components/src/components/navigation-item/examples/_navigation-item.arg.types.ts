import type { InputType } from 'storybook/internal/csf';

export const StorybookNavigationItemArgTypes: Record<string, InputType> = {
	disabled: { control: 'boolean' },
	active: { control: 'boolean' },
	icon: { control: 'text' },
	showIcon: { control: 'boolean' },
	width: { control: 'text' },
	wrap: { control: 'boolean' }
};

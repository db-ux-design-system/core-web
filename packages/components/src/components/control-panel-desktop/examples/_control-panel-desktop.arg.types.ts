import type { InputType } from 'storybook/internal/csf';

export const StorybookControlPanelDesktopArgTypes: Record<string, InputType> = {
	width: { control: 'select', options: ['full', 'medium', 'large', 'small'] },
	orientation: { control: 'select', options: ['horizontal', 'vertical'] },
	expanded: { control: 'boolean' },
	expandButtonTooltip: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	// `onExpandButtonTooltipFn` matches the `^on.*` argTypesRegex, so Storybook
	// would create an implicit action for it. The component calls it while
	// rendering the toggle button label, which triggers SB_PREVIEW_API_0002.
	// Declaring the action here makes the generator emit an explicit `fn()` spy.
	onExpandButtonTooltipFn: { action: 'onExpandButtonTooltipFn' }
};

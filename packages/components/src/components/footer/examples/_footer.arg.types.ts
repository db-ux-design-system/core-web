import type { InputType } from 'storybook/internal/csf';

export const StorybookFooterArgTypes: Record<string, InputType> = {
	showCopyright: { control: 'boolean' },
	showMain: { control: 'boolean' },
	showMeta: { control: 'boolean' },
	width: { control: 'select', options: ['full', 'large', 'small'] },
	id: { control: 'text' },
	autofocus: { control: 'boolean' }
};

import type { InputType } from 'storybook/internal/csf';

export const StorybookPopoverArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	spacing: { control: 'select', options: ['medium', 'small', 'large', 'none'] },
	placement: { control: 'select', options: ['top', 'bottom', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left', 'right', 'left-start', 'left-end', 'right-start', 'right-end'] },
	gap: { control: 'boolean' },
	animation: { control: 'boolean' },
	delay: { control: 'select', options: ['none', 'slow', 'fast'] },
	width: { control: 'select', options: ['auto', 'fixed'] },
	open: { control: 'boolean' },
	autofocus: { control: 'boolean' }
};

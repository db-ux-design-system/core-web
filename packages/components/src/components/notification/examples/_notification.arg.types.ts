import type { InputType } from 'storybook/internal/csf';

export const StorybookNotificationArgTypes: Record<string, InputType> = {
	headline: { control: 'text' },
	icon: { control: 'text' },
	variant: { control: 'text' },
	semantic: { control: 'text' },
	closeable: { control: 'boolean' },
	showIcon: { control: 'boolean' },
	link: { control: 'text' },
	linkVariant: { control: 'text' },
	showHeadline: { control: 'boolean' },
	showTimestamp: { control: 'boolean' },
	timestamp: { control: 'text' }
};

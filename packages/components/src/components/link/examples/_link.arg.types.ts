import type { InputType } from 'storybook/internal/csf';

export const StorybookLinkArgTypes: Record<string, InputType> = {
	href: { control: 'text' },
	variant: { control: 'select', options: ['adaptive', 'brand', 'inline'] },
	disabled: { control: 'boolean' },
	size: { control: 'select', options: ['medium', 'small'] },
	content: { control: 'select', options: ['external', 'internal'] },
	showIcon: { control: 'boolean' },
	wrap: { control: 'boolean' },
	text: { control: 'text' },
	target: { control: 'select', options: ['_self', '_blank', '_parent', '_top'] },
	rel: { control: 'text' },
	hreflang: { control: 'text' },
	referrerPolicy: { control: 'select', options: ['no-referrer', 'no-referrer-when-downgrade', 'origin', 'origin-when-cross-origin', 'same-origin', 'strict-origin', 'strict-origin-when-cross-origin', 'unsafe-url'] },
	role: { control: 'text' },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClick: { action: 'onClick' }
};

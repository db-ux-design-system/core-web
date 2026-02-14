import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookNotificationArgTypes: Record<string, InputType> = {
	headline: { control: 'text' },
	...StorybookIconArgTypes,
	variant: { control: 'select', options: ['docked', 'standalone', 'overlay'] },
	semantic: { control: 'select', options: ['adaptive', 'neutral', 'critical', 'informational', 'warning', 'successful'] },
	closeable: { control: 'boolean' },
	linkVariant: { control: 'select', options: ['block', 'inline'] },
	showHeadline: { control: 'boolean' },
	showTimestamp: { control: 'boolean' },
	timestamp: { control: 'text' },
	ariaLive: { control: 'select', options: ['assertive', 'polite', 'off'] },
	text: { control: 'text' },
	role: { control: 'text' },
	closeButtonId: { control: 'text' },
	closeButtonText: { control: 'text' },
	delay: { control: 'select', options: ['none', 'slow', 'fast'] },
	animation: { control: 'boolean' },
	width: { control: 'select', options: ['auto', 'fixed'] },
	id: { control: 'text' },
	autofocus: { control: 'boolean' },
	onClose: { action: 'onClose' }
};

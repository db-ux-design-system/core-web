import type { InputType } from 'storybook/internal/csf';

export const StorybookTableArgTypes: Record<string, InputType> = {
	id: { control: 'text' },
	caption: { control: 'text' },
	captionPlain: { control: 'text' },
	data: { control: 'object' },
	divider: {
		control: 'select',
		options: ['none', 'both', 'horizontal', 'vertical']
	},
	showCaption: { control: 'boolean' },
	size: {
		control: 'select',
		options: ['x-small', 'small', 'medium', 'large']
	},
	variant: {
		control: 'select',
		options: ['joined', 'zebra', 'floating']
	},
	mobileVariant: {
		control: 'select',
		options: ['table', 'list']
	},
	stickyHeader: {
		control: 'select',
		options: ['none', 'both', 'horizontal', 'vertical']
	},
	columnSizes: { control: 'object' }
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { DBButton } from '@components';
import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Components/Button/Variant',
	render: (properties) => (
		<DBButton {...properties}>{properties.children}</DBButton>
	),
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		variant: { control: 'select', options: ['outlined', 'brand'] }
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() }
} satisfies Meta<typeof DBButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Outlined: Story = {
	args: {
		variant: 'outlined',
		text: 'Outlined'
	}
};

export const Brand: Story = {
	args: {
		variant: 'brand',
		text: 'Outlined'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		text: 'Outlined'
	}
};

export const Filled: Story = {
	args: {
		variant: 'filled',
		text: 'Outlined'
	}
};

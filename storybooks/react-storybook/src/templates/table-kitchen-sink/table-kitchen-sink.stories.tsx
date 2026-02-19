import type { Meta, StoryObj } from '@storybook/react-vite';

import TableKitchenSink from './TableKitchenSink.tsx';

const meta: Meta<typeof TableKitchenSink> = {
	title: 'Templates/Table Kitchen Sink',
	component: TableKitchenSink
} satisfies Meta<typeof TableKitchenSink>;

export default meta;
type Story = StoryObj;
export const Default: Story = {
	args: {}
};

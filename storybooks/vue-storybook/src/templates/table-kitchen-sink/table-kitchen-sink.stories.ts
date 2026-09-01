import type { Meta, StoryObj } from '@storybook/vue3';

import TableKitchenSink from './TableKitchenSink.vue';

const meta = {
	title: 'Templates/Table Kitchen Sink',
	component: TableKitchenSink as any
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

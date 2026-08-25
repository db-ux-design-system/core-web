import type { Meta, StoryObj } from '@storybook/angular';
import { TableKitchenSinkComponent } from './table-kitchen-sink.component';

const meta: Meta<TableKitchenSinkComponent> = {
	title: 'Templates/Table Kitchen Sink',
	component: TableKitchenSinkComponent
};

export default meta;
type Story = StoryObj<TableKitchenSinkComponent>;

export const Default: Story = {
	args: {}
};

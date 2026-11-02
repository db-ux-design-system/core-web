import { DBButton, type DBButtonProps } from '@components';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
// Generated from packages/components/src/components/button/examples – reused
// for the controls, so the overview has no argTypes of its own to maintain.
import VariantMeta from '../../components/button/examples/variant.example.stories';

/*
 * PROTOTYPE – overview page per component. If it is adopted, the Mitosis
 * Storybook plugin generates this file and the MDX next to it for every
 * component.
 *
 * The MDX page needs a CSF file to attach to: it provides the component for
 * the properties table and the TOC parameters. `Default` only exists because
 * a CSF file needs a story; it is tagged `!dev` and not shown anywhere. The
 * interactive playground is on the Design System Platform.
 */
const meta: Meta<DBButtonProps> = {
	title: 'Components/DBButton/Overview',
	component: DBButton,
	parameters: {
		layout: 'centered',
		docs: {
			// The overview structures its sections with h2 (global TOC: h1, h3).
			toc: {
				headingSelector: 'h2, h3',
				title: 'Table of Contents'
			}
		}
	},
	argTypes: VariantMeta.argTypes
} satisfies Meta<DBButtonProps>;

export default meta;
type Story = StoryObj<DBButtonProps & { children?: string }>;

export const Default: Story = {
	tags: ['!dev'],
	args: {
		variant: 'brand',
		children: 'Button'
	},
	render: ({ children, ...args }) => ({
		props: args,
		template: `<db-button ${argsToTemplate(args)}>${children}</db-button>`
	})
};

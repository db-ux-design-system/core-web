import { DBButton, type DBButtonProps } from '@components';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
// Generated from packages/components/src/components/button/examples – reused
// for the controls, so the overview has no argTypes of its own to maintain.
import VariantMeta from '../../components/button/examples/variant.example.stories';

/*
 * PROTOTYPE – overview page per component, Angular counterpart of
 * storybooks/react-storybook/src/overview/button/button.overview.stories.tsx.
 *
 * `Playground` is the only story here: the overview needs one story for its
 * Canvas and Controls blocks. It is tagged `!dev`, so it stays out of the
 * sidebar.
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

export const Playground: Story = {
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

import { DBButton } from '@components';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
// Generated from packages/components/src/components/button/examples – reused
// for the controls, so the overview has no argTypes of its own to maintain.
import VariantMeta from '../../components/button/examples/variant.example.stories';

/*
 * PROTOTYPE – overview page per component, Vue counterpart of
 * storybooks/react-storybook/src/overview/button/button.overview.stories.tsx.
 *
 * `Playground` is the only story here: the overview needs one story for its
 * Canvas and Controls blocks. It is tagged `!dev`, so it stays out of the
 * sidebar.
 */
const meta: Meta<typeof DBButton> = {
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
	args: {
		onClick: fn()
	},
	argTypes: VariantMeta.argTypes
} satisfies Meta<typeof DBButton>;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
	tags: ['!dev'],
	args: {
		variant: 'brand',
		default: 'Button'
	},
	render: (args: any) => ({
		components: { DBButton },
		setup() {
			return { args };
		},
		template: '<DBButton v-bind="args">{{ args.default }}</DBButton>'
	})
};

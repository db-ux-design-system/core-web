import { DBButton } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
// Generated from packages/components/src/components/button/examples – reused
// for the controls, so the overview has no argTypes of its own to maintain.
import VariantMeta from '../../components/button/examples/variant.example.stories';

/*
 * PROTOTYPE – overview page per component.
 *
 * Handwritten for DBButton to discuss the structure. If it is adopted, the
 * Mitosis Storybook plugin generates this file (and the MDX next to it) for
 * every component, like the example stories today.
 *
 * `Playground` is the only story here: the overview needs one story for its
 * Canvas and Controls blocks. It is tagged `!dev`, so it stays out of the
 * sidebar and the group only shows the docs page. All examples on the page
 * are the generated stories.
 */
const meta: Meta<typeof DBButton> = {
	title: 'Components/DBButton/Overview',
	component: DBButton,
	parameters: {
		layout: 'centered',
		docs: {
			// The global TOC lists h1 and h3, which fits the generated example
			// pages (story names are h3). The overview structures its sections
			// with h2, so it lists h2 and h3.
			toc: {
				headingSelector: 'h2, h3',
				title: 'Table of Contents'
			}
		}
	},
	argTypes: VariantMeta.argTypes,
	args: {
		onClick: fn()
	}
} satisfies Meta<typeof DBButton>;

export default meta;
type Story = StoryObj<typeof DBButton>;

export const Playground: Story = {
	tags: ['!dev'],
	args: {
		children: 'Button',
		variant: 'brand'
	}
};

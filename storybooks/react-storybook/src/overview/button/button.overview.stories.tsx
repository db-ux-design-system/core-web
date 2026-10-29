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
 * - `Playground`: one button with all controls
 * - `Variants`: all variants in one canvas. It is the story the platform
 *   embeds, because a single generated story only shows one button.
 */
const meta: Meta<typeof DBButton> = {
	title: 'Components/DBButton/Overview',
	component: DBButton,
	parameters: {
		layout: 'centered'
	},
	argTypes: VariantMeta.argTypes,
	args: {
		onClick: fn()
	}
} satisfies Meta<typeof DBButton>;

export default meta;
type Story = StoryObj<typeof DBButton>;

export const Playground: Story = {
	args: {
		children: 'Button',
		variant: 'brand'
	}
};

export const Variants: Story = {
	parameters: {
		controls: { disable: true },
		docs: {
			// The render function spreads the args; show the code a consumer writes.
			source: {
				code: [
					'<DBButton variant="outlined">Outlined</DBButton>',
					'<DBButton variant="filled">Filled</DBButton>',
					'<DBButton variant="ghost">Ghost</DBButton>',
					'<DBButton variant="brand">Brand</DBButton>'
				].join('\n')
			}
		}
	},
	render: (properties) => (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 'var(--db-spacing-fixed-md)'
			}}>
			<DBButton {...properties} variant="outlined">
				Outlined
			</DBButton>
			<DBButton {...properties} variant="filled">
				Filled
			</DBButton>
			<DBButton {...properties} variant="ghost">
				Ghost
			</DBButton>
			<DBButton {...properties} variant="brand">
				Brand
			</DBButton>
		</div>
	)
};

import { DBButton } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

/*
 * PROTOTYPE – overview page per component.
 *
 * Handwritten for DBButton to discuss the structure. If it is adopted, the
 * Mitosis Storybook plugin generates this file (and the MDX next to it) for
 * every component, like the example stories today.
 *
 * `Variants` shows all variants in one canvas. It is the story the platform
 * embeds, because a single generated story only shows one button.
 */
const meta: Meta<typeof DBButton> = {
	title: 'Components/DBButton/Overview',
	component: DBButton,
	parameters: {
		layout: 'centered'
	},
	args: {
		onClick: fn()
	}
} satisfies Meta<typeof DBButton>;

export default meta;
type Story = StoryObj<typeof DBButton>;

export const Variants: Story = {
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

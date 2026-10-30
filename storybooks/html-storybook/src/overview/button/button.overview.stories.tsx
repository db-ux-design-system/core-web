import { DBButton } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';

/*
 * PROTOTYPE – overview page per component, HTML counterpart of
 * storybooks/react-storybook/src/overview/button/button.overview.stories.tsx.
 *
 * The HTML Storybook renders the React stories and shows the resulting markup
 * as code. `Playground` is the only story here: the overview needs one story
 * to attach to. It is tagged `!dev`, so it stays out of the sidebar. Controls
 * are disabled in the HTML Storybook, so it is a plain preview.
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

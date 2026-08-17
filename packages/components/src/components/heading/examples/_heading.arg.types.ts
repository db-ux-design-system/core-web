import type { InputType } from 'storybook/internal/csf';

export const StorybookHeadingArgTypes: Record<string, InputType> = {
	size: {
		control: 'select',
		options: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs']
	},
	// `semanticLevel` is intentionally omitted: these arg types are shared by all
	// Heading stories whose Storybook meta component is a native heading, and
	// Angular types `Meta<DBHeadingH2Props>["argTypes"]` strictly against that
	// component's props. Storybook infers the DBCustomHeading control instead.
	fontWeight: { control: 'select', options: ['black', 'light'] },
	alignment: { control: 'select', options: ['start', 'center', 'end'] },
	paragraphSpacing: { control: 'boolean' },
	children: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

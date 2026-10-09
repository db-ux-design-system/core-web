import type { InputType } from 'storybook/internal/csf';

/* Literal values on purpose: Mitosis parses the `useMetadata` object these feed
 * into with JSON5, which cannot resolve a reference or a spread. */
export const StorybookParagraphArgTypes: Record<string, InputType> = {
	size: { control: 'select', options: ['lg', 'md', 'sm'] },
	fontWeight: { control: 'select', options: ['black', 'regular'] },
	children: { control: 'text' },
	className: { control: 'text' },
	id: { control: 'text' }
};

export const StorybookTextGroupArgTypes: Record<string, InputType> = {
	alignment: { control: 'select', options: ['start', 'center', 'end'] },
	textSpacing: { control: 'boolean' },
	className: { control: 'text' },
	id: { control: 'text' }
};

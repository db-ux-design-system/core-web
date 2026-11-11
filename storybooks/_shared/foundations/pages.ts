/**
 * Foundations pages of the composition Storybook, in sidebar order.
 *
 * - `source`: Markdown file, relative to the repository root
 * - `route`: route of the file in the Patternhub, the base its relative links
 *   were written against. Links of other docs to this route point to the
 *   Storybook page instead.
 * - `platform`: design-side page on the Design System Platform, if there is one
 * - `learn`: Learn article on the platform that explains how to implement the topic
 *   (the Markdown file stays the reference here and the source for the MCP server)
 *
 * The guides (router usage, custom components, testing, validation, backdrop)
 * are Learn articles on the Design System Platform, see links.ts.
 */
export type DocsPage = {
	id: string;
	title: string;
	source: string;
	route: string;
	platform?: { label: string; url: string; text: string };
	learn?: { title: string; slug: string };
	/**
	 * Interactive examples (formerly the Patternhub example pages): a stories
	 * file in `_storybook/src/foundations-examples/` and the Patternhub routes
	 * it replaces. Shown as "Examples" at the end of the page.
	 */
	examples?: { file: string; routes: string[] };
};

const PLATFORM = 'https://design-system.deutschebahn.com/documentation';

const FOUNDATIONS: DocsPage[] = [
	{
		examples: {
			file: 'colors',
			routes: [
				'/foundations/colors/color-schemes',
				'/foundations/colors/color-modes'
			]
		},
		id: 'colors',
		learn: {
			title: 'Apply colors and Light Mode or Dark Mode',
			slug: 'colors-and-modes'
		},
		title: 'Colors',
		source: 'packages/foundations/docs/Colors.md',
		route: '/foundations/colors/readme',
		platform: {
			label: 'Colors',
			url: `${PLATFORM}/foundation/colors`,
			text: 'Color tokens, usage and guidelines:'
		}
	},
	{
		examples: {
			file: 'densities',
			routes: ['/foundations/densities/examples']
		},
		id: 'densities',
		learn: { title: 'Apply a density', slug: 'density' },
		title: 'Densities',
		source: 'packages/foundations/docs/Densities.md',
		route: '/foundations/densities/readme'
	},
	{
		examples: {
			file: 'font-sizes',
			routes: ['/foundations/font-sizes/overview']
		},
		id: 'font-sizes',
		learn: { title: 'Apply font sizes', slug: 'typography' },
		title: 'Font Sizes',
		source: 'packages/foundations/docs/FontsSizes.md',
		route: '/foundations/font-sizes/readme',
		platform: {
			label: 'Typography',
			url: `${PLATFORM}/foundation/typography`,
			text: 'Type scale and guidelines:'
		}
	},
	{
		examples: {
			file: 'variables',
			routes: ['/foundations/variables/examples']
		},
		id: 'variables',
		learn: {
			title: 'Apply spacing and sizing',
			slug: 'spacing-and-sizing'
		},
		title: 'Variables',
		source: 'packages/foundations/docs/Variables.md',
		route: '/foundations/variables/readme',
		platform: {
			label: 'Spacing',
			url: `${PLATFORM}/foundation/spacing`,
			text: 'Spacing and sizing tokens with their values:'
		}
	},
	{
		id: 'icons',
		learn: { title: 'Show icons in your interface', slug: 'icons-setup' },
		title: 'Icons',
		source: 'packages/foundations/docs/Icons.md',
		route: '/foundations/icons/readme',
		platform: {
			label: 'Icons',
			url: `${PLATFORM}/icons`,
			text: 'All icons with search:'
		}
	},
	{
		id: 'custom-icons',
		learn: { title: 'Show icons in your interface', slug: 'icons-setup' },
		title: 'Custom Icons',
		source: 'packages/foundations/docs/CustomIcons.md',
		route: '/foundations/icons/custom-icons'
	},
	{
		id: 'ide-support',
		learn: {
			title: 'Set up your editor and build',
			slug: 'editor-and-build'
		},
		title: 'IDE Support',
		source: 'packages/foundations/docs/IDESupport.md',
		route: '/foundations/ide'
	},
	{
		id: 'performance',
		learn: {
			title: 'Set up your editor and build',
			slug: 'editor-and-build'
		},
		title: 'Performance',
		source: 'packages/foundations/docs/Performance.md',
		route: '/foundations/performance'
	},
	{
		id: 'browser-support',
		learn: { title: 'Supported browsers', slug: 'browser-support' },
		title: 'Browser Support',
		source: 'packages/foundations/docs/BrowserSupport.md',
		route: '/foundations/browser-support'
	}
];

export const PAGES: DocsPage[] = FOUNDATIONS;

/** Storybook path of a Foundations page, e.g. `?path=/docs/foundations-colors--docs`. */
export const storybookPath = (id: string): string =>
	`?path=/docs/foundations-${id}--docs`;

/**
 * PROTOTYPE – Foundations pages of the composition Storybook, in sidebar order.
 *
 * - `source`: Markdown file, relative to the repository root
 * - `route`: route of the file in the Patternhub, the base its relative links
 *   were written against. Links of other docs to this route point to the
 *   Storybook page instead.
 * - `platform`: design-side page on the Design System Platform, if there is one
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
};

const PLATFORM = 'https://design-system.deutschebahn.com/documentation';

const FOUNDATIONS: DocsPage[] = [
	{
		id: 'colors',
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
		id: 'densities',
		title: 'Densities',
		source: 'packages/foundations/docs/Densities.md',
		route: '/foundations/densities/readme'
	},
	{
		id: 'font-sizes',
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
		id: 'variables',
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
		title: 'Custom Icons',
		source: 'packages/foundations/docs/CustomIcons.md',
		route: '/foundations/icons/custom-icons'
	},
	{
		id: 'ide-support',
		title: 'IDE Support',
		source: 'packages/foundations/docs/IDESupport.md',
		route: '/foundations/ide'
	},
	{
		id: 'performance',
		title: 'Performance',
		source: 'packages/foundations/docs/Performance.md',
		route: '/foundations/performance'
	},
	{
		id: 'browser-support',
		title: 'Browser Support',
		source: 'packages/foundations/docs/BrowserSupport.md',
		route: '/foundations/browser-support'
	}
];

export const PAGES: DocsPage[] = FOUNDATIONS;

/** Storybook path of a Foundations page, e.g. `?path=/docs/foundations-colors--docs`. */
export const storybookPath = (id: string): string =>
	`?path=/docs/foundations-${id}--docs`;

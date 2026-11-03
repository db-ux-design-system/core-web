/**
 * PROTOTYPE – Markdown pages of the composition Storybook, in sidebar order.
 *
 * - `group`: sidebar group, part of the Storybook id (`<group>-<id>--docs`)
 * - `source`: Markdown file, relative to the repository root
 * - `route`: route of the file in the Patternhub. Links of other docs to this
 *   route point to the Storybook page instead.
 * - `relativeLinks`: what relative links in the file were written against:
 *   its Patternhub route (the foundations docs) or its place in the
 *   repository (the guides, they are read on GitHub too)
 * - `platform`: design-side page on the Design System Platform, if there is one
 * - `note`: shown above the content
 */
export type DocsPage = {
	group: 'Foundations' | 'Guides';
	id: string;
	title: string;
	source: string;
	route: string;
	relativeLinks?: 'patternhub' | 'repository';
	platform?: { label: string; url: string; text: string };
	note?: string;
};

const PLATFORM = 'https://design-system.deutschebahn.com/documentation';

const FOUNDATIONS: Array<Omit<DocsPage, 'group'>> = [
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

/** The "Misc" pages of the Patternhub components section. */
const GUIDES: Array<Omit<DocsPage, 'group'>> = [
	{
		id: 'router-usage',
		title: 'Router Usage',
		source: 'packages/components/docs/router-usage.md',
		route: '/components/misc/router-usage'
	},
	{
		id: 'custom-components',
		title: 'Custom Components',
		source: 'packages/components/docs/creating-custom-components.md',
		route: '/components/misc/custom-components'
	},
	{
		id: 'testing',
		title: 'Testing',
		source: 'docs/how-to-test-with-db-ux-components.md',
		route: '/components/misc/testing'
	},
	{
		id: 'validation',
		title: 'Validation',
		source: 'packages/components/docs/Validation.md',
		route: '/components/misc/validation',
		note: 'The examples of the form components (DBInput, DBSelect, DBTextarea, DBCheckbox, DBRadio, DBSwitch) in each framework Storybook show the validation states.'
	},
	{
		id: 'backdrop',
		title: 'Backdrop',
		source: 'packages/components/docs/Backdrop.md',
		route: '/components/misc/backdrop'
	}
];

export const PAGES: DocsPage[] = [
	...FOUNDATIONS.map((page) => ({ ...page, group: 'Foundations' as const })),
	...GUIDES.map((page) => ({
		...page,
		group: 'Guides' as const,
		relativeLinks: 'repository' as const
	}))
];

/** Storybook id of a page, e.g. `?path=/docs/guides-testing--docs`. */
export const storybookPath = (group: string, id: string): string =>
	`?path=/docs/${group.toLowerCase()}-${id}--docs`;

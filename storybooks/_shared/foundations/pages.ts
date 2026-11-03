/**
 * PROTOTYPE – Foundations pages of the composition Storybook, in sidebar order.
 *
 * - `file`: Markdown file in `packages/foundations/docs/`
 * - `route`: route of the file in the Patternhub, the base its relative links
 *   were written against
 * - `platform`: design-side page on the Design System Platform, if there is one
 */
export type FoundationPage = {
	id: string;
	title: string;
	file: string;
	route: string;
	platform?: { label: string; url: string; text: string };
};

const PLATFORM = 'https://design-system.deutschebahn.com/documentation';

export const PAGES: FoundationPage[] = [
	{
		id: 'colors',
		title: 'Colors',
		file: 'Colors',
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
		file: 'Densities',
		route: '/foundations/densities/readme'
	},
	{
		id: 'font-sizes',
		title: 'Font Sizes',
		file: 'FontsSizes',
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
		file: 'Variables',
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
		file: 'Icons',
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
		file: 'CustomIcons',
		route: '/foundations/icons/custom-icons'
	},
	{
		id: 'ide-support',
		title: 'IDE Support',
		file: 'IDESupport',
		route: '/foundations/ide'
	},
	{
		id: 'performance',
		title: 'Performance',
		file: 'Performance',
		route: '/foundations/performance'
	},
	{
		id: 'browser-support',
		title: 'Browser Support',
		file: 'BrowserSupport',
		route: '/foundations/browser-support'
	}
];

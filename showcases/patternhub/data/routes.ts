import type { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';

export const ROUTES: DbMainnavigationDataType[] = [
	{
		label: 'Home',
		link: '/'
	},
	{
		label: 'Foundations',
		link: '/foundations',
		children: [
			{
				label: 'Colors',
				link: '/foundations/colors',
				children: [
					{ label: 'Examples', link: '/foundations/colors/examples' }
				]
			},
			{ label: 'Icons', link: '/foundations/icons' }
		]
	},
	{
		label: 'Components',
		link: '/components'
	},
	{
		label: 'Showcases',
		link: '/showcases'
	}
];

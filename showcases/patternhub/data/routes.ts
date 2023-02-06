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
		link: '/showcases',
		children: [
			{
				label: 'Angular',
				link: '/showcases/angular-current'
			},
			{
				label: 'Angular LTS',
				link: '/showcases/angular-lts'
			},
			{
				label: 'React',
				link: '/showcases/react'
			},
			{
				label: 'Reactwind',
				link: '/showcases/reactwind'
			},
			{
				label: 'Vanilla',
				link: '/showcases/vanilla'
			},
			{
				label: 'Vue',
				link: '/showcases/vue'
			}
		]
	}
];

export const getRouteWithBasePath = (route: DbMainnavigationDataType) => {
	return {
		...route,
		link: process.env.NEXT_PUBLIC_BASE_PATH
			? `${process.env.NEXT_PUBLIC_BASE_PATH}${route.link}`
			: route.link
	};
};

import type { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';

const componentChildren = [
	{
		label: '01 Layout',
		link: '/components/01-layout',
		children: [
			{
				label: 'DBCard',
				link: '/components/card',
				children: [
					{
						label: 'Examples',
						link: '/components/card/examples'
					},
					{
						label: 'How to use',
						link: '/components/card/how-to-use'
					}
				]
			},
			{
				label: 'DBDivider',
				link: '/components/divider',
				children: [
					{
						label: 'Examples',
						link: '/components/divider/examples'
					},
					{
						label: 'How to use',
						link: '/components/divider/how-to-use'
					}
				]
			},
			{
				label: 'DBHeader',
				link: '/components/header',
				children: [
					{
						label: 'Examples',
						link: '/components/header/examples'
					},
					{
						label: 'How to use',
						link: '/components/header/how-to-use'
					}
				]
			},
			{
				label: 'DBPage',
				link: '/components/page',
				children: [
					{
						label: 'Examples',
						link: '/components/page/examples'
					},
					{
						label: 'How to use',
						link: '/components/page/how-to-use'
					}
				]
			},
			{
				label: 'DBSection',
				link: '/components/section',
				children: [
					{
						label: 'Examples',
						link: '/components/section/examples'
					},
					{
						label: 'How to use',
						link: '/components/section/how-to-use'
					}
				]
			}
		]
	},
	{
		label: '02 Action',
		link: '/components/02-action',
		children: [
			{
				label: 'DBButton',
				link: '/components/button',
				children: [
					{
						label: 'Examples',
						link: '/components/button/examples'
					},
					{
						label: 'How to use',
						link: '/components/button/how-to-use'
					}
				]
			},
			{
				label: 'DBLink',
				link: '/components/link',
				children: [
					{
						label: 'Examples',
						link: '/components/link/examples'
					},
					{
						label: 'How to use',
						link: '/components/link/how-to-use'
					}
				]
			}
		]
	},
	{
		label: '03 Data-Input',
		link: '/components/03-data-input',
		children: [
			{
				label: 'DBInput',
				link: '/components/input',
				children: [
					{
						label: 'Examples',
						link: '/components/input/examples'
					},
					{
						label: 'How to use',
						link: '/components/input/how-to-use'
					}
				]
			},
			{
				label: 'DBRadio',
				link: '/components/radio',
				children: [
					{
						label: 'Examples',
						link: '/components/radio/examples'
					},
					{
						label: 'How to use',
						link: '/components/radio/how-to-use'
					}
				]
			}
		]
	},
	{
		label: '04 Data-Display',
		link: '/components/04-data-display',
		children: [
			{
				label: 'DBBrand',
				link: '/components/brand',
				children: [
					{
						label: 'Examples',
						link: '/components/brand/examples'
					},
					{
						label: 'How to use',
						link: '/components/brand/how-to-use'
					}
				]
			},
			{
				label: 'DBIcon',
				link: '/components/icon',
				children: [
					{
						label: 'Examples',
						link: '/components/icon/examples'
					},
					{
						label: 'How to use',
						link: '/components/icon/how-to-use'
					}
				]
			},
			{
				label: 'DBInfotext',
				link: '/components/infotext',
				children: [
					{
						label: 'Examples',
						link: '/components/infotext/examples'
					},
					{
						label: 'How to use',
						link: '/components/infotext/how-to-use'
					}
				]
			}
		]
	},
	{
		label: '06 Feedback',
		link: '/components/06-feedback',
		children: [
			{
				label: 'DBAlert',
				link: '/components/alert',
				children: [
					{
						label: 'Examples',
						link: '/components/alert/examples'
					},
					{
						label: 'How to use',
						link: '/components/alert/how-to-use'
					}
				]
			}
		]
	}
];
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
		link: '/components',
		children: componentChildren
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
				label: 'HTML',
				link: '/showcases/html'
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

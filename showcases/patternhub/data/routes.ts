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
						label: 'Properties',
						link: '/components/card/properties'
					},
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
						label: 'Properties',
						link: '/components/divider/properties'
					},
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
						label: 'Properties',
						link: '/components/header/properties'
					},
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
						label: 'Properties',
						link: '/components/page/properties'
					},
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
						label: 'Properties',
						link: '/components/section/properties'
					},
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
						label: 'Properties',
						link: '/components/button/properties'
					},
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
						label: 'Properties',
						link: '/components/link/properties'
					},
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
						label: 'Properties',
						link: '/components/input/properties'
					},
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
						label: 'Properties',
						link: '/components/radio/properties'
					},
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
						label: 'Properties',
						link: '/components/brand/properties'
					},
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
						label: 'Properties',
						link: '/components/icon/properties'
					},
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
						label: 'Properties',
						link: '/components/infotext/properties'
					},
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
						label: 'Properties',
						link: '/components/alert/properties'
					},
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
	}
];

export const getRouteWithBasePath = (route: DbMainnavigationDataType) => {
	return {
		...route,
		link: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${route.link}`
	};
};

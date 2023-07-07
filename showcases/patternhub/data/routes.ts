import type { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';

const componentChildren = [
	{
		label: '01 Layout',
		link: '/components/01-layout',
		children: [
			{
				label: 'DBCard',
				name: 'card'
			},
			{
				label: 'DBDivider',
				name: 'divider'
			},
			{
				label: 'DBDrawer',
				name: 'drawer'
			},
			{
				label: 'DBHeader',
				name: 'header'
			},
			{
				label: 'DBPage',
				name: 'page'
			},
			{
				label: 'DBSection',
				name: 'section'
			}
		]
	},
	{
		label: '02 Action',
		link: '/components/02-action',
		children: [
			{
				label: 'DBButton',
				name: 'button'
			},
			{
				label: 'DBLink',
				name: 'link'
			}
		]
	},
	{
		label: '03 Data-Input',
		link: '/components/03-data-input',
		children: [
			{
				label: 'DBInput',
				name: 'input'
			},
			{
				label: 'DBRadio',
				name: 'radio'
			},
			{
				label: 'DBCheckbox',
				name: 'checkbox'
			},
			{
				label: 'DBSelect',
				name: 'select'
			}
		]
	},
	{
		label: '04 Data-Display',
		link: '/components/04-data-display',
		children: [
			{
				label: 'DBBrand',
				name: 'brand'
			},
			{
				label: 'DBIcon',
				name: 'icon'
			},
			{
				label: 'DBInfotext',
				name: 'infotext'
			},
			{
				label: 'DBTag',
				name: 'tag'
			}
		]
	},
	{
		label: '05 Navigation',
		link: '/components/05-navigation',
		children: [
			{
				label: 'DBNavigationItem',
				name: 'navigation-item'
			}
		]
	},
	{
		label: '06 Feedback',
		link: '/components/06-feedback',
		children: [
			{
				label: 'DBAlert',
				name: 'alert'
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
		children: componentChildren.map((category) => ({
			...category,
			children: category.children.map((component) => ({
				label: component.label,
				link: `/components/${component.name}`,
				children: [
					{
						label: 'Properties',
						link: `/components/${component.name}/properties`
					},
					{
						label: 'Examples',
						link: `/components/${component.name}/examples`
					},
					{
						label: 'How to use',
						link: `/components/${component.name}/how-to-use`
					},
					{
						label: 'Migration',
						link: `/components/${component.name}/migration`
					}
				]
			}))
		}))
	}
];

export const getRouteWithBasePath = (route: DbMainnavigationDataType) => {
	return {
		...route,
		link: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${route.link}`
	};
};

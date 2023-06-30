export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	subNavigation?: NavigationItem[];
};

const componentChildren: NavigationItem[] = [
	{
		label: '01 Layout',
		path: '/components/01-layout',
		subNavigation: [
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
		path: '/components/02-action',
		subNavigation: [
			{
				label: 'DBButton',
				name: 'button'
			},
			{
				label: 'DBLink',
				name: 'path'
			}
		]
	},
	{
		label: '03 Data-Input',
		path: '/components/03-data-input',
		subNavigation: [
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
		path: '/components/04-data-display',
		subNavigation: [
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
		path: '/components/05-navigation',
		subNavigation: [
			{
				label: 'DBNavigationItem',
				name: 'navigation-item'
			}
		]
	},
	{
		label: '06 Feedback',
		path: '/components/06-feedback',
		subNavigation: [
			{
				label: 'DBAlert',
				name: 'alert'
			}
		]
	}
];
export const ROUTES: NavigationItem[] = [
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'Foundations',
		path: '/foundations',
		subNavigation: [
			{ label: 'Readme', path: '/foundations/readme' },
			{
				label: 'Colors',
				path: '/foundations/colors',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/colors/readme' },
					{ label: 'Examples', path: '/foundations/colors/examples' }
				]
			},
			{ label: 'Icons', path: '/foundations/icons' }
		]
	},
	{
		label: 'Components',
		path: '/components',
		subNavigation: [
			{ label: 'Readme', path: '/components/readme' },
			...componentChildren.map((category) => ({
				...category,
				subNavigation: category?.subNavigation?.map((component) => ({
					label: component.label,
					path: `/components/${component.name}`,
					subNavigation: [
						{
							label: 'Overview',
							path: `/components/${component.name}`
						},
						{
							label: 'Properties',
							path: `/components/${component.name}/properties`
						},
						{
							label: 'Examples',
							path: `/components/${component.name}/examples`
						},
						{
							label: 'How to use',
							path: `/components/${component.name}/how-to-use`
						},
						{
							label: 'Migration',
							path: `/components/${component.name}/migration`
						}
					]
				}))
			}))
		]
	}
];

export const getRouteWithBasePath = (route: NavigationItem) => {
	return {
		...route,
		path: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${route.path}`
	};
};

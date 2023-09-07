export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	subNavigation?: NavigationItem[];
};

const componentChildren: NavigationItem[] = [
	{
		label: 'Action',
		path: '/components/action',
		subNavigation: [
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
		label: 'Data-Display',
		path: '/components/data-display',
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
			},
			{
				label: 'DBAccordion',
				name: 'accordion'
			},
			{
				label: 'DBAccordionItem',
				name: 'accordion-item'
			}
		]
	},
	{
		label: 'Data-Input',
		path: '/components/data-input',
		subNavigation: [
			{
				label: 'DBCheckbox',
				name: 'checkbox'
			},
			{
				label: 'DBInput',
				name: 'input'
			},
			{
				label: 'DBRadio',
				name: 'radio'
			},
			{
				label: 'DBSelect',
				name: 'select'
			},
			{
				label: 'DBTextarea',
				name: 'textarea'
			}
		]
	},
	{
		label: 'Feedback',
		path: '/components/feedback',
		subNavigation: [
			{
				label: 'DBAlert',
				name: 'alert'
			},
			{
				label: 'DBBadge',
				name: 'badge'
			}
		]
	},
	{
		label: 'Layout',
		path: '/components/layout',
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
		label: 'Navigation',
		path: '/components/navigation',
		subNavigation: [
			{
				label: 'DBMainNavigation',
				name: 'main-navigation'
			},
			{
				label: 'DBNavigationItem',
				name: 'navigation-item'
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
							path: `/components/${component.name}/overview`
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

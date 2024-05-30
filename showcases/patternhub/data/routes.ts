import Components from './components.json';

export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	subNavigation?: NavigationItem[];
};

const componentChildren: NavigationItem[] = Components;
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
					{ label: 'Overview', path: '/foundations/colors/overview' },
					{
						label: 'Color Schemes',
						path: '/foundations/colors/color-schemes'
					}
				]
			},
			{
				label: 'Font Sizes',
				path: '/foundations/font-sizes',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/font-sizes/readme' },
					{
						label: 'Overview',
						path: '/foundations/font-sizes/overview'
					}
				]
			},
			{
				label: 'Icons',
				path: '/foundations/icons',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/icons/readme' },
					{
						label: 'Custom Icons',
						path: '/foundations/icons/custom-icons'
					},
					{ label: 'Overview', path: '/foundations/icons/overview' }
				]
			},
			{
				label: 'Densities',
				path: '/foundations/densities',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/densities/readme' },
					{
						label: 'Examples',
						path: '/foundations/densities/examples'
					}
				]
			},
			{
				label: 'Variables',
				path: '/foundations/variables',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/variables/readme' },
					{
						label: 'Examples',
						path: '/foundations/variables/examples'
					}
				]
			}
		]
	},
	{
		label: 'Components',
		path: '/components',
		subNavigation: [
			{ label: 'Readme', path: '/components/readme' },
			{ label: 'Router usage', path: '/components/router-usage' },
			{ label: 'Validation', path: '/components/validation' },
			...componentChildren.map((category) => ({
				...category,
				subNavigation: category?.subNavigation?.map((component) => ({
					label: component.label,
					path: `/components/${category.name}/${component.name}`,
					subNavigation: [
						{
							label: 'Overview',
							path: `/components/${category.name}/${component.name}/overview`
						},
						{
							label: 'Properties',
							path: `/components/${category.name}/${component.name}/properties`
						},
						{
							label: 'How to use',
							path: `/components/${category.name}/${component.name}/how-to-use`
						},
						{
							label: 'Migration',
							path: `/components/${category.name}/${component.name}/migration`
						},
						...(component.subNavigation ?? [])
					]
				}))
			}))
		]
	}
];

const fillNavigationRecursive = (
	navigationItems: NavigationItem[],
	tree: NavigationItem[],
	isBreadcrumb?: boolean,
	prevLabel?: string
) => {
	for (const navItem of navigationItems) {
		tree.push(
			isBreadcrumb
				? navItem
				: {
						...navItem,
						label: prevLabel
							? `${prevLabel}:${navItem.label}`
							: navItem.label
					}
		);

		if (navItem.subNavigation && navItem.subNavigation?.length > 0) {
			fillNavigationRecursive(
				navItem.subNavigation,
				tree,
				isBreadcrumb,
				isBreadcrumb ? undefined : navItem.label
			);
		}
	}
};

export const getAllNavigationItems = (isBreadcrumb?: boolean) => {
	const tree: NavigationItem[] = [];
	fillNavigationRecursive(ROUTES, tree, isBreadcrumb);
	return tree;
};

export const getNavigationList = (path: string) => {
	const tree: NavigationItem[] = getAllNavigationItems().filter(
		(navItem) => !navItem.subNavigation
	);
	const index = tree.findIndex((navItem) => navItem.path === path);
	return {
		previous: index === 0 ? undefined : tree[index - 1],
		next: index + 1 === tree.length ? undefined : tree[index + 1]
	};
};

export const getBreadcrumb = (path: string) => {
	const tree: NavigationItem[] = getAllNavigationItems(true);
	return tree.filter((navItem) => path.includes(navItem.path ?? ''));
};

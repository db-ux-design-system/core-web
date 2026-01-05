import type { ReactElement } from 'react';
import AccordionComponent from '../../react-showcase/src/components/accordion';
import AccordionItemComponent from '../../react-showcase/src/components/accordion-item';
import BadgeComponent from '../../react-showcase/src/components/badge';
import BrandComponent from '../../react-showcase/src/components/brand';
import CardComponent from '../../react-showcase/src/components/card';
import CheckboxComponent from '../../react-showcase/src/components/checkbox';
import CustomSelectComponent from '../../react-showcase/src/components/custom-select';
import DividerComponent from '../../react-showcase/src/components/divider';
import DrawerComponent from '../../react-showcase/src/components/drawer';
import HeaderComponent from '../../react-showcase/src/components/header';
// Import IconComponent from '../../react-showcase/src/components/icon';
import InfotextComponent from '../../react-showcase/src/components/infotext';
import InputComponent from '../../react-showcase/src/components/input';
import LinkComponent from '../../react-showcase/src/components/link';
import NavigationComponent from '../../react-showcase/src/components/navigation';
import NavigationItemComponent from '../../react-showcase/src/components/navigation-item';
import NotificationComponent from '../../react-showcase/src/components/notification';
// Import PageComponent from '../../react-showcase/src/components/page';
import PopoverComponent from '../../react-showcase/src/components/popover';
import RadioComponent from '../../react-showcase/src/components/radio';
import SectionComponent from '../../react-showcase/src/components/section';
import SelectComponent from '../../react-showcase/src/components/select';
import StackComponent from '../../react-showcase/src/components/stack';
import SwitchComponent from '../../react-showcase/src/components/switch';
import TabItemComponent from '../../react-showcase/src/components/tab-item';
import TabsComponent from '../../react-showcase/src/components/tabs';
import TagComponent from '../../react-showcase/src/components/tag';
import TextareaComponent from '../../react-showcase/src/components/textarea';
import TooltipComponent from '../../react-showcase/src/components/tooltip';
import * as brandCode from '../components/code-docs/brand';
import * as customSelectCode from '../components/code-docs/custom-select';
// Import * as iconCode from '../components/code-docs/icon';
import * as infotextCode from '../components/code-docs/infotext';
import * as linkCode from '../components/code-docs/link';
// Import * as pageCode from '../components/code-docs/page';
import * as stackCode from '../components/code-docs/stack';
import * as tagCode from '../components/code-docs/tag';
import * as tooltipCode from '../components/code-docs/tooltip';
import Components from './components.json';
import ButtonShowcase from '@components/components/button/showcase/button.showcase';

export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	component?: ReactElement;
	isHiddenInMenu?: boolean;
	subNavigation?: NavigationItem[];
};

const nameComponentMap = {
	'custom-select': <CustomSelectComponent slotCode={customSelectCode} />,
	stack: <StackComponent slotCode={stackCode} />,
	button: <ButtonShowcase isPatternhub />,
	link: <LinkComponent slotCode={linkCode} />,
	brand: <BrandComponent slotCode={brandCode} />,
	// Icon: <IconComponent slotCode={iconCode} />,
	tooltip: <TooltipComponent slotCode={tooltipCode} />,
	infotext: <InfotextComponent slotCode={infotextCode} />,
	tag: <TagComponent slotCode={tagCode} />,
	accordion: (
		<AccordionComponent
			subComponent={
				<AccordionItemComponent
					isSubComponent={true}
					componentName="accordion-item"
				/>
			}
		/>
	),
	'accordion-item': <AccordionItemComponent />,
	tabs: (
		<TabsComponent
			subComponent={
				<TabItemComponent
					isSubComponent={true}
					componentName="tab-item"
				/>
			}
		/>
	),
	'tab-item': <TabItemComponent />,
	checkbox: <CheckboxComponent />,
	input: <InputComponent />,
	radio: <RadioComponent />,
	select: <SelectComponent />,
	switch: <SwitchComponent />,
	textarea: <TextareaComponent />,
	notification: <NotificationComponent />,
	badge: <BadgeComponent />,
	card: <CardComponent />,
	divider: <DividerComponent />,
	drawer: <DrawerComponent />,
	header: <HeaderComponent />,
	// Page: <PageComponent />,
	section: <SectionComponent />,
	navigation: (
		<NavigationComponent
			subComponent={
				<NavigationItemComponent
					isSubComponent={true}
					componentName="navigation-item"
				/>
			}
		/>
	),
	'navigation-item': <NavigationItemComponent />,
	popover: <PopoverComponent />
};

const addComponentsToNavigationItems = (
	navigationItems: NavigationItem[]
): NavigationItem[] => {
	return navigationItems.map((navigationItem) => {
		return {
			...navigationItem,
			subNavigation: navigationItem.subNavigation?.map((subNavItem) => {
				return {
					...subNavItem,
					component: subNavItem.name
						? nameComponentMap[subNavItem.name]
						: undefined
				};
			})
		};
	});
};

export const componentChildren: NavigationItem[] =
	addComponentsToNavigationItems(Components);
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
					{
						label: 'Color Schemes',
						path: '/foundations/colors/color-schemes'
					},
					{
						label: 'Color Modes',
						path: '/foundations/colors/color-modes'
					},
					{
						label: 'Color Usage Guide',
						path: '/foundations/colors/color-usage-guide'
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
			},
			{
				label: 'Testing Overview Table',
				path: '/foundations/test-table'
			},
			{ label: 'IDE Support', path: '/foundations/ide' },
			{ label: 'Performance', path: '/foundations/performance' },
			{ label: 'Browser Support', path: '/foundations/browser-support' }
		]
	},
	{
		label: 'Components',
		path: '/components',
		subNavigation: [
			{ label: 'Readme', path: '/components/readme' },
			...componentChildren.map((category) => ({
				...category,
				subNavigation: category?.subNavigation?.map(
					(component): NavigationItem => ({
						label: component.label,
						path: `/components/${category.name}/${component.name}`,
						isHiddenInMenu: component.isHiddenInMenu,
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
					})
				)
			})),
			{
				label: 'Misc',
				path: '/components/misc',
				subNavigation: [
					{
						label: 'Router usage',
						path: '/components/misc/router-usage'
					},
					{
						label: 'Creating custom Components',
						path: '/components/misc/custom-components'
					},
					{
						label: 'Testing',
						path: '/components/misc/testing'
					},
					{
						label: 'Validation',
						path: '/components/misc/validation'
					},
					{ label: 'Backdrop', path: '/components/misc/backdrop' }
				]
			}
		]
	},
	{ label: 'Playgrounds', path: '/foundations/playgrounds' }
];

const fillNavigationRecursive = (
	navigationItems: NavigationItem[],
	tree: NavigationItem[],
	isBreadcrumb?: boolean,
	previousLabel?: string
) => {
	for (const navItem of navigationItems) {
		tree.push(
			isBreadcrumb
				? navItem
				: {
						...navItem,
						label: previousLabel
							? `${previousLabel}:${navItem.label}`
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
	return tree
		.filter((navItem) => path.includes(navItem.path ?? ''))
		.sort((a, b) => (a.path?.length ?? 0) - (b.path?.length ?? 0));
};

export const getAllComponentGroupNames = (): string[] => {
	return componentChildren
		.filter(({ name }) => Boolean(name))
		.map(({ name }) => name!);
};

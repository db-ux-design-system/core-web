import { type ReactElement } from 'react';
import AccordionComponent from '../../react-showcase/src/components/accordion';
import AccordionItemComponent from '../../react-showcase/src/components/accordion-item';
import BadgeComponent from '../../react-showcase/src/components/badge';
import ButtonComponent from '../../react-showcase/src/components/button';
import CardComponent from '../../react-showcase/src/components/card';
import CheckboxComponent from '../../react-showcase/src/components/checkbox';
import ControlPanelDesktop from '../../react-showcase/src/components/control-panel-desktop';
import CustomSelectComponent from '../../react-showcase/src/components/custom-select';
import DividerComponent from '../../react-showcase/src/components/divider';
import DrawerComponent from '../../react-showcase/src/components/drawer';
import InfotextComponent from '../../react-showcase/src/components/infotext';
import InputComponent from '../../react-showcase/src/components/input';
import LinkComponent from '../../react-showcase/src/components/link';
import NavigationComponent from '../../react-showcase/src/components/navigation';
import NavigationItemComponent from '../../react-showcase/src/components/navigation-item';
import NotificationComponent from '../../react-showcase/src/components/notification';
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
import * as accordionCode from '../components/code-docs/accordion';
import * as accordionItemCode from '../components/code-docs/accordion-item';
import * as badgeCode from '../components/code-docs/badge';
import * as buttonCode from '../components/code-docs/button';
import * as linkCode from '../components/code-docs/link';
// Import * as iconCode from '../components/code-docs/icon';
import ControlPanelMobileComponent from '../../react-showcase/src/components/control-panel-mobile';
import * as cardCode from '../components/code-docs/card';
import * as checkboxCode from '../components/code-docs/checkbox';
import * as controlPanelDesktopCode from '../components/code-docs/control-panel-desktop';
import * as ControlPanelMobileCode from '../components/code-docs/control-panel-mobile';
import * as customSelectCode from '../components/code-docs/custom-select';
import * as dividerCode from '../components/code-docs/divider';
import * as drawerCode from '../components/code-docs/drawer';
import * as infotextCode from '../components/code-docs/infotext';
import * as inputCode from '../components/code-docs/input';
import * as navigationCode from '../components/code-docs/navigation';
import * as navigationItemCode from '../components/code-docs/navigation-item';
import * as notificationCode from '../components/code-docs/notification';
import * as popoverCode from '../components/code-docs/popover';
import * as radioCode from '../components/code-docs/radio';
import * as sectionCode from '../components/code-docs/section';
import * as selectCode from '../components/code-docs/select';
import * as stackCode from '../components/code-docs/stack';
import * as switchCode from '../components/code-docs/switch';
import * as tabItemCode from '../components/code-docs/tab-item';
import * as tabsCode from '../components/code-docs/tabs';
import * as tagCode from '../components/code-docs/tag';
import * as textareaCode from '../components/code-docs/textarea';
import * as tooltipCode from '../components/code-docs/tooltip';
import AccordionItemShowcase from '@components/components/accordion-item/showcase/accordion-item.showcase';
import AccordionShowcase from '@components/components/accordion/showcase/accordion.showcase';
import BadgeShowcase from '@components/components/badge/showcase/badge.showcase';
import BrandShowcase from '@components/components/brand/showcase/brand.showcase';
import ButtonShowcase from '@components/components/button/showcase/button.showcase';
import CardShowcase from '@components/components/card/showcase/card.showcase';
import CheckboxShowcase from '@components/components/checkbox/showcase/checkbox.showcase';
import CustomButtonShowcase from '@components/components/custom-button/showcase/custom-button.showcase';
import CustomSelectShowcase from '@components/components/custom-select/showcase/custom-select.showcase';
import DividerShowcase from '@components/components/divider/showcase/divider.showcase';
import DrawerShowcase from '@components/components/drawer/showcase/drawer.showcase';
import HeaderShowcase from '@components/components/header/showcase/header.showcase';
import InfotextShowcase from '@components/components/infotext/showcase/infotext.showcase';
import InputShowcase from '@components/components/input/showcase/input.showcase';
import LinkShowcase from '@components/components/link/showcase/link.showcase';
import NavigationItemShowcase from '@components/components/navigation-item/showcase/navigation-item.showcase';
import NavigationShowcase from '@components/components/navigation/showcase/navigation.showcase';
import NotificationShowcase from '@components/components/notification/showcase/notification.showcase';
import PopoverShowcase from '@components/components/popover/showcase/popover.showcase';
import RadioShowcase from '@components/components/radio/showcase/radio.showcase';
import SectionShowcase from '@components/components/section/showcase/section.showcase';
import SelectShowcase from '@components/components/select/showcase/select.showcase';
import StackShowcase from '@components/components/stack/showcase/stack.showcase';
import SwitchShowcase from '@components/components/switch/showcase/switch.showcase';
import TabItemShowcase from '@components/components/tab-item/showcase/tab-item.showcase';
import TableShowcase from '@components/components/table/showcase/table.showcase';
import TabsShowcase from '@components/components/tabs/showcase/tabs.showcase';
import TagShowcase from '@components/components/tag/showcase/tag.showcase';
import TextareaShowcase from '@components/components/textarea/showcase/textarea.showcase';
import TooltipShowcase from '@components/components/tooltip/showcase/tooltip.showcase';
import type { ReactElement } from 'react';

import Components from './components.json';

export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	component?: ReactElement;
	isHiddenInMenu?: boolean;
	subNavigation?: NavigationItem[];
};

const nameComponentMap = {
	accordion: <AccordionShowcase isPatternhub />,

	'control-panel-mobile': (
		<ControlPanelMobileComponent slotCode={ControlPanelMobileCode} />
	),

	'accordion-item': <AccordionItemShowcase isPatternhub />,
	badge: <BadgeShowcase isPatternhub />,
	brand: <BrandShowcase isPatternhub />,
	button: <ButtonShowcase isPatternhub />,
	card: <CardShowcase isPatternhub />,
	checkbox: <CheckboxShowcase isPatternhub />,
	'custom-button': <CustomButtonShowcase isPatternhub />,
	'custom-select': <CustomSelectShowcase isPatternhub />,
	divider: <DividerShowcase isPatternhub />,
	drawer: <DrawerShowcase isPatternhub />,
	header: <HeaderShowcase isPatternhub />,
	infotext: <InfotextShowcase isPatternhub />,
	input: <InputShowcase isPatternhub />,
	link: <LinkShowcase isPatternhub />,
	navigation: <NavigationShowcase isPatternhub />,
	'navigation-item': <NavigationItemShowcase isPatternhub />,
	notification: <NotificationShowcase isPatternhub />,
	popover: <PopoverShowcase isPatternhub />,
	radio: <RadioShowcase isPatternhub />,
	section: <SectionShowcase isPatternhub />,
	select: <SelectShowcase isPatternhub />,
	stack: <StackShowcase isPatternhub />,
	switch: <SwitchShowcase isPatternhub />,
	'tab-item': <TabItemShowcase isPatternhub />,
	table: <TableShowcase isPatternhub />,
	tabs: <TabsShowcase isPatternhub />,
	tag: <TagShowcase isPatternhub />,
	textarea: <TextareaShowcase isPatternhub />,
	tooltip: <TooltipShowcase isPatternhub />
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
		.toSorted((a, b) => (a.path?.length ?? 0) - (b.path?.length ?? 0));
};

export const getAllComponentGroupNames = (): string[] => {
	return componentChildren
		.filter(({ name }) => Boolean(name))
		.map(({ name }) => name!);
};

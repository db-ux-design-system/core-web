import { TableComponent } from '../components/table.component';

import { Routes } from '@angular/router';
import { AccordionItemShowcase } from '@components/components/accordion-item/showcase/accordion-item.showcase';
import { AccordionShowcase } from '@components/components/accordion/showcase/accordion.showcase';
import { BadgeShowcase } from '@components/components/badge/showcase/badge.showcase';
import { BrandShowcase } from '@components/components/brand/showcase/brand.showcase';
import { ButtonShowcase } from '@components/components/button/showcase/button.showcase';
import { CardShowcase } from '@components/components/card/showcase/card.showcase';
import { CheckboxShowcase } from '@components/components/checkbox/showcase/checkbox.showcase';
import { CustomButtonShowcase } from '@components/components/custom-button/showcase/custom-button.showcase';
import { CustomSelectShowcase } from '@components/components/custom-select/showcase/custom-select.showcase';
import { DividerShowcase } from '@components/components/divider/showcase/divider.showcase';
import { DrawerShowcase } from '@components/components/drawer/showcase/drawer.showcase';
import { HeaderShowcase } from '@components/components/header/showcase/header.showcase';
import { IconShowcase } from '@components/components/icon/showcase/icon.showcase';
import { InfotextShowcase } from '@components/components/infotext/showcase/infotext.showcase';
import { InputShowcase } from '@components/components/input/showcase/input.showcase';
import { LinkShowcase } from '@components/components/link/showcase/link.showcase';
import { NavigationItemShowcase } from '@components/components/navigation-item/showcase/navigation-item.showcase';
import { NavigationShowcase } from '@components/components/navigation/showcase/navigation.showcase';
import { NotificationShowcase } from '@components/components/notification/showcase/notification.showcase';
import { PopoverShowcase } from '@components/components/popover/showcase/popover.showcase';
import { RadioShowcase } from '@components/components/radio/showcase/radio.showcase';
import { SectionShowcase } from '@components/components/section/showcase/section.showcase';
import { SelectShowcase } from '@components/components/select/showcase/select.showcase';
import { StackShowcase } from '@components/components/stack/showcase/stack.showcase';
import { SwitchShowcase } from '@components/components/switch/showcase/switch.showcase';
import { TabItemShowcase } from '@components/components/tab-item/showcase/tab-item.showcase';
import { TabsShowcase } from '@components/components/tabs/showcase/tabs.showcase';
import { TagShowcase } from '@components/components/tag/showcase/tag.showcase';
import { TextareaShowcase } from '@components/components/textarea/showcase/textarea.showcase';
import { TooltipShowcase } from '@components/components/tooltip/showcase/tooltip.showcase';
import { HomeComponent } from '../components/home/home.component';

export type NavItem = {
	path: string;
	label: string;
	component?: any;
	subNavigation?: NavItem[];
};

export const getSortedNavigationItems = (navigationItems: NavItem[]): any[] =>
	navigationItems.toSorted((a: NavItem, b: NavItem) =>
		a.path.localeCompare(b.path)
	);

export const NAVIGATION_ITEMS: NavItem[] = [
	{
		path: '06',
		label: '06 Feedback',
		subNavigation: getSortedNavigationItems([
			{
				path: '06/notification',
				label: 'Notification',
				component: NotificationShowcase
			},
			{ path: '06/badge', label: 'Badge', component: BadgeShowcase }
		])
	},

	{
		path: '05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: '05/navigation-item',
				label: 'NavigationItem',
				component: NavigationItemShowcase
			},
			{
				path: '05/navigation',
				label: 'Navigation',
				component: NavigationShowcase
			}
		])
	},

	{
		path: '04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
			{ path: '04/icon', label: 'Icon', component: IconShowcase },
			{
				path: '04/brand',
				label: 'Brand',
				component: BrandShowcase
			},
			{
				path: '04/tooltip',
				label: 'Tooltip',
				component: TooltipShowcase
			},
			{
				path: '04/infotext',
				label: 'Infotext',
				component: InfotextShowcase
			},
			{ path: '04/tag', label: 'Tag', component: TagShowcase },
			{
				path: '04/accordion',
				label: 'Accordion',
				component: AccordionShowcase
			},
			{
				path: '04/accordion-item',
				label: 'AccordionItem',
				component: AccordionItemShowcase
			},
			{
				path: '04/tab-item',
				label: 'TabItem',
				component: TabItemShowcase
			},
			{ path: '04/table', label: 'Table', component: TableComponent },

			{ path: '04/tabs', label: 'Tabs', component: TabsShowcase }
		])
	},
	{
		path: '03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{
				path: '03/custom-select',
				label: 'CustomSelect',
				component: CustomSelectShowcase
			},
			{ path: '03/input', label: 'Input', component: InputShowcase },
			{
				path: '03/textarea',
				label: 'Textarea',
				component: TextareaShowcase
			},
			{ path: '03/radio', label: 'Radio', component: RadioShowcase },
			{
				path: '03/checkbox',
				label: 'Checkbox',
				component: CheckboxShowcase
			},
			{ path: '03/switch', label: 'Switch', component: SwitchShowcase },
			{ path: '03/select', label: 'Select', component: SelectShowcase }
		])
	},
	{
		path: '02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{ path: '02/link', label: 'Link', component: LinkShowcase },
			{ path: '02/button', label: 'Button', component: ButtonShowcase },
			{
				path: '02/custom-button',
				label: 'CustomButton',
				component: CustomButtonShowcase
			}
		])
	},
	{
		path: '01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{ path: '01/stack', label: 'Stack', component: StackShowcase },
			{ path: '01/card', label: 'Card', component: CardShowcase },
			{ path: '01/drawer', label: 'Drawer', component: DrawerShowcase },
			{
				path: '01/divider',
				label: 'Divider',
				component: DividerShowcase
			},
			{
				path: '01/popover',
				label: 'Popover',
				component: PopoverShowcase
			},
			{
				path: '01/section',
				label: 'Section',
				component: SectionShowcase
			},
			{
				path: '01/header',
				label: 'Header',
				component: HeaderShowcase
			}
		])
	},
	{ path: '', label: 'Home', component: HomeComponent }
];

const pushRoute = (routes: Routes, item: NavItem) => {
	routes.push({
		path: item.path,
		component: item.component,
		redirectTo: item.component ? undefined : '/',
		pathMatch: 'full'
	});

	if (item.subNavigation) {
		for (const subItem of item.subNavigation) {
			pushRoute(routes, subItem);
		}
	}
};

export const getRoutes = (): Routes => {
	const routes: Routes = [];

	for (const item of NAVIGATION_ITEMS) {
		pushRoute(routes, item);
	}

	return routes;
};

import { Routes } from '@angular/router';
import { AccordionItemComponent } from '../components/accordion-item.component';
import { AccordionComponent } from '../components/accordion.component';
import { BadgeComponent } from '../components/badge.component';
import { BrandComponent } from '../components/brand.component';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../components/card.component';
import { CheckboxComponent } from '../components/checkbox.component';
import { CustomSelectComponent } from '../components/custom-select.component';
import { DividerComponent } from '../components/divider.component';
import { DrawerComponent } from '../components/drawer.component';
import { HeaderComponent } from '../components/header.component';
import { HomeComponent } from '../components/home/home.component';
import { IconComponent } from '../components/icon.component';
import { InfotextComponent } from '../components/infotext.component';
import { InputComponent } from '../components/input.component';
import { LinkComponent } from '../components/link.component';
import { NavigationItemComponent } from '../components/navigation-item.component';
import { NavigationComponent } from '../components/navigation.component';
import { NotificationComponent } from '../components/notification.component';
import { PopoverComponent } from '../components/popover.component';
import { RadioComponent } from '../components/radio.component';
import { SectionComponent } from '../components/section.component';
import { SelectComponent } from '../components/select.component';
import { StackComponent } from '../components/stack.component';
import { SwitchComponent } from '../components/switch.component';
import { TabItemComponent } from '../components/tab-item.component';
import { TabsComponent } from '../components/tabs.component';
import { TagComponent } from '../components/tag.component';
import { TextareaComponent } from '../components/textarea.component';
import { TooltipComponent } from '../components/tooltip.component';

export type NavItem = {
	path: string;
	label: string;
	component?: any;
	subNavigation?: NavItem[];
};

export const getSortedNavigationItems = (navigationItems: NavItem[]): any[] =>
	navigationItems.sort((a: NavItem, b: NavItem) =>
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
				component: NotificationComponent
			},
			{ path: '06/badge', label: 'Badge', component: BadgeComponent }
		])
	},

	{
		path: '05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: '05/navigation-item',
				label: 'NavigationItem',
				component: NavigationItemComponent
			},
			{
				path: '05/navigation',
				label: 'Navigation',
				component: NavigationComponent
			}
		])
	},

	{
		path: '04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
			{ path: '04/icon', label: 'Icon', component: IconComponent },
			{
				path: '04/brand',
				label: 'Brand',
				component: BrandComponent
			},
			{
				path: '04/tooltip',
				label: 'Tooltip',
				component: TooltipComponent
			},
			{
				path: '04/infotext',
				label: 'Infotext',
				component: InfotextComponent
			},
			{ path: '04/tag', label: 'Tag', component: TagComponent },
			{
				path: '04/accordion',
				label: 'Accordion',
				component: AccordionComponent
			},
			{
				path: '04/accordion-item',
				label: 'AccordionItem',
				component: AccordionItemComponent
			},
			{
				path: '04/tab-item',
				label: 'TabItem',
				component: TabItemComponent
			},

			{ path: '04/tabs', label: 'Tabs', component: TabsComponent }
		])
	},
	{
		path: '03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{
				path: '03/custom-select',
				label: 'CustomSelect',
				component: CustomSelectComponent
			},
			{ path: '03/input', label: 'Input', component: InputComponent },
			{
				path: '03/textarea',
				label: 'Textarea',
				component: TextareaComponent
			},
			{ path: '03/radio', label: 'Radio', component: RadioComponent },
			{
				path: '03/checkbox',
				label: 'Checkbox',
				component: CheckboxComponent
			},
			{ path: '03/switch', label: 'Switch', component: SwitchComponent },
			{ path: '03/select', label: 'Select', component: SelectComponent }
		])
	},
	{
		path: '02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{ path: '02/link', label: 'Link', component: LinkComponent },
			{ path: '02/button', label: 'Button', component: ButtonComponent }
		])
	},
	{
		path: '01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{ path: '01/stack', label: 'Stack', component: StackComponent },
			{ path: '01/card', label: 'Card', component: CardComponent },
			{ path: '01/drawer', label: 'Drawer', component: DrawerComponent },
			{
				path: '01/divider',
				label: 'Divider',
				component: DividerComponent
			},
			{
				path: '01/popover',
				label: 'Popover',
				component: PopoverComponent
			},
			{
				path: '01/section',
				label: 'Section',
				component: SectionComponent
			},
			{
				path: '01/header',
				label: 'Header',
				component: HeaderComponent
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

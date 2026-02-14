import AccordionItemShowcase from '@components/components/accordion-item/showcase/accordion-item.showcase.vue';
import AccordionShowcase from '@components/components/accordion/showcase/accordion.showcase.vue';
import BadgeShowcase from '@components/components/badge/showcase/badge.showcase.vue';
import BrandShowcase from '@components/components/brand/showcase/brand.showcase.vue';
import ButtonShowcase from '@components/components/button/showcase/button.showcase.vue';
import CardShowcase from '@components/components/card/showcase/card.showcase.vue';
import CheckboxShowcase from '@components/components/checkbox/showcase/checkbox.showcase.vue';
import CustomSelectShowcase from '@components/components/custom-select/showcase/custom-select.showcase.vue';
import DividerShowcase from '@components/components/divider/showcase/divider.showcase.vue';
import DrawerShowcase from '@components/components/drawer/showcase/drawer.showcase.vue';
import HeaderShowcase from '@components/components/header/showcase/header.showcase.vue';
import IconShowcase from '@components/components/icon/showcase/icon.showcase.vue';
import InfotextShowcase from '@components/components/infotext/showcase/infotext.showcase.vue';
import InputShowcase from '@components/components/input/showcase/input.showcase.vue';
import LinkShowcase from '@components/components/link/showcase/link.showcase.vue';
import NavigationItemShowcase from '@components/components/navigation-item/showcase/navigation-item.showcase.vue';
import NavigationShowcase from '@components/components/navigation/showcase/navigation.showcase.vue';
import NotificationShowcase from '@components/components/notification/showcase/notification.showcase.vue';
import PopoverShowcase from '@components/components/popover/showcase/popover.showcase.vue';
import RadioShowcase from '@components/components/radio/showcase/radio.showcase.vue';
import SectionShowcase from '@components/components/section/showcase/section.showcase.vue';
import SelectShowcase from '@components/components/select/showcase/select.showcase.vue';
import StackShowcase from '@components/components/stack/showcase/stack.showcase.vue';
import SwitchShowcase from '@components/components/switch/showcase/switch.showcase.vue';
import TabItemShowcase from '@components/components/tab-item/showcase/tab-item.showcase.vue';
import TabsShowcase from '@components/components/tabs/showcase/tabs.showcase.vue';
import TagShowcase from '@components/components/tag/showcase/tag.showcase.vue';
import TextareaShowcase from '@components/components/textarea/showcase/textarea.showcase.vue';
import TooltipShowcase from '@components/components/tooltip/showcase/tooltip.showcase.vue';
import { markRaw } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../components/home/Home.vue';

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

export const navigationItems: NavItem[] = [
	{
		path: '/06',
		label: '06 Feedback',
		subNavigation: getSortedNavigationItems([
			{
				path: '/06/notification',
				label: 'Notification',
				component: markRaw(NotificationShowcase)
			},
			{
				path: '/06/badge',
				label: 'Badge',
				component: markRaw(BadgeShowcase)
			}
		])
	},

	{
		path: '/05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: '/05/navigation-item',
				label: 'NavigationItem',
				component: markRaw(NavigationItemShowcase)
			},
			{
				path: '/05/navigation',
				label: 'Navigation',
				component: markRaw(NavigationShowcase)
			}
		])
	},

	{
		path: '/04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
			{
				path: '/04/brand',
				label: 'Brand',
				component: markRaw(BrandShowcase)
			},
			{
				path: '/04/infotext',
				label: 'Infotext',
				component: markRaw(InfotextShowcase)
			},
			{
				path: '/04/icon',
				label: 'Icon',
				component: markRaw(IconShowcase)
			},
			{ path: '/04/tag', label: 'Tag', component: markRaw(TagShowcase) },
			{
				path: '/04/accordion',
				label: 'Accordion',
				component: markRaw(AccordionShowcase)
			},
			{
				path: '/04/accordion-item',
				label: 'AccordionItem',
				component: markRaw(AccordionItemShowcase)
			},
			{
				path: '/04/tooltip',
				label: 'Tooltip',
				component: markRaw(TooltipShowcase)
			},
			{
				path: '/04/tab-item',
				label: 'TabItem',
				component: markRaw(TabItemShowcase)
			},

			{
				path: '/04/tabs',
				label: 'Tabs',
				component: markRaw(TabsShowcase)
			}
		])
	},
	{
		path: '/03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{
				path: '/03/custom-select',
				label: 'CustomSelect',
				component: markRaw(CustomSelectShowcase)
			},
			{
				path: '/03/input',
				label: 'Input',
				component: markRaw(InputShowcase)
			},
			{
				path: '/03/textarea',
				label: 'Textarea',
				component: markRaw(TextareaShowcase)
			},
			{
				path: '/03/radio',
				label: 'Radio',
				component: markRaw(RadioShowcase)
			},
			{
				path: '/03/checkbox',
				label: 'Checkbox',
				component: markRaw(CheckboxShowcase)
			},
			{
				path: '/03/switch',
				label: 'Switch',
				component: markRaw(SwitchShowcase)
			},
			{
				path: '/03/select',
				label: 'Select',
				component: markRaw(SelectShowcase)
			}
		])
	},
	{
		path: '/02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{
				path: '/02/link',
				label: 'Link',
				component: markRaw(LinkShowcase)
			},
			{
				path: '/02/button',
				label: 'Button',
				component: markRaw(ButtonShowcase)
			}
		])
	},
	{
		path: '/01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{
				path: '/01/stack',
				label: 'Stack',
				component: markRaw(StackShowcase)
			},
			{
				path: '/01/card',
				label: 'Card',
				component: markRaw(CardShowcase)
			},
			{
				path: '/01/drawer',
				label: 'Drawer',
				component: markRaw(DrawerShowcase)
			},
			{
				path: '/01/divider',
				label: 'Divider',
				component: markRaw(DividerShowcase)
			},
			{
				path: '/01/popover',
				label: 'Popover',
				component: markRaw(PopoverShowcase)
			},
			{
				path: '/01/section',
				label: 'Section',
				component: markRaw(SectionShowcase)
			},
			{
				path: '/01/header',
				label: 'Header',
				component: markRaw(HeaderShowcase)
			}
		])
	},
	{ path: '/', label: 'Home', component: markRaw(Home) }
];

const pushRoute = (routes: RouteRecordRaw[], item: NavItem) => {
	routes.push({ path: item.path, component: item.component });

	if (item.subNavigation) {
		for (const subItem of item.subNavigation) {
			pushRoute(routes, subItem);
		}
	}
};

export const getRoutes = (): RouteRecordRaw[] => {
	const routes: RouteRecordRaw[] = [];

	for (const item of navigationItems) {
		pushRoute(routes, item);
	}

	return routes;
};

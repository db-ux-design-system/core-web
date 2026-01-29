import Home from '../components/home';

import AccordionItemShowcase from '@components/components/accordion-item/showcase/accordion-item.showcase';
import AccordionShowcase from '@components/components/accordion/showcase/accordion.showcase';
import BadgeShowcase from '@components/components/badge/showcase/badge.showcase';
import BrandShowcase from '@components/components/brand/showcase/brand.showcase';
import ButtonShowcase from '@components/components/button/showcase/button.showcase';
import CardShowcase from '@components/components/card/showcase/card.showcase';
import CheckboxShowcase from '@components/components/checkbox/showcase/checkbox.showcase';
import CustomSelectShowcase from '@components/components/custom-select/showcase/custom-select.showcase';
import DividerShowcase from '@components/components/divider/showcase/divider.showcase';
import DrawerShowcase from '@components/components/drawer/showcase/drawer.showcase';
import HeaderShowcase from '@components/components/header/showcase/header.showcase';
import IconShowcase from '@components/components/icon/showcase/icon.showcase';
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
import TabsShowcase from '@components/components/tabs/showcase/tabs.showcase';
import TagShowcase from '@components/components/tag/showcase/tag.showcase';
import TextareaShowcase from '@components/components/textarea/showcase/textarea.showcase';
import TooltipShowcase from '@components/components/tooltip/showcase/tooltip.showcase';

export type NavigationItem = {
	path: string;
	label: string;
	component?: any;
	subNavigation?: NavigationItem[];
};

export const getSortedNavigationItems = (
	navigationItems: NavigationItem[]
): any[] =>
	navigationItems.sort((a: NavigationItem, b: NavigationItem) =>
		a.path.localeCompare(b.path)
	);
export const NAVIGATION_ITEMS: NavigationItem[] = [
	{
		path: '06',
		label: '06 Feedback',
		subNavigation: getSortedNavigationItems([
			{
				path: 'notification',
				label: 'Notification',
				component: <NotificationShowcase />
			},
			{ path: 'badge', label: 'Badge', component: <BadgeShowcase /> }
		])
	},

	{
		path: '05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: 'navigation-item',
				label: 'NavigationItem',
				component: <NavigationItemShowcase />
			},
			{
				path: 'navigation',
				label: 'Navigation',
				component: <NavigationShowcase />
			}
		])
	},

	{
		path: '04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
			{
				path: 'brand',
				label: 'Brand',
				component: <BrandShowcase />
			},
			{
				path: 'infotext',
				label: 'Infotext',
				component: <InfotextShowcase />
			},
			{
				path: 'icon',
				label: 'Icon',
				component: <IconShowcase />
			},
			{
				path: 'tooltip',
				label: 'Tooltip',
				component: <TooltipShowcase />
			},
			{ path: 'tag', label: 'Tag', component: <TagShowcase /> },
			{
				path: 'accordion',
				label: 'Accordion',
				component: <AccordionShowcase />
			},
			{
				path: 'accordion-item',
				label: 'AccordionItem',
				component: <AccordionItemShowcase />
			},
			{
				path: 'tab-item',
				label: 'TabItem',
				component: <TabItemShowcase />
			},
			{ path: 'tabs', label: 'Tabs', component: <TabsShowcase /> }
		])
	},
	{
		path: '03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{
				path: 'custom-select',
				label: 'CustomSelect',
				component: <CustomSelectShowcase />
			},
			{ path: 'input', label: 'Input', component: <InputShowcase /> },
			{
				path: 'textarea',
				label: 'Textarea',
				component: <TextareaShowcase />
			},
			{ path: 'radio', label: 'Radio', component: <RadioShowcase /> },
			{
				path: 'checkbox',
				label: 'Checkbox',
				component: <CheckboxShowcase />
			},
			{ path: 'switch', label: 'Switch', component: <SwitchShowcase /> },
			{ path: 'select', label: 'Select', component: <SelectShowcase /> }
		])
	},
	{
		path: '02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{ path: 'link', label: 'Link', component: <LinkShowcase /> },
			{ path: 'button', label: 'Button', component: <ButtonShowcase /> }
		])
	},
	{
		path: '01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{ path: 'stack', label: 'Stack', component: <StackShowcase /> },
			{ path: 'card', label: 'Card', component: <CardShowcase /> },
			{ path: 'drawer', label: 'Drawer', component: <DrawerShowcase /> },
			{
				path: 'divider',
				label: 'Divider',
				component: <DividerShowcase />
			},
			{
				path: 'section',
				label: 'Section',
				component: <SectionShowcase />
			},
			{
				path: 'popover',
				label: 'Popover',
				component: <PopoverShowcase />
			},
			{
				path: 'header',
				label: 'Header',
				component: <HeaderShowcase />
			}
		])
	},
	{ path: '', label: 'Home', component: <Home /> }
];

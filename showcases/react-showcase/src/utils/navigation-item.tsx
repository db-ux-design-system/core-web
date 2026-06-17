import AccordionItemShowcase from '@components/components/accordion-item/showcase/accordion-item.showcase';
import AccordionShowcase from '@components/components/accordion/showcase/accordion.showcase';
import BadgeShowcase from '@components/components/badge/showcase/badge.showcase';
import ButtonShowcase from '@components/components/button/showcase/button.showcase';
import CardShowcase from '@components/components/card/showcase/card.showcase';
import CheckboxShowcase from '@components/components/checkbox/showcase/checkbox.showcase';
import ControlPanelBrandShowcase from '@components/components/control-panel-brand/showcase/control-panel-brand.showcase';
import ControlPanelDesktopShowcase from '@components/components/control-panel-desktop/showcase/control-panel-desktop.showcase';
import ControlPanelFlatIconShowcase from '@components/components/control-panel-flat-icon/showcase/control-panel-flat-icon.showcase';
import ControlPanelMobileShowcase from '@components/components/control-panel-mobile/showcase/control-panel-mobile.showcase';
import ControlPanelNavigationItemShowcase from '@components/components/control-panel-navigation-item/showcase/control-panel-navigation-item.showcase';
import ControlPanelNavigationShowcase from '@components/components/control-panel-navigation/showcase/control-panel-navigation.showcase';
import CustomButtonShowcase from '@components/components/custom-button/showcase/custom-button.showcase';
import CustomSelectShowcase from '@components/components/custom-select/showcase/custom-select.showcase';
import DividerShowcase from '@components/components/divider/showcase/divider.showcase';
import DrawerShowcase from '@components/components/drawer/showcase/drawer.showcase';
import IconShowcase from '@components/components/icon/showcase/icon.showcase';
import InfotextShowcase from '@components/components/infotext/showcase/infotext.showcase';
import InputShowcase from '@components/components/input/showcase/input.showcase';
import LinkShowcase from '@components/components/link/showcase/link.showcase';
import NotificationShowcase from '@components/components/notification/showcase/notification.showcase';
import PopoverShowcase from '@components/components/popover/showcase/popover.showcase';
import RadioShowcase from '@components/components/radio/showcase/radio.showcase';
import SectionShowcase from '@components/components/section/showcase/section.showcase';
import SelectShowcase from '@components/components/select/showcase/select.showcase';
import ShellShowcase from '@components/components/shell/showcase/shell.showcase';
import StackShowcase from '@components/components/stack/showcase/stack.showcase';
import SwitchShowcase from '@components/components/switch/showcase/switch.showcase';
import TabItemShowcase from '@components/components/tab-item/showcase/tab-item.showcase';
import TableShowcase from '@components/components/table/showcase/table.showcase';
import TabsShowcase from '@components/components/tabs/showcase/tabs.showcase';
import TagShowcase from '@components/components/tag/showcase/tag.showcase';
import TextareaShowcase from '@components/components/textarea/showcase/textarea.showcase';
import TooltipShowcase from '@components/components/tooltip/showcase/tooltip.showcase';
import Home from '../components/home';

export type NavigationItem = {
	path: string;
	label: string;
	component?: any;
	subNavigation?: NavigationItem[];
};

export const getSortedNavigationItems = (
	navigationItems: NavigationItem[]
): any[] =>
	navigationItems.toSorted((a: NavigationItem, b: NavigationItem) =>
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
				path: 'control-panel-navigation-item',
				label: 'ControlPanelNavigationItem',
				component: <ControlPanelNavigationItemShowcase />
			},
			{
				path: 'control-panel-navigation',
				label: 'ControlPanelNavigation',
				component: <ControlPanelNavigationShowcase />
			},
			{
				path: 'shell',
				label: 'Shell',
				component: <ShellShowcase />
			},
			{
				path: 'control-panel-brand',
				label: 'ControlPanelBrand',
				component: <ControlPanelBrandShowcase />
			},
			{
				path: 'control-panel-desktop',
				label: 'ControlPanelDesktop',
				component: <ControlPanelDesktopShowcase />
			},
			{
				path: 'control-panel-flat-icon',
				label: 'ControlPanelFlatIcon',
				component: <ControlPanelFlatIconShowcase />
			},
			{
				path: 'control-panel-mobile',
				label: 'ControlPanelMobile',
				component: <ControlPanelMobileShowcase />
			}
		])
	},

	{
		path: '04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
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
			{ path: 'table', label: 'Table', component: <TableShowcase /> },

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
			{
				path: 'custom-button',
				label: 'CustomButton',
				component: <CustomButtonShowcase />
			},
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
			}
		])
	},
	{ path: '', label: 'Home', component: <Home /> }
];

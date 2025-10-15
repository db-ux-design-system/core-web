import AccordionComponent from '../components/accordion';
import AccordionItemComponent from '../components/accordion-item';
import BadgeComponent from '../components/badge';
import BrandComponent from '../components/brand';
import ButtonComponent from '../components/button';
import CardComponent from '../components/card';
import CheckboxComponent from '../components/checkbox';
import CustomSelectComponent from '../components/custom-select';
import DividerComponent from '../components/divider';
import DrawerComponent from '../components/drawer';
import HeaderComponent from '../components/header';
import Home from '../components/home';
import IconComponent from '../components/icon';
import InfotextComponent from '../components/infotext';
import InputComponent from '../components/input';
import LinkComponent from '../components/link';
import NavigationComponent from '../components/navigation';
import NavigationItemComponent from '../components/navigation-item';
import NotificationComponent from '../components/notification';
import PopoverComponent from '../components/popover';
import RadioComponent from '../components/radio';
import SectionComponent from '../components/section';
import SelectComponent from '../components/select';
import StackComponent from '../components/stack';
import SwitchComponent from '../components/switch';
import TabItemComponent from '../components/tab-item';
import TabsComponent from '../components/tabs';
import TagComponent from '../components/tag';
import TextareaComponent from '../components/textarea';
import TooltipComponent from '../components/tooltip';

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
				component: <NotificationComponent />
			},
			{ path: 'badge', label: 'Badge', component: <BadgeComponent /> }
		])
	},

	{
		path: '05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: 'navigation-item',
				label: 'NavigationItem',
				component: <NavigationItemComponent />
			},
			{
				path: 'navigation',
				label: 'Navigation',
				component: <NavigationComponent />
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
				component: <BrandComponent />
			},
			{
				path: 'infotext',
				label: 'Infotext',
				component: <InfotextComponent />
			},
			{
				path: 'icon',
				label: 'Icon',
				component: <IconComponent />
			},
			{
				path: 'tooltip',
				label: 'Tooltip',
				component: <TooltipComponent />
			},
			{ path: 'tag', label: 'Tag', component: <TagComponent /> },
			{
				path: 'accordion',
				label: 'Accordion',
				component: <AccordionComponent />
			},
			{
				path: 'accordion-item',
				label: 'AccordionItem',
				component: <AccordionItemComponent />
			},
			{
				path: 'tab-item',
				label: 'TabItem',
				component: <TabItemComponent />
			},
			{ path: 'tabs', label: 'Tabs', component: <TabsComponent /> }
		])
	},
	{
		path: '03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{
				path: 'custom-select',
				label: 'CustomSelect',
				component: <CustomSelectComponent />
			},
			{ path: 'input', label: 'Input', component: <InputComponent /> },
			{
				path: 'textarea',
				label: 'Textarea',
				component: <TextareaComponent />
			},
			{ path: 'radio', label: 'Radio', component: <RadioComponent /> },
			{
				path: 'checkbox',
				label: 'Checkbox',
				component: <CheckboxComponent />
			},
			{ path: 'switch', label: 'Switch', component: <SwitchComponent /> },
			{ path: 'select', label: 'Select', component: <SelectComponent /> }
		])
	},
	{
		path: '02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{ path: 'link', label: 'Link', component: <LinkComponent /> },
			{ path: 'button', label: 'Button', component: <ButtonComponent /> }
		])
	},
	{
		path: '01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{ path: 'stack', label: 'Stack', component: <StackComponent /> },
			{ path: 'card', label: 'Card', component: <CardComponent /> },
			{ path: 'drawer', label: 'Drawer', component: <DrawerComponent /> },
			{
				path: 'divider',
				label: 'Divider',
				component: <DividerComponent />
			},
			{
				path: 'section',
				label: 'Section',
				component: <SectionComponent />
			},
			{
				path: 'popover',
				label: 'Popover',
				component: <PopoverComponent />
			},
			{
				path: 'header',
				label: 'Header',
				component: <HeaderComponent />
			}
		])
	},
	{ path: '', label: 'Home', component: <Home /> }
];

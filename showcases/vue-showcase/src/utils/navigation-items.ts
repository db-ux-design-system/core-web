import type { RouteRecordRaw } from 'vue-router';
import NavigationItem from '../components/navigation-item/NavigationItem.vue';

import Select from '../components/select/Select.vue';

import Tag from '../components/tag/Tag.vue';
import Form from '../components/form/Form.vue';
import Button from '../components/button/Button.vue';
import Input from '../components/input/Input.vue';
import Link from '../components/link/Link.vue';
import Alert from '../components/alert/Alert.vue';
import Radio from '../components/radio/Radio.vue';
import Checkbox from '../components/checkbox/Checkbox.vue';
import Divider from '../components/divider/Divider.vue';
import Infotext from '../components/infotext/Infotext.vue';
import Section from '../components/section/Section.vue';
import Card from '../components/card/Card.vue';
import Drawer from '../components/drawer/Drawer.vue';

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
			{ path: '/06/alert', label: 'Alert', component: Alert }
		])
	},

	{
		path: '/05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: '/05/navigation-item',
				label: 'NavigationItem',
				component: NavigationItem
			},
			{
				path: '/05/xxx-test',
				label: 'Navigation Test',
				subNavigation: [
					{
						path: '/05/xxx-test/xxx-test-2',
						label: 'Navigation Test 2',
						component: Form
					}
				]
			}
		])
	},

	{
		path: '/04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
			{
				path: '/04/infotext',
				label: 'Infotext',
				component: Infotext
			},
			{ path: '/04/tag', label: 'Tag', component: Tag }
		])
	},
	{
		path: '/03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{ path: '/03/input', label: 'Input', component: Input },
			{ path: '/03/radio', label: 'Radio', component: Radio },
			{
				path: '/03/checkbox',
				label: 'Checkbox',
				component: Checkbox
			},
			{ path: '/03/select', label: 'Select', component: Select }
		])
	},
	{
		path: '/02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{ path: '/02/link', label: 'Link', component: Link },
			{ path: '/02/button', label: 'Button', component: Button }
		])
	},
	{
		path: '/01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{ path: '/01/card', label: 'Card', component: Card },
			{ path: '/01/drawer', label: 'Drawer', component: Drawer },
			{
				path: '/01/divider',
				label: 'Divider',
				component: Divider
			},
			{
				path: '/01/section',
				label: 'Section',
				component: Section
			}
		])
	},
	{ path: '/', label: 'Home', component: Form }
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

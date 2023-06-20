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

export const navigationItems: any[] = [
	{
		path: '/navigation-item',
		label: 'NavigationItem',
		component: NavigationItem
	},

	{ path: '/tag', label: 'Tag', component: Tag },
	{ path: '/', label: 'Home', component: Form },
	{ path: '/divider', label: 'Divider', component: Divider },
	{ path: '/select', label: 'Select', component: Select },
	{ path: '/radio', label: 'Radio', component: Radio },
	{ path: '/checkbox', label: 'Checkbox', component: Checkbox },
	{ path: '/alert', label: 'Alert', component: Alert },
	{ path: '/drawer', label: 'Drawer', component: Drawer },
	{ path: '/infotext', label: 'Infotext', component: Infotext },
	{ path: '/section', label: 'Section', component: Section },
	{ path: '/link', label: 'Link', component: Link },
	{ path: '/button', label: 'Button', component: Button },
	{ path: '/input', label: 'Input', component: Input },
	{ path: '/card', label: 'Card', component: Card }
];

export const getSortedNavigationItems = (): any[] =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	navigationItems.sort((a: any, b: any) => a.path.localeCompare(b.path));

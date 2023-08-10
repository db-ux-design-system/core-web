import AlertComponent from '../components/alert';
import BadgeComponent from '../components/badge';
import ButtonComponent from '../components/button';
import CardComponent from '../components/card';
import CheckboxComponent from '../components/checkbox';
import DividerComponent from '../components/divider';
import DrawerComponent from '../components/drawer';
import FormComponent from '../components/form';
import InfotextComponent from '../components/infotext';
import InputComponent from '../components/input';
import LinkComponent from '../components/link';
import NavigationItemComponent from '../components/navigation-item';
import RadioComponent from '../components/radio';
import SectionComponent from '../components/section';
import SelectComponent from '../components/select';
import TagComponent from '../components/tag';
import TextareaComponent from '../components/textarea';

export type NavigationItem = {
	path: string;
	label: string;
	component: any;
	home?: boolean;
};
export const NAVIGATION_ITEMS: NavigationItem[] = [
	{ path: 'textarea', label: 'Textarea', component: <TextareaComponent /> },
	{ path: 'badge', label: 'Badge', component: <BadgeComponent /> },
	{
		path: 'navigation-item',
		label: 'NavigationItem',
		component: <NavigationItemComponent />
	},
	{ path: 'checkbox', label: 'Checkbox', component: <CheckboxComponent /> },
	{ path: 'divider', label: 'Divider', component: <DividerComponent /> },
	{ path: 'tag', label: 'Tag', component: <TagComponent /> },
	{ path: 'select', label: 'Select', component: <SelectComponent /> },
	{ path: 'radio', label: 'Radio', component: <RadioComponent /> },
	{ path: 'alert', label: 'Alert', component: <AlertComponent /> },
	{ path: 'drawer', label: 'Drawer', component: <DrawerComponent /> },
	{ path: 'infotext', label: 'Infotext', component: <InfotextComponent /> },
	{ path: 'section', label: 'Section', component: <SectionComponent /> },
	{ path: 'link', label: 'Link', component: <LinkComponent /> },
	{ path: 'button', label: 'Button', component: <ButtonComponent /> },
	{ path: 'input', label: 'Input', component: <InputComponent /> },
	{ path: 'card', label: 'Card', component: <CardComponent /> },
	{ path: '', label: 'Home', component: <FormComponent />, home: true }
];

export const getSortedNavigationItems = (): any[] =>
	NAVIGATION_ITEMS.sort((a, b) => a.path.localeCompare(b.path));

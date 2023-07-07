import CheckboxComponent from '../components/checkbox';
import TagComponent from '../components/tag';
import DrawerComponent from '../components/drawer';
import SelectComponent from '../components/select';
import RadioComponent from '../components/radio';
import AlertComponent from '../components/alert';
import ButtonComponent from '../components/button';
import InputComponent from '../components/input';
import FormComponent from '../components/form';
import LinkComponent from '../components/link';
import SectionComponent from '../components/section';
import InfotextComponent from '../components/infotext';
import CardComponent from '../components/card';
import DividerComponent from '../components/divider';

export type NavigationItem = {
	path: string;
	label: string;
	component: any;
	home?: boolean;
};
export const NAVIGATION_ITEMS: NavigationItem[] = [
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

import AccordionComponent from '../components/accordion';
import DrawerComponent from '../components/drawer';
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
	{
		path: 'accordion',
		label: 'Accordion',
		component: <AccordionComponent />
	},
	{ path: 'divider', label: 'Divider', component: <DividerComponent /> },
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

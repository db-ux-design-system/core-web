import RadioComponent from '../components/radio';

import AlertComponent from '../components/alert';
import ButtonComponent from '../components/button';
import InputComponent from '../components/input';
import FormComponent from '../components/form';
import LinkComponent from '../components/link';
import SectionComponent from '../components/section';
import InfotextComponent from '../components/infotext';
import CardComponent from '../components/card';

export type NavigationItem = {
	path: string;
	label: string;
	component: any;
	home?: boolean;
};
export const NAVIGATION_ITEMS: NavigationItem[] = [
	{ path: 'radio', label: 'Radio', component: <RadioComponent /> },

	{ path: 'alert', label: 'Alert', component: <AlertComponent /> },
	{ path: 'infotext', label: 'Infotext', component: <InfotextComponent /> },
	{ path: 'section', label: 'Section', component: <SectionComponent /> },
	{ path: 'link', label: 'Link', component: <LinkComponent /> },
	{ path: 'button', label: 'Button', component: <ButtonComponent /> },
	{ path: 'input', label: 'Input', component: <InputComponent /> },
	{ path: 'card', label: 'Card', component: <CardComponent /> },
	{ path: '', label: 'Home', component: <FormComponent />, home: true }
];

import ButtonComponent from '../components/button';
import InputComponent from '../components/input';
import FormComponent from '../components/form';

export type NavigationItem = {
	path: string;
	label: string;
	component: any;

	home?: boolean;
};
export const NAVIGATION_ITEMS: NavigationItem[] = [
	{ path: 'button', label: 'Button', component: <ButtonComponent /> },
	{ path: 'input', label: 'Input', component: <InputComponent /> },
	{ path: '', label: 'Home', component: <FormComponent />, home: true }
];

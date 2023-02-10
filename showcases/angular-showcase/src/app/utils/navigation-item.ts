import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { FormComponent } from '../components/form/form.component';

export const NAVIGATION_ITEMS = [
	{ path: 'button', label: 'Button', component: ButtonComponent },
	{ path: 'input', label: 'Input', component: InputComponent },
	{ path: '', label: 'Home', component: FormComponent, pathMatch: 'full' }
];

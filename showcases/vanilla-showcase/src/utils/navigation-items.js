import Form from '../components/form/index';
import Button from '../components/button/index';
import Input from '../components/input/index';

export const navigationItems = [
	{ path: '/', label: 'Home', component: Form },
	{ path: '/button', label: 'Button', component: Button },
	{ path: '/input', label: 'Input', component: Input }
];

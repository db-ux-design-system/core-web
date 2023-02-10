import Form from '../components/form/index';
import Button from '../components/button/index';
import Input from '../components/input/index';
import { navigationPaths } from './navigation-paths.js';

export const navigationItems = [
	{ path: '/', label: 'Home', component: Form },
	{ path: navigationPaths.button, label: 'Button', component: Button },
	{ path: navigationPaths.input, label: 'Input', component: Input }
];

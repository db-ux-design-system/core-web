import Form from '../components/form/Form.vue';
import Button from '../components/button/Button.vue';
import Input from '../components/input/Input.vue';
import Link from '../components/link/Link.vue';

export const navigationItems: any = [
	{ path: '/', label: 'Home', component: Form },
	{ path: '/button', label: 'Button', component: Button },
	{ path: '/input', label: 'Input', component: Input },
	{ path: '/link', label: 'Link', component: Link }
];

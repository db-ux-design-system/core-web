import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { FormComponent } from '../components/form/form.component';
import { LinkComponent } from '../components/link/link.component';
import { AlertComponent } from '../components/alert/alert.component';
import { RadioComponent } from '../components/radio/radio.component';
import { InfotextComponent } from '../components/infotext/infotext.component';
import { SectionComponent } from '../components/section/section.component';
import { CardComponent } from '../components/card/card.component';
import { DividerComponent } from '../components/divider/divider.component';
import { DrawerComponent } from '../components/drawer/drawer.component';

export const NAVIGATION_ITEMS: any[] = [
	{ path: 'divider', label: 'Divider', component: DividerComponent },
	{ path: 'radio', label: 'Radio', component: RadioComponent },
	{ path: 'alert', label: 'Alert', component: AlertComponent },
	{ path: 'drawer', label: 'Drawer', component: DrawerComponent },
	{ path: 'infotext', label: 'Infotext', component: InfotextComponent },
	{ path: 'section', label: 'Section', component: SectionComponent },
	{ path: 'link', label: 'Link', component: LinkComponent },
	{ path: 'button', label: 'Button', component: ButtonComponent },
	{ path: 'input', label: 'Input', component: InputComponent },
	{ path: 'card', label: 'Card', component: CardComponent },
	{ path: '', label: 'Home', component: FormComponent, pathMatch: 'full' }
];

export const getSortedNavigationItems = (): any[] =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	NAVIGATION_ITEMS.sort((a, b) => a.path.localeCompare(b.path));

import { Routes } from '@angular/router';
import { AccordionItemComponent } from '../components/accordion-item/accordion-item.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { TextareaComponent } from '../components/textarea/textarea.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { NavigationItemComponent } from '../components/navigation-item/navigation-item.component';
import { MainNavigationComponent } from '../components/main-navigation/main-navigation.component';
import { SelectComponent } from '../components/select/select.component';
import { TagComponent } from '../components/tag/tag.component';
import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { FormComponent } from '../components/form/form.component';
import { LinkComponent } from '../components/link/link.component';
import { AlertComponent } from '../components/alert/alert.component';
import { RadioComponent } from '../components/radio/radio.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { InfotextComponent } from '../components/infotext/infotext.component';
import { SectionComponent } from '../components/section/section.component';
import { CardComponent } from '../components/card/card.component';
import { DividerComponent } from '../components/divider/divider.component';
import { DrawerComponent } from '../components/drawer/drawer.component';

export type NavItem = {
	path: string;
	label: string;
	component?: any;
	subNavigation?: NavItem[];
};

export const getSortedNavigationItems = (navigationItems: NavItem[]): any[] =>
	navigationItems.sort((a: NavItem, b: NavItem) =>
		a.path.localeCompare(b.path)
	);

export const NAVIGATION_ITEMS: NavItem[] = [
	{
		path: '06',
		label: '06 Feedback',
		subNavigation: getSortedNavigationItems([
			{ path: '06/alert', label: 'Alert', component: AlertComponent },
			{ path: '06/badge', label: 'Badge', component: BadgeComponent }
		])
	},

	{
		path: '05',
		label: '05 Navigation',
		subNavigation: getSortedNavigationItems([
			{
				path: '05/navigation-item',
				label: 'NavigationItem',
				component: NavigationItemComponent
			},
			{
				path: '05/main-navigation',
				label: 'MainNavigation',
				component: MainNavigationComponent
			}
		])
	},

	{
		path: '04',
		label: '04 Data-Display',
		subNavigation: getSortedNavigationItems([
			{
				path: '04/infotext',
				label: 'Infotext',
				component: InfotextComponent
			},
			{ path: '04/tag', label: 'Tag', component: TagComponent },
			{
				path: '04/accordion',
				label: 'Accordion',
				component: AccordionComponent
			},
			{
				path: '04/accordion-item',
				label: 'AccordionItem',
				component: AccordionItemComponent
			}
		])
	},
	{
		path: '03',
		label: '03 Data-Input',
		subNavigation: getSortedNavigationItems([
			{ path: '03/input', label: 'Input', component: InputComponent },
			{
				path: '03/textarea',
				label: 'Textarea',
				component: TextareaComponent
			},
			{ path: '03/radio', label: 'Radio', component: RadioComponent },
			{
				path: '03/checkbox',
				label: 'Checkbox',
				component: CheckboxComponent
			},
			{ path: '03/select', label: 'Select', component: SelectComponent }
		])
	},
	{
		path: '02',
		label: '02 Action',
		subNavigation: getSortedNavigationItems([
			{ path: '02/link', label: 'Link', component: LinkComponent },
			{ path: '02/button', label: 'Button', component: ButtonComponent }
		])
	},
	{
		path: '01',
		label: '01 Layout',
		subNavigation: getSortedNavigationItems([
			{ path: '01/card', label: 'Card', component: CardComponent },
			{ path: '01/drawer', label: 'Drawer', component: DrawerComponent },
			{
				path: '01/divider',
				label: 'Divider',
				component: DividerComponent
			},
			{
				path: '01/section',
				label: 'Section',
				component: SectionComponent
			}
		])
	},
	{ path: '', label: 'Home', component: FormComponent }
];

const pushRoute = (routes: Routes, item: NavItem) => {
	routes.push({
		path: item.path,
		component: item.component,
		redirectTo: item.component ? undefined : '/',
		pathMatch: 'full'
	});

	if (item.subNavigation) {
		for (const subItem of item.subNavigation) {
			pushRoute(routes, subItem);
		}
	}
};

export const getRoutes = (): Routes => {
	const routes: Routes = [];

	for (const item of NAVIGATION_ITEMS) {
		pushRoute(routes, item);
	}

	return routes;
};

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBButton,
	DBDrawer
} from '../../../../../../packages/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/drawer.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-drawer',
	templateUrl: './drawer.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBDrawer, DBButton],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class DrawerComponent {
	variants = defaultComponentVariants;
	openDrawer: string | undefined = undefined;
	toggleDrawer = (example?: string) => {
		this.openDrawer = example;
	};
}

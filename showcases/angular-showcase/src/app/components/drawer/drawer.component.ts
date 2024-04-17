import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/drawer.json';
import { DefaultComponent } from '../default.component';
import { DBButton, DBDrawer } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-drawer',
	templateUrl: './drawer.component.html',
	imports: [DefaultComponent, DBDrawer, DBButton],
	standalone: true
})
export class DrawerComponent {
	variants = defaultComponentVariants;
	openDrawer: string | undefined = undefined;
	toggleDrawer = (example?: string) => {
		this.openDrawer = example;
	};
}

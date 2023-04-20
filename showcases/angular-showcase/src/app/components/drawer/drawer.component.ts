import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/drawer.json';

@Component({
	selector: 'app-drawer',
	templateUrl: './drawer.component.html'
})
export class DrawerComponent {
	variants = defaultComponentVariants;
	openDrawer: string | undefined = undefined;
	toggleDrawer = (example?: string) => {
		this.openDrawer = example;
	};
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBButton,
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '@components';
import defaultComponentVariants from '../../../../../shared/control-panel-desktop.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-control-panel-desktop',
	templateUrl: './control-panel-desktop.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [
					DefaultComponent,
					DBControlPanelDesktop,
					DBControlPanelBrand,
					DBControlPanelMetaNavigation,
					DBNavigation,
					DBNavigationItem,
					DBControlPanelPrimaryActions,
					DBControlPanelSecondaryActions,
					DBButton,
					DBLink
				]
	],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class ControlPanelDesktopComponent {
	variants = defaultComponentVariants;
}

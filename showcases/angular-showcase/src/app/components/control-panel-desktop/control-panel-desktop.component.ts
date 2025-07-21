import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '@components';
import defaultComponentVariants from '../../../../../shared/control-panel-desktop.json';
import { environment } from '../../../environments/environment';
import { PrimaryActionsComponent } from '../../control-panel/primary-actions/primary-actions.component';
import { SecondaryActionsComponent } from '../../control-panel/secondary-actions/secondary-actions.component';
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
					PrimaryActionsComponent,
					SecondaryActionsComponent,
					DBLink
				]
	],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class ControlPanelDesktopComponent {
	variants = defaultComponentVariants;
}

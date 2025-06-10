import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/control-panel-desktop.json';
import { DefaultComponent } from '../default.component';
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '@components';
import { environment } from '../../../environments/environment';
import { PrimaryActionsComponent } from '../../control-panel/primary-actions/primary-actions.component';
import { SecondaryActionsComponent } from '../../control-panel/secondary-actions/secondary-actions.component';

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

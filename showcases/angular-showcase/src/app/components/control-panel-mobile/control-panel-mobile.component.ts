import { Component } from '@angular/core';

import {
	DBButton,
	DBControlPanelBrand,
	DBControlPanelFlatIconNavigation,
	DBControlPanelMetaNavigation,
	DBControlPanelMobile,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '@components';
import defaultComponentVariants from '../../../../../shared/control-panel-mobile.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-control-panel-mobile',
	templateUrl: './control-panel-mobile.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [
					DefaultComponent,
					DBControlPanelMobile,
					DBControlPanelBrand,
					DBControlPanelMetaNavigation,
					DBControlPanelFlatIconNavigation,
					DBNavigation,
					DBNavigationItem,
					DBControlPanelPrimaryActions,
					DBControlPanelSecondaryActions,
					DBButton,
					DBLink
				]
	],
	standalone: true
})
export class ControlPanelMobileComponent {
	variants = defaultComponentVariants;
}

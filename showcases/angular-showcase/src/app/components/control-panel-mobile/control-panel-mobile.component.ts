import { Component } from '@angular/core';

import { DBControlPanelMobile } from '@components';
import defaultComponentVariants from '../../../../../shared/control-panel-mobile.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-control-panel-mobile',
	templateUrl: './control-panel-mobile.component.html',
	imports: [DefaultComponent, DBControlPanelMobile],
	standalone: true
})
export class ControlPanelMobileComponent {
	variants = defaultComponentVariants;
}

import { Component } from '@angular/core';

import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/control-panel-mobile.json';
import { DBControlPanelMobile } from '@components';

@Component({
	selector: 'app-control-panel-mobile',
	templateUrl: './control-panel-mobile.component.html',
	imports: [DefaultComponent, DBControlPanelMobile],
	standalone: true
})
export class ControlPanelMobileComponent {
	variants = defaultComponentVariants;
}



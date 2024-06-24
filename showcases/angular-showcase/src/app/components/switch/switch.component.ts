import { Component } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/switch.json';
import { DBSwitch } from '../../../../../../output/angular/src/components/switch';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	imports: [DefaultComponent, DBSwitch, DBInfotext],
	standalone: true
})
export class SwitchComponent {
	variants = defaultComponentVariants;
}

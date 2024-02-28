import { Component } from '@angular/core';
import { DBCheckbox } from '../../../../../../output/angular/src/components/checkbox/checkbox';
import defaultComponentVariants from '../../../../../shared/checkbox.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	imports: [DefaultComponent, DBCheckbox],
	standalone: true
})
export class CheckboxComponent {
	variants = defaultComponentVariants;
}

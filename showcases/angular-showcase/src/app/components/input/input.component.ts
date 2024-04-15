import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/input.json';
import { DefaultComponent } from '../default.component';
import { DBInput } from '../../../../../../output/angular/src/components/input/input';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	imports: [DefaultComponent, DBInput],
	standalone: true
})
export class InputComponent {
	variants = defaultComponentVariants;
}

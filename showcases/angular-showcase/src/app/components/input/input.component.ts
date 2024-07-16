import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/input.json';
import { DefaultComponent } from '../default.component';
import {
	DBInput,
	LabelVariantType,
	ValueLabelType
} from '../../../../../../output/angular/src';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	imports: [DefaultComponent, DBInput],
	standalone: true
})
export class InputComponent {
	variants = defaultComponentVariants;

	getDataList = (variant?: LabelVariantType): string[] | ValueLabelType[] => {
		if (variant === 'floating') {
			return ['Test 1', 'Test 2'];
		}

		return [
			{ value: 'test1', label: 'Test 1' },
			{ value: 'test2', label: 'Test 2' }
		];
	};
}

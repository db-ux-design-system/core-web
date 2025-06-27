import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBInput,
	LabelVariantType,
	ValueLabelType
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/input.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	standalone: true,
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBInput]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
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

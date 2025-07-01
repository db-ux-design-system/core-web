import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import {
	DBCheckbox,
	DBInput,
	DBRadio,
	DBSelect,
	DBTextarea
} from '../../../../../../../output/angular/src';
import { environment } from '../../../../environments/environment';
import { DefaultComponent } from '../../default.component';

@Component({
	selector: 'app-textareas',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBTextarea, FormsModule, ReactiveFormsModule],
	templateUrl: './textareas.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TextareasComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
	public handlePlainChange(event: any) {
		this.plain = event.target.value;
	}
}

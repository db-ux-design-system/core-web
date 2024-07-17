import { Component } from '@angular/core';
import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '../../../../../../output/angular/src';
import { InputsComponent } from '../form/inputs/inputs.component';
import { FormComponent } from '../form/form.component';
import { TextareasComponent } from '../form/textareas/textareas.component';
import { SelectsComponent } from '../form/selects/selects.component';
import { CheckboxesComponent } from '../form/checkboxes/checkboxes.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	imports: [
		DBTabs,
		DBTabItem,
		DBTabList,
		DBTabPanel,
		InputsComponent,
		FormComponent,
		TextareasComponent,
		SelectsComponent,
		CheckboxesComponent
	],
	standalone: true
})
export class HomeComponent {}

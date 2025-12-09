import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBTabItem, DBTabList, DBTabPanel, DBTabs } from '@components';
import { environment } from '../../../environments/environment';
import { CheckboxesComponent } from '../form/checkboxes/checkboxes.component';
import { CustomSelectsComponent } from '../form/custom-selects/custom-selects.component';
import { FormComponent } from '../form/form.component';
import { InputsComponent } from '../form/inputs/inputs.component';
import { RadiosComponent } from '../form/radios/radios.component';
import { SelectsComponent } from '../form/selects/selects.component';
import { SwitchesComponent } from '../form/switches/switches.component';
import { TextareasComponent } from '../form/textareas/textareas.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [
		InputsComponent,
		FormComponent,
		TextareasComponent,
		SelectsComponent,
		CheckboxesComponent,
		RadiosComponent,
		CustomSelectsComponent,
		SwitchesComponent,
		...(environment.webComponents
			? []
			: [DBTabs, DBTabItem, DBTabList, DBTabPanel])
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class HomeComponent {}

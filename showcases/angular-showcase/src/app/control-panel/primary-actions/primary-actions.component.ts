import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBButton, DBControlPanelPrimaryActions } from '@components';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-primary-actions',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	imports: environment.webComponents
		? []
		: [DBControlPanelPrimaryActions, DBButton],
	templateUrl: './primary-actions.component.html'
})
export class PrimaryActionsComponent {}

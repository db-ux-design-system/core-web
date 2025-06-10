import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBButton, DBControlPanelSecondaryActions } from '@components';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-secondary-actions',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	imports: environment.webComponents
		? []
		: [DBControlPanelSecondaryActions, DBButton],
	templateUrl: './secondary-actions.component.html'
})
export class SecondaryActionsComponent {}

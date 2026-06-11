import { Component } from '@angular/core';
import { DBButton, DBControlPanelSecondaryActions } from '@components';

@Component({
	selector: 'app-secondary-actions',
	schemas: [],
	imports: [DBControlPanelSecondaryActions, DBButton],
	templateUrl: './secondary-actions.component.html'
})
export class SecondaryActionsComponent {}

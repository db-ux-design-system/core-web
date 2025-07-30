import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DBControlPanelMetaNavigation, DBLink } from '@components';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-meta-navigation',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	imports: environment.webComponents
		? []
		: [DBControlPanelMetaNavigation, DBLink, FormsModule],
	templateUrl: './meta-navigation.component.html'
})
export class MetaNavigationComponent {}

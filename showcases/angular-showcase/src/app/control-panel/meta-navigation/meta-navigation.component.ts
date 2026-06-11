import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DBControlPanelMetaNavigation, DBLink } from '@components';

@Component({
	selector: 'app-meta-navigation',
	schemas: [],
	imports: [DBControlPanelMetaNavigation, DBLink, FormsModule],
	templateUrl: './meta-navigation.component.html'
})
export class MetaNavigationComponent {}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DBControlPanelMeta, DBLink } from '@components';

@Component({
	selector: 'app-meta-navigation',
	schemas: [],
	imports: [DBControlPanelMeta, DBLink, FormsModule],
	templateUrl: './meta-navigation.component.html'
})
export class MetaNavigationComponent {}

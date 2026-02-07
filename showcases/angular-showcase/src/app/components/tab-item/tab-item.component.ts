import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBTabItem, DBTabList } from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/tab-item.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-tab',
	templateUrl: './tab-item.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBTabItem, DBTabList],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class TabItemComponent {
	variants = defaultComponentVariants;
}

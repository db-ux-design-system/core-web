import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBInfotext,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/tabs.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [
				DefaultComponent,
				DBTabs,
				DBTabItem,
				DBTabList,
				DBTabPanel,
				DBInfotext
			],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class TabsComponent {
	variants = defaultComponentVariants;
}

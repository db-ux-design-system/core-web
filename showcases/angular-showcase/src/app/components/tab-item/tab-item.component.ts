import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tab-item.json';
import { DefaultComponent } from '../default.component';
import { DBTabItem, DBTabList } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

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
